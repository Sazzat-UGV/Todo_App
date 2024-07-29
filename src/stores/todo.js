import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
    todoForm: {
      title: null,
      userId: 1,
      completed: false,
    },
  }),

  getters: {},

  actions: {
    async getAllTodos() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      this.todos = data;
    },

    async createTodo() {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        this.todoForm
      );
      this.todos.push(data);
      this.todos.reverse();
      this.todoForm.title = null;
    },
  },
});
