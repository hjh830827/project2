<template>
  <div class="opt-group">
    <h2 class="opt-group-tit">할인 방법</h2>
    <div class="opt-group-con type-discount">
      <div class="product-option-row discount-types">
        <span class="c-ick-var">
          <input id="_discountType1" type="radio" name="_discountType" />
          <label for="_discountType1">
            <div class="row"><span class="txt">12개월 휴대폰 할인</span> <span class="desc">총 - 120,000원</span></div>
            <div class="row">
              <span class="txt">통신요금의 25%(선택약정)</span> <span class="desc">월 - 230,000원</span>
            </div>
          </label>
        </span>
        <span class="c-ick-var">
          <input id="_discountType2" type="radio" name="_discountType" />
          <label for="_discountType2">
            <div class="row"><span class="txt">12개월 휴대폰 할인</span> <span class="desc">총 - 120,000원</span></div>
            <div class="row">
              <span class="txt">통신요금의 25%(선택약정)</span> <span class="desc">월 - 230,000원</span>
            </div>
          </label>
        </span>
        <span class="c-ick-var">
          <input id="_discountType3" type="radio" name="_discountType" checked="checked" />
          <label for="_discountType3">
            <div class="row"><span class="txt">24개월 휴대폰 할인</span> <span class="desc">총 - 120,000원</span></div>
            <div class="row"><span class="txt">공시지원금+지원금</span> <span class="desc">월 - 230,000원</span></div>
          </label>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {}
};
</script>
