<template>
  <!-- s: 온가족 할인-->
  <div class="opt-group">
    <h2 class="opt-group-tit">온가족 할인</h2>
    <div class="opt-group-con type-family">
      <div class="product-option-col">
        <span class="c-ick-var">
          <input id="f1" type="radio" name="f" checked="checked" />
          <label for="f1">적용 -30,000<span class="unit">원/월</span></label>
        </span>
        <!-- [D] 비활성 상태 애트리뷰트 disabled 추가/삭제 -->
        <span class="c-ick-var">
          <input id="f2" type="radio" name="f" />
          <label for="f2">미적용</label>
        </span>
      </div>
    </div>
  </div>
  <!-- //e: 온가족 할인-->
</template>

<script>
export default {
  props: {},
  methods: {}
};
</script>
