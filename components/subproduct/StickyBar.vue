<template>
  <div class="sticky-bar">
    <div class="layer-pay">
      <h2 class="g-invisible">출고가 가격정보</h2>
      <div class="l-grid">
        <div class="foot">
          <p class="price-area">
            <span class="stit">
              <span class="text">
                <span class="sunit">출고가</span>
              </span>
            </span>
            <strong class="price">
              <span class="num"><strong>1,155,000</strong></span>
              <span class="unit">원</span>
            </strong>
          </p>
          <!-- [D] 활성/비활성 여부는 클래스 disabled 추가/삭제로 컨트롤 -->
          <!-- <div class="btn-area disabled"> -->
          <div class="btn-area">
            <button type="button" class="btn-primary" @click="doOrder">주문하기</button>
            <button type="button" class="btn-light">장바구니</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  mounted() {
    console.log('stickyBar mounted');
    // this.$emit('mounted', this.$refs.stickyBar);
  },
  methods: {
    /**
     * 주문하기
     */
    doOrder() {
      this.$emit('doOrder');
    }
  }
};
</script>
