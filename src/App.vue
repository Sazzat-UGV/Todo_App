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
                  <label for="form-label">Add New Task</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mt-3">
                  <input type="button" class="btn btn-success" value="Add Task" />
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
                <span :class="todo.completed ? 'text-decoration-line-through' : ''">
                  {{ todo.title }}
                </span>
                <a href="" class="btn"> <i class="fa-solid fa-xmark"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
