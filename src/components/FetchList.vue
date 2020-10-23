<script>
import axios from 'axios';

export default {
  name: 'FetchList',
  props: {
    url: String,
    placeholderImgs: {
      required: false,
      default: false,
    },
  },
  data() {
    return {
      data: [],
    };
  },
  watch: {
    placeholderImgs(newVal) {
      this.data = this.data.map((el, index) => ({ ...el, img: `${newVal.url}/200/2${index}0` }));
    },
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const { data } = await axios.get(this.url);
        if (this.placeholderImgs) this.data = data.map((el, index) => ({ ...el, img: `${this.placeholderImgs.url}/200/2${index}0` }));
        else this.data = data;
      } catch (err) {
        throw new Error('Data error!');
      }
    },
  },
  render() {
    return this.$scopedSlots.default({
      data: this.data,
    });
  },
};
</script>

<style scoped lang="scss">
  h2 {
    &::first-letter {
      text-transform: uppercase;
    }
  }
</style>
