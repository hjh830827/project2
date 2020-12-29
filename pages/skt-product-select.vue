<template>
  <div>
    <div class="wrap seller-wrap seller-join-conditions">
      <div class="sticky-top">
        <div class="spot-step">
          <ol class="step-list">
            <!-- [D] 작성 완료시 end 클래스 추가, 현재페이지는 링크에 aria-current="step" 추가 -->
            <li class="step-item end">
              <a href="#none" class="link-block" @click.prevent="productSelect"><span>옵션/혜택</span></a>
            </li>
            <li class="step-item">
              <a href="#none" class="link-block" aria-current="step"><span>가입 조건</span></a>
            </li>
            <li class="step-item">
              <a href="#none" class="link-block"><span>주문확인</span></a>
            </li>
          </ol>
        </div>
      </div>
      <main role="main" class="content">
        <h1 class="g-invisible">가입조건</h1>
        <div class="l-grid l-seller">
          <!-- s: 가입유형 -->
          <div class="opt-group">
            <h2 class="opt-group-tit">가입유형</h2>
            <div class="opt-group-con">
              <div class="product-option-col join-types">
                <span class="c-ick-var">
                  <input id="_joinType1" type="radio" name="_joinType" />
                  <label for="_joinType1">기기변경</label>
                </span>
                <span class="c-ick-var">
                  <!-- [D] 비활성 상태 애트리뷰트 disabled 추가/삭제 -->
                  <input id="_joinType2" type="radio" name="_joinType" />
                  <label for="_joinType2">번호이동</label>
                </span>
                <span class="c-ick-var">
                  <input id="_joinType3" type="radio" name="_joinType" />
                  <label for="_joinType3">신규가입</label>
                </span>
              </div>
            </div>
          </div>
          <!-- //e: 가입유형 -->

          <!-- s: 요금제 선택 -->
          <subscription-select
            :subscription-list="subscriptionList"
            @openPopupBenefitDetail="controlPopupBenefitDetail(true)"
          />
          <!-- //e: 요금제 선택 -->

          <!-- s: 할인 방법 -->
          <discount-method-select />
          <!-- //e: 할인 방법 -->

          <!-- s: 온가족 할인-->
          <familydc-select />
          <!-- //e: 온가족 할인-->
          <!-- s:복지 할인-->
          <welfaredc-select />
          <!-- //e: 복지 할인-->

          <!-- s: 납부 방법 -->
          <pay-type-select />
          <!-- //e: 납부 방법 -->
        </div>
      </main>
      <!-- s: 하단 스티키 바 -->
      <sticky-bar />
      <!-- //e: 하단 스티키 바 -->
    </div>
    <!-- 혜택 자세히보기 레이어팝업 -->
    <pop-benefit-detail
      :open-flag="popupBenefitDetailFlag"
      :subscription-list="subscriptionList"
      @closePopup="controlPopupBenefitDetail(false)"
    />
  </div>
</template>

<script>
// API 함수
import apiMixin from '~/components/mixin/api';
import SubscriptionSelect from '~/components/subproduct/SubscriptionSelect.vue';
import DiscountMethodSelect from '~/components/subproduct/DiscountMethodSelect.vue';
import FamilydcSelect from '~/components/subproduct/FamilydcSelect.vue';
import WelfaredcSelect from '~/components/subproduct/WelfaredcSelect.vue';
import PayTypeSelect from '~/components/subproduct/PayTypeSelect.vue';
import StickyBar from '~/components/subproduct/StickyBar.vue';
import PopBenefitDetail from '~/components/popup/PopBenefitDetail.vue';

export default {
  components: {
    SubscriptionSelect,
    DiscountMethodSelect,
    FamilydcSelect,
    WelfaredcSelect,
    PayTypeSelect,
    StickyBar,
    PopBenefitDetail
  },
  mixins: [apiMixin],
  props: {
    productSelectInfo: {
      type: Object,
      required: false,
      default: null
    }
  },
  // SSR 렌더링 전
  async asyncData({ params }) {
    console.log('========asyncData==========');
    console.log(params);
  },
  data() {
    return {
      // 페이지 타이틀
      title: '[상품 Mobile] detail | SK텔레콤 공식 온라인 쇼핑몰 T월드 다이렉트',
      subProductInfo: {},
      subscriptionList: [],
      // 헤택 자세히 보기 팝업 flag
      popupBenefitDetailFlag: false
    };
  },
  watch: {},
  async mounted() {
    // API_BFF_WIRELESS_PRODUCT_010 조회
    this.setUseSubscriptionInfo(); // 사용중인 요금제 조회
  },
  methods: {
    /**
     * 초기 진입시 데이터 조회
     */
    setUseSubscriptionInfo() {
      this.apiGetUseSubscriptionInfo()
        .then(res => {
          console.log('========setUseSubscriptionInfo=========');
          console.log(res.data);
          this.subscriptionList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    doOrder() {
      window.location.href = '/order-confirm';
    },
    /**
     * 이전 페이지 이동 - 현재 페이지 데이터 저장후 이동
     */
    productSelect() {
      alert('데이터 정리중');
      // 현재 화면 데이터를 저장후 넘긴다.
      // this.$router.push({ name: 'product-select', params: { productSelectInfo: this.productSelectInfo } });
    },
    /**
     * 주문하기
     * @function
     */
    onOrder() {
      // 필수 데이터 validation 처리
      alert('주문하기');
    },
    controlPopupBenefitDetail(flag) {
      try {
        this.popupBenefitDetailFlag = flag;
      } catch (e) {
        console.log(e);
      }
    }
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>

<style></style>
