<template>
  <h1>H</h1>
  <TodoList />
</template>

<script>
import TodoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
body {
  background-color: rgb(66, 66, 66);
  color: aliceblue;
}
</style>