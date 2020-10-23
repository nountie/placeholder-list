<template>
  <div class="center-v-h">
    <transition name="bump">
    <img
      v-show="loaded"
      @load="onLoad"
      class="img object-cover h-24 w-24 rounded-md flex-shrink-0"
      :src="`${imgSrc}`"
    >
    </transition>
    <spinner-icon v-if="!loaded"></spinner-icon>
  </div>
</template>

<script>
import SpinnerIcon from './SpinnerIcon.vue';

export default {
  name: 'ImageBox',
  components: {
    SpinnerIcon,
  },
  props: {
    imgSrc: String,
  },
  data() {
    return {
      loaded: false,
    };
  },
  watch: {
    imgSrc() {
      this.loaded = false;
    },
  },
  methods: {
    onLoad() {
      console.log(this.imgSrc);
      setTimeout(() => {
        this.loaded = true;
      }, 150);
    },
  },
};
</script>

<style scoped>
  .bump-enter-active {
    transition: all .3s ease;
  }
  .bump-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .bump-enter, .bump-leave-to {
    transform: translateX(10px) scale(0.95);
    opacity: 0;
  }
  .center-v-h {
    @apply flex items-center justify-center;
  }
</style>
