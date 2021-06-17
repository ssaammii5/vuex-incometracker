import { createStore } from "vuex";

export default createStore({
  state: {
    income: []
  },

  getters: {
    totalIncome(state){
      let temp  = 0;
      if(state.income.length > 0){
        for(let i = 0; i < state.income.length; i++){
          temp += state.income[i].value;
        }
        return temp;
      } else {
        return 0;
      }
    },

    sortedIncome(state){
      let temp = [];

      temp = state.income.sort(function (a, b) {
        return b.date - a.date;
      });

      return temp;
    }
  },

  mutations:{
    AddIncome(state,obj) {
      let d = obj.date.split("-");
      let newD = new Date(d[0], d[1], d[2]);

      state.income = [...state.income, {
        id: Date.now(),
        desc: obj.desc,
        value: parseInt(obj.value),
        date: newD.getTime(),
      }]
    }, 

    removeItem(state,id) {
      state.income = state.income.filter((v) => v.id != id);
    }
  },

  actions: {
    AddIncome({commit}, obj){
      commit('AddIncome', obj);
    }, 

    removeItem({commit}, id){
      commit('removeItem', id);
    }
  },
  modules: {},
});
