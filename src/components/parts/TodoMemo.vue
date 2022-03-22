<template>
  <div>
    <label for="" class="block mb-1">タスク名</label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
      class="border-b border-solid border-gray-400 w-4/5 max-w-full text-left py-2"
      placeholder="タスクを入力"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>
