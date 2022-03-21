<template>
  <div id="app">
    <h1 class="Title">TodoList</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    setMeta(route) {
      // タイトルを設定
      if (route.meta.title) {
        let setTitle = route.meta.title;
        document.title = setTitle;
      }
      // ディスクリプションを設定
      if (route.meta.desc) {
        let setDesc = route.meta.desc;
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", setDesc);
      }
    },
  },
  mounted() {
    let route = this.$route;
    this.setMeta(route);
  },
  watch: {
    $route(route) {
      this.setMeta(route);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/reset.css";

html {
  font-size: 62.5%;
}

:root {
  --max: 100rem;
}

body {
  font-size: 1.6rem;
  background-color: #e0e0e0;
}

#app {
  max-width: var(--max);
  margin: 2rem auto 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0 2rem;
}

.Title {
  font-size: 4.8rem;
}
</style>
