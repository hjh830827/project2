<template>
  <div class="opt-group">
    <h2 class="opt-group-tit">요금제 선택</h2>
    <div class="opt-group-con type-plan">
      <div v-for="(item, index) in subscriptionList" :key="index" class="seller-plan-item">
        <div class="inner">
          <div class="info">
            <div class="tit">
              <span class="sub-tit">{{ item.subscriptionNm }}</span>
              <!-- [D] badge type 텍스트/bg 매칭
                                            .type1 : 사용중
                                            .type2 : 추천
                                            .type3 : AI Pick
                                            .type4 : 고객선택
                                        -->
              <em class="badge-round type1">사용중</em>
              <h2 class="main-tit">{{ item.data1 }}</h2>
            </div>
            <div class="data">
              <h2 class="main-tit">{{ item.c | comma }} <span>원/월</span></h2>
              <span class="sub-tit">120,000원/월</span>
            </div>
          </div>
          <p class="desc">{{ item.dataDtlInfo }}</p>
          <hr class="hr" />
          <div class="icon-list">
            <!-- [D] 선택된 혜택 on클래스 추가 -->
            <div class="icon-item on">
              <img src="/images/seller/ico_benefit_01.png" alt="" />
            </div>
            <div class="icon-item">
              <img src="/images/seller/ico_benefit_02.png" alt="" />
            </div>
            <div class="icon-item">
              <img src="/images/seller/ico_benefit_03.png" alt="" />
            </div>
            <div class="icon-item">
              <img src="/images/seller/ico_benefit_04.png" alt="" />
            </div>
          </div>
        </div>
        <div class="area-toggle-cont">
          <h3 class="g-invisible">혜택 자세히보기</h3>
          <strong class="txt-info">추가 혜택 <em>N개</em>를 선택해주세요.</strong>
          <span class="c-select">
            <select title="추가 혜택 선택1" class="select">
              <option value="opt1" selected="selected">선택 안함</option>
              <option value="opt2">VIP 멤버십</option>
              <option value="opt3">V 컬러링</option>
            </select>
          </span>
          <span class="c-select">
            <select title="추가 혜택 선택2" class="select">
              <option value="opt1" selected="selected">선택 안함</option>
              <option value="opt2">VIP 멤버십</option>
              <option value="opt3">V 컬러링</option>
            </select>
          </span>
          <div class="area-info">
            <span class="title-info">안내사항</span>
            <ul class="dsc-list">
              <li class="dsc-item">FLO팩 : 모바일 무제한 듣기 + FLO 이용 데이터 무료(월 7,920원 상당)</li>
              <li class="dsc-item">POOQ팩 : 모바일과 PC 실시간 지상파&VOD 이용 + VOD 10회 다운로드(월 7,900원 상당)</li>
              <li class="dsc-item">
                5GX 95 요금제를 사용하시는 고객님께 FLO팩과 POOQ팩 중 선택하신 1개 옵션이 무료로 제공됩니다.
              </li>
              <li class="dsc-item">
                5GX 95 요금제를 사용하시는 고객님께 FLO팩과 POOQ팩 중 선택하신 1개 옵션이 무료로 제공됩니다.
              </li>
              <li class="dsc-item">
                5GX 95 요금제를 사용하시는 고객님께 FLO팩과 POOQ팩 중 선택하신 1개 옵션이 무료로 제공됩니다.
              </li>
              <li class="dsc-item">
                5GX 95 요금제를 사용하시는 고객님께 FLO팩과 POOQ팩 중 선택하신 1개 옵션이 무료로 제공됩니다.
              </li>
              <li class="dsc-item">
                5GX 95 요금제를 사용하시는 고객님께 FLO팩과 POOQ팩 중 선택하신 1개 옵션이 무료로 제공됩니다.
              </li>
              <li class="dsc-item">
                5GX 95 요금제를 사용하시는 고객님께 FLO팩과 POOQ팩 중 선택하신 1개 옵션이 무료로 제공됩니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button type="button" class="btn-plan-list" @click.prevent="openPopupSubscriptionSelect">
        <span>요금제를 선택하세요.</span>
      </button>
      <button type="button" class="btn-default btn-fix" @click.prevent="openPopupBenefitDetail">
        혜택 자세히 보기
      </button>
    </div>
    <!-- 요금제 선택 레이어팝업 -->
    <pop-subscription-select
      ref="search"
      :open-flag="popupSubscriptionSelectFlag"
      @closePopup="controlPopupSubscriptionSelect(false)"
    />
  </div>
</template>

<script>
import PopSubscriptionSelect from '~/components/popup/PopSubscriptionSelect.vue';
export default {
  components: {
    PopSubscriptionSelect
  },
  filters: {
    /**
     * 3자리수 콤마 적용
     */
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  },
  props: {
    subscriptionList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // 요금제 선택 팝업 flag
      popupSubscriptionSelectFlag: false
    };
  },
  methods: {
    /**
     * 혜택 자세히 보기 팝업을 보인다.
     * @function
     */
    openPopupBenefitDetail() {
      try {
        this.$emit('openPopupBenefitDetail');
      } catch (e) {
        console.log(e);
      }
    },
    /**
     * 요금제 선택 팝업을 보인다.
     * @function
     */
    openPopupSubscriptionSelect() {
      try {
        this.popupSubscriptionSelectFlag = true;
        this.$refs.search.getSubscriptionList(); // 요금제 목록 조회 api 호출
      } catch (e) {
        console.log(e);
      }
    },
    /**
     * 요금제 선택 팝업에서 선택한 요금제
     */
    selectedzipCode(obj) {
      console.log(obj);
      this.popupSubscriptionSelectFlag = false;
    },
    controlPopupSubscriptionSelect(flag) {
      try {
        this.popupSubscriptionSelectFlag = flag;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
