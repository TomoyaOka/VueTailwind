<template>
  <button
    class="block w-3/6 max-w-full px-4 py-6 text-center bg-blue-400 hover:bg-blue-500 text-white transition-all"
    @click="$emit('btnClick')"
  >
    add Task
  </button>
</template>

<script>
export default {};
</script>
