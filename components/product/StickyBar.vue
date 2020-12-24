<template>
  <div ref="stickyBar" class="sticky-bar">
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
              <span class="num">{{ selectPrice }}</span>
              <span class="unit">원</span>
            </strong>
          </p>
          <div class="btn-area">
            <!-- [D] 활성/비활성 여부는 클래스 disabled 추가/삭제로 컨트롤 -->
            <button
              type="button"
              class="btn-primary"
              :disabled="completeDisableFlag"
              @click.prevent="onSelectCompleted"
            >
              선택완료
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    selectPrice: {
      type: String,
      required: false
    },
    completeDisableFlag: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  mounted() {
    console.log('stickyBar mounted');
    // this.$emit('mounted', this.$refs.stickyBar);
  },
  methods: {
    onSelectCompleted() {
      this.$emit('onSelectCompleted');
    }
  }
};
</script>
