<template>
  <div id="app" class="bg-gray-500 min-h-screen py-4">
    <div class="container">
      <div class="flex w-2/3 mx-auto text-center text-3xl text-gray-700 mt-4 mb-8">
      Hi! It's just a random list. But you can choose images that match your taste!
      </div>
      <div class="panel p-5 bg-gray-200 rounded-md shadow">
        <radio-input
          :options="placeholderSources"
          v-model="placeholderImgsSource"
          label-name="image-placeholder"
          class="flex"
        />
      </div>
      <div class="seperator">
        <span></span>
      </div>
      <fetch-list
        url="https://jsonplaceholder.typicode.com/users/1/posts"
        :placeholder-imgs="placeholderImgsSource"
        v-slot="{ data: articles }"
      >
        <section class="article-list">
          <card-box
            v-for="article in articles"
            :key="article.id"
            :item="article"
          >
          </card-box>
        </section>
      </fetch-list>
    </div>
  </div>
</template>

<script>
import FetchList from './components/FetchList.vue';
import RadioInput from './components/RadioInput.vue';
import CardBox from './components/CardBox.vue';

export default {
  name: 'App',
  components: {
    FetchList,
    RadioInput,
    CardBox,
  },
  data() {
    return {
      placeholderImgsSource: { url: 'https://www.fillmurray.com' },
      placeholderSources: [
        { url: 'https://www.fillmurray.com', title: 'Bill Murray', icon: 'https://www.fillmurray.com/50/50' },
        { url: 'https://placekitten.com', title: 'Kittens! ❤️' },
        { url: 'https://placekeanu.com', title: 'Keanu reeves', icon: 'https://www.placekeanu.com/50/50' },
        { url: 'https://baconmockup.com', title: 'Bacon 🥓 ' },
        { url: 'https://www.placecage.com', title: 'Nicolas Cage', icon: 'https://www.placecage.com/50/50' },
        { url: 'https://www.stevensegallery.com', title: 'Steven Seagal', icon: 'https://www.stevensegallery.com/50/50' },
        { url: 'https://placebear.com', title: 'Bear 🐻' },
      ],
    };
  },
};
</script>

<style lang="scss">
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
  .container {
    max-width: 960px !important;
  }
  .seperator {
    @apply pt-3 pb-0 flex justify-center w-full;
    span {
      @apply block h-1 w-1 mx-2 rounded-full bg-gray-600;
    }
  }
</style>
