<template>
 <div class="radio-inputs">
  <label
    v-for="(option, index) in options"
    :key="index"
    :for="`option-${index}`"
    :class="{'active': option.url == value.url}"
  >
    <input
      :id="`option-${index}`"
      :name="labelName"
      :value="option"
      :checked="option.url == value.url"
      @change="$emit('picked', option)"
      type="radio"
      class="hidden"
    >
      <img class="rounded h-6 w-6 -ml-2 mr-2" v-if="option.icon" :src="option.icon">
      {{ option.title }}
  </label>
 </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'picked',
  },
  props: {
    value: Object,
    options: Array,
    labelName: String,
  },
};
</script>

<style lang="scss" scoped>
  .radio-inputs {
    @apply w-full flex justify-between;
  }
  label {
    @apply px-4 py-2 cursor-pointer inline-flex;
  }
  label.active, label:hover {
    @apply bg-blue-800 text-white rounded;
  }
</style>
