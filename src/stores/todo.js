import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),

  getters: {},

  actions: {
    async getAllTodos() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      this.todos = data;
    },
  },
});
