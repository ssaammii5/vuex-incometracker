<template>
  <Header />
  <Form />
  <IncomeList />
</template>

<script>
import Header from './components/Header.vue';
import Form from "./components/Form";
import IncomeList from "./components/IncomeList";

export default {
  components: {
    Header,
    Form,
    IncomeList,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}

body {
  background: #eee;
}
</style>
