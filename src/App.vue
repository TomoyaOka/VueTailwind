<template>
  <div id="app">
    <h1>TodoList</h1>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/css/reset.css";

html {
  font-size: 62.5%;
}

:root {
  --max: 80rem;
}

body {
  font-size: 1.6rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
