<template>
  <div class="Todo">
    <section class="TodoInput border-b border-solid border-gray-800">
      <div class="TodoText">
        <TodoTitle v-model="newTodo" />
      </div>
      <!-- <div class="TodoText">
        <TodoMemo v-model="newMemo" />
      </div> -->
      <div class="SubmitBtn">
        <TodoSubmit @click.native="addTodo()" />
      </div>
    </section>
    <section class="TodoDisplay">
      <h2 class="TodoDisplay_Title">All Task</h2>
      <ul class="TodoList">
        <li
          v-for="(todo, i) in todos"
          v-bind:key="i"
          class="border-b border-solid border-gray-600"
        >
          <span>{{ todo }}</span>
          <TodoDelete @click.native="deleteTodo(i)" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import TodoTitle from "@/components/parts/TodoTitle";
import TodoDelete from "@/components/parts/TodoDelete";
import TodoSubmit from "@/components/parts/TodoSubmit";

export default {
  name: "HomeView",
  components: {
    TodoTitle,
    TodoSubmit,
    TodoDelete,
  },
  data() {
    return {
      todos: [],
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo === "") {
        alert("タスクを入力してください");
        return;
      } else {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    },
    deleteTodo(i) {
      this.todos.splice(i, 1);
    },
  },
};
</script>

<style scoped>
.Todo {
  max-width: var(--max);
  margin: auto;
}
.TodoInput {
  max-width: var(--max);
  padding: 4rem 0;
  margin-bottom: 3rem;
}

.TodoDisplay {
  max-width: var(--max);
  min-height: 20rem;
  margin: 0 auto 3rem auto;
  padding: 2rem 1rem;
}
@media (max-width: 768px) {
  .TodoDisplay {
    min-height: 30rem;
    padding: 2rem 0;
  }
}

.TodoDisplay_Title {
  font-size: 3.4rem;
  margin-bottom: 3rem;
}
@media (max-width: 768px) {
  .TodoDisplay_Title {
    font-size: 1.8rem;
  }
}

.TodoList li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  margin-bottom: 3rem;
  padding-bottom: 0.2rem;
  position: relative;
}

.TodoList li span {
  max-width: 90%;
}
@media (max-width: 768px) {
  .TodoList li span {
    max-width: 80%;
  }
}

.TodoText {
  margin-bottom: 3rem;
}
</style>
