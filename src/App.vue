<script setup>
/*Import All Library */
import { onMounted } from "vue";
import { useTodoStore } from "./stores/todo.js";

/*Instance and Variables*/
const todoStore = useTodoStore();

/*Methods*/
/*Hooks, Computed, watch*/
onMounted(() => {
  todoStore.getAllTodos();
});
</script>

<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center">Task List</h4>
            <div class="row">
              <form action="">
                <div class="col-md-12">
                  <label for="form-label">
                    <span v-if="!todoStore.isEdit">Add New Task</span>
                    <span v-else>Update Task</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="todoStore.todoForm.title"
                  />
                </div>
                <div class="mt-3" v-if="!todoStore.isEdit">
                  <input
                    type="button"
                    class="btn btn-success"
                    value="Add Task"
                    @click.prevent="todoStore.createTodo"
                  />
                </div>
                <div class="mt-3" v-else>
                  <input
                    type="button"
                    class="btn btn-warning"
                    value="Update Task"
                    @click.prevent="todoStore.updateTodo(todoStore.editId)"
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="card-body">
            <h4 class="text-danger">Tasks</h4>
            <ul class="list-group">
              <li
                v-for="todo in todoStore.todos"
                :key="todo.id"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <div class="">
                  <span>
                    {{ todo.title }}
                  </span>
                </div>
                <div class="">
                  <button class="btn" @click.prevent="todoStore.getTodo(todo.id)">
                    <i class="fa-solid fa-edit"></i>
                  </button>
                  <button class="btn" @click.prevent="todoStore.deleteTodo(todo.id)">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
