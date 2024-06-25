<template>
  <!-- <h1>Hey this is Todo List</h1> -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p class="display-3">Vue Crash Course</p>
      </div>
    </div>
    <div class="row">
      <NewTodo @on-newtodo="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12 col-lg-6">
        <ul class="list-group">
          <SingleTodo
            v-for="(todo, index) in todos"
            :key="index"
            :todoName="todo.todoName"
            :isCompleted="todo.isCompleted"
            @on-delete = "deleteTodo(todo)"
            @on-toggle = "toggleTodo(todo)"
            @on-edit = "editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTodo from "./SingleTodo.vue";
import NewTodo from "./NewTodo.vue";

export default {
  components: {
    SingleTodo,
    NewTodo
},
  data() {
    return {
      todos: [
        { todoName: "Learn Angular", isCompleted: true },
        { todoName: "Learn Vue", isCompleted: false },
        { todoName: "Learn React", isCompleted: false },
        { todoName: "Learn Javascript", isCompleted: true },
      ],
    };
  },
  methods: {
    addTodo(userTodoName) {
      this.todos.push({
        todoName: userTodoName,
        isCompleted: false,
      });
    },
    toggleTodo(todo) {
      todo.isCompleted = !todo.isCompleted;
    },
    editTodo(todo, userTodoName) {
      todo.todoName = userTodoName;
    },
    deleteTodo(deleteTodo) {
      this.todos = this.todos.filter((todo) => todo !== deleteTodo);
    },
  },
};
</script>

<style>

</style>