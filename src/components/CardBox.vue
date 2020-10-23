<template>
  <transition name="scale" appear>
  <div
    class="my-4 rounded shadow border-l-4 border-blue-800 bg-gray-100 px-4 py-4"
  >
    <div class="flex">
      <template v-if="item.img">
        <image-box
          class="h-24 w-24 rounded-md flex-shrink-0"
          :img-src="`${item.img}`"
        ></image-box>
        <div class="divider ml-5 mr-4 border-r border-gray-300"></div>
      </template>
      <div class="flex justify-center flex-col body">
        <h2 class="text-xl font-medium leading-none">{{ item.title }}</h2>
        <p class="text-sm text-gray-600 pt-2">{{ item.body }}</p>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import ImageBox from './ImageBox.vue';

export default {
  components: {
    ImageBox,
  },
  props: {
    item: Object,
    areImgs: Boolean,
  },
};
</script>

<style scoped>
  .scale-enter-active {
    transition: all .3s ease;
  }
  .scale-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .scale-enter, .scale-leave-to {
    transform: translateX(15px) scale(0.93);
    opacity: 0;
  }
  .center-v-h {
    @apply flex items-center justify-center;
  }
</style>
