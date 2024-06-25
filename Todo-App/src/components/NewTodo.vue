<template>
  <form @submit.prevent="newTodo()" class="col-12 col-lg-6">
    <input
      v-model="newTodoName"
      type="text"
      placeholder="Enter New Todo"
      class="form-control"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodoName: "",
    };
  },
  methods: {
    newTodo() {
      if (this.newTodoName.length > 1) {
        this.$emit("on-newtodo", this.newTodoName);
        this.newTodoName = "";
      }
    },
  },
};
</script>

<style scoped>
</style>