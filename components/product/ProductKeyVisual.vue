<template>
  <div class="product-key-visual">
    <!-- <img src="/images/@/@tmp_iphone-12-pro-max-silver@2x.png" alt="" /> -->

    <div v-swiper:mySwiper="options">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in imageList" :key="index" class="swiper-slide">
          <div class="img-area">
            <img :src="item.imageUrl" alt="" />
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageList: {
      type: Array,
      required: true,
      default: null
    }
  },
  data() {
    return {
      options: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false
        // },
        loop: false
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
