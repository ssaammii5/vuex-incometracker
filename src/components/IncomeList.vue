<template>
  <div class="income-list">
    <IncomeItem
      v-for="obj in sortedIncome"
      :key="obj.id"
      :income="obj"
      @remove-item="removeItem"
    />
  </div>
</template>

<script>
import IncomeItem from "./IncomeItem";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  components: {
    IncomeItem,
  },

  setup() {
    const store = useStore();

    function removeItem(id) {
      store.dispatch("removeItem", id);
    }

    const sortedIncome = computed(() => store.getters.sortedIncome);

    return {
      removeItem,
      sortedIncome,
    };
  },
};
</script>

<style scoped>
.income-list {
  margin-top: 30px;
  padding: 15px;
}
</style>
