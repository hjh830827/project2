<template>
  <div class="opt-group">
    <h2 class="opt-group-tit">용량 선택</h2>
    <div class="opt-group-con opt-capacity">
      <div class="product-option-row product-capacities">
        <h3 class="g-invisible">용량 선택</h3>
        <span
          v-for="(item, index) in phoneCapacityList"
          :key="index"
          class="c-ick-var"
          :class="{ 'disabled-semi': item.saleCd == '1' }"
        >
          <input
            :id="'productCapacity' + index"
            type="radio"
            name="_productCapacity"
            :disabled="item.saleCd == '1'"
            @click="selectCapacity(item.productPrice)"
          />
          <label :for="'productCapacity' + index">
            <span class="text">{{ item.phoneCapacity }}</span>
            <span v-if="item.saleCd == '1'" class="side">재고 없음</span>
            <span v-if="item.saleCd != '1'" class="side">₩{{ item.productPrice | comma }}</span>
          </label>
        </span>
      </div>
      <!-- <p class="opt-group-notice"><a href="#none" @click.prevent="openPopup">가장 인기 있는 용량을 알아보세요.</a></p> -->
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    /**
     * 3자리수 콤마 적용
     */
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  },
  props: {
    phoneCapacityList: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectCapacity(productPrice) {
      this.$emit('selectCapacity', productPrice);
    }
  }
};
</script>
