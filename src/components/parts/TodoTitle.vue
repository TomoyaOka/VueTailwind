<template>
  <div>
    <label for="" class="block mb-1">TaskName</label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
      class="border-b border-solid border-gray-400 w-4/5 max-w-full text-left py-2 md:w-full"
      placeholder="タスクを入力"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>
