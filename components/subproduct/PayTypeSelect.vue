<template>
  <!-- s: 온가족 할인-->
  <div class="opt-group">
    <h2 class="opt-group-tit">납부 방법</h2>
    <div class="opt-group-con type-pay-way">
      <div class="product-option-col">
        <span class="c-ick-var">
          <input id="_payType12" type="radio" name="_payType" />
          <label for="_payType12">12개월</label>
        </span>
        <span class="c-ick-var">
          <input id="_payType24" type="radio" name="_payType" checked="checked" />
          <label for="_payType24">24개월</label>
        </span>
        <span class="c-ick-var">
          <input id="_payType30" type="radio" name="_payType" />
          <label for="_payType30">30개월</label>
        </span>
        <span class="c-ick-var">
          <input id="_payTypeSingle" type="radio" name="_payType" />
          <label for="_payTypeSingle">일시불</label>
        </span>
      </div>
      <p class="txt">일시불 선택 시 결제 단계에서 카드 할부를 이용할 수 있습니다.</p>
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
