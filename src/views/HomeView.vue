<template>
  <div class="Todo">
    <section class="TodoInput">
      <TodoTitle />
      <TodoMemo />
      <TodoSubmit />
    </section>
    <section class="TodoDisplay"></section>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoTitle from "@/components/parts/TodoTitle.vue";
import TodoMemo from "@/components/parts/TodoMemo.vue";
import TodoSubmit from "@/components/parts/TodoSubmit.vue";

export default {
  name: "HomeView",
  components: {
    TodoTitle,
    TodoMemo,
    TodoSubmit,
  },
};
</script>

<style scoped>
.TodoInput {
  max-width: var(--max);
  border: 1px solid;
  margin: 0 auto 3rem auto;
  padding: 2rem;
}

.TodoDisplay {
  max-width: var(--max);
  min-height: 30rem;
  border: 1px solid;
  margin: 0 auto 3rem auto;
  padding: 2rem;
}
</style>
