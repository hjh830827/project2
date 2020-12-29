<template>
  <!-- s: 복지 할인 -->
  <div class="opt-group">
    <h2 class="opt-group-tit">복지 할인</h2>
    <div class="opt-group-con type-welfare">
      <div class="product-option-col">
        <span class="c-ick-var">
          <input id="w1" type="radio" name="w" checked="checked" />
          <label for="w1">적용 -30,000<span class="unit">원/월</span></label>
        </span>
        <!-- [D] 비활성 상태 애트리뷰트 disabled 추가/삭제 -->
        <span class="c-ick-var">
          <input id="w2" type="radio" name="w" />
          <label for="w2">미적용</label>
        </span>
      </div>
    </div>
  </div>
  <!-- //e: 복지 할인 -->
</template>

<script>
export default {
  props: {},
  methods: {}
};
</script>
