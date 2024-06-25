<template>
  <!-- <h1>{{todoName}}</h1> -->
  <li class="d-flex align-items-center list-group-item">
    <button
    v-if="!isEditing"
      :class="{ isCompleted }"
      @click="$emit('on-toggle')"
      class="btn border-0 text-left flex-grow-1"
    >
      {{ todoName }}
    </button>
    <form v-else @submit.prevent="endEditing()" action="" class="flex-grow-1">
      <input @blur="startEditing()" v-model="newTodo" type="text" class="form-control" />
    </form>
    <button @click="startEditing()" class="btn btn-outline-primary">Edit</button>
    <button @click="$emit('on-delete')" class="btn btn-outline-danger">
      Delete
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todoName: String,
    isCompleted: Boolean,
  },
  data() {
    return {
      isEditing: false,
      newTodo: "",
    };
  },
  methods: {
    startEditing() {
      if (!this.isEditing) {
        this.newTodo = this.todoName;
        this.isEditing = true;
      } else {
        this.endEditing();
      }
    },
    endEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newTodo);
    },
  },
};
</script>

<style scoped>
.isCompleted {
  text-decoration: line-through;
}
</style>>