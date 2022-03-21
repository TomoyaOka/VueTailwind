<template>
  <div class="Todo">
    <section class="TodoInput border-b border-solid border-gray-800">
      <div class="TodoText">
        <TodoTitle />
      </div>
      <div class="SubmitBtn">
        <TodoSubmit />
      </div>
    </section>
    <section class="TodoDisplay"></section>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoTitle from "@/components/parts/TodoTitle";
// import TodoMemo from "@/components/parts/TodoMemo";
import TodoSubmit from "@/components/parts/TodoSubmit";

export default {
  name: "HomeView",
  components: {
    TodoTitle,
    // TodoMemo,
    TodoSubmit,
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
  background-color: #e0e0e0;
  /* border-bottom: 1px rgb(134, 134, 134) solid; */
  padding: 4rem 0;
  margin-bottom: 3rem;
}

.TodoDisplay {
  max-width: var(--max);
  min-height: 20rem;
  border: 1px #333 solid;
  margin: 0 auto 3rem auto;
  padding: 2rem;
}

.TodoText {
  margin-bottom: 3rem;
}
</style>
