<template>
  <div class="popup pop-seller pop-plan-list" :style="{ display: openFlag ? 'block' : 'none' }">
    <div class="popup-body">
      <div class="popup-header">
        <h1 class="popup-title">요금제 선택하기</h1>
      </div>
      <div role="main" class="popup-content">
        <span class="txt-question" style="display: none">※ 비노출 요금제는 상담 문의해주세요.</span>
        <div class="seller-scroll-wrap">
          <div class="seller-scroll-list">
            <button type="button" class="tab-item on" data-tab="planList"><span>#다이렉트 플랜 5G</span></button>
            <button type="button" class="tab-item" data-tab="planList"><span>#5GX 플랜</span></button>
            <button type="button" class="tab-item" data-tab="planList"><span>#다이렉트 플랜 5G</span></button>
            <button type="button" class="tab-item" data-tab="planList"><span>#5GX 플랜</span></button>
          </div>
        </div>
        <h2 class="g-invisible">요금제 목록</h2>
        <div class="seller-cont-area" data-tab-content="planList">
          <div class="seller-plan-list">
            <div class="seller-plan-item open">
              <div class="inner">
                <div class="info">
                  <div class="tit">
                    <span class="sub-tit">뉴 T끼리 맞춤형(150분+700MB)</span>
                    <!-- [D] badge type 텍스트/bg 매칭
                                            .type1 : 사용중
                                            .type2 : 추천
                                            .type3 : AI Pick
                                            .type4 : 고객선택
                                        -->
                    <em class="badge-round type4">고객선택</em>
                    <h2 class="main-tit">데이터 무제한</h2>
                  </div>
                  <div class="data">
                    <h2 class="main-tit">999,999 <span>원/월</span></h2>
                    <span class="sub-tit">120,000원/월</span>
                  </div>
                </div>
                <p class="desc">12GB+매일2GB 이후 속도제어</p>
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
                  <div class="icon-item on">
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
                    <li class="dsc-item">
                      POOQ팩 : 모바일과 PC 실시간 지상파&VOD 이용 + VOD 10회 다운로드(월 7,900원 상당)
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
                    <li class="dsc-item">
                      5GX 95 요금제를 사용하시는 고객님께 FLO팩과 POOQ팩 중 선택하신 1개 옵션이 무료로 제공됩니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="seller-plan-item">
              <div class="inner">
                <div class="info">
                  <div class="tit">
                    <span class="sub-tit">다이렉트 슬림</span>
                    <!-- [D] badge type 텍스트/bg 매칭
                                            .type1 : 사용중
                                            .type2 : 추천
                                            .type3 : AI Pick
                                            .type4 : 고객선택
                                        -->
                    <em class="badge-round type3">AI Pick</em>
                    <h2 class="main-tit">데이터 무제한</h2>
                  </div>
                  <div class="data">
                    <h2 class="main-tit">999,999 <span>원/월</span></h2>
                    <span class="sub-tit">120,000원/월</span>
                  </div>
                </div>
                <p class="desc">12GB+매일2GB 이후 속도제어</p>
                <hr class="hr" />
                <div class="icon-list">
                  <!-- [D] 선택된 혜택 on클래스 추가 -->
                  <div class="icon-item">
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
                <h4 class="g-invisible">혜택 자세히보기</h4>
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
                    <li class="dsc-item">
                      POOQ팩 : 모바일과 PC 실시간 지상파&VOD 이용 + VOD 10회 다운로드(월 7,900원 상당)
                    </li>
                    <li class="dsc-item">
                      5GX 95 요금제를 사용하시는 고객님께 FLO팩과 POOQ팩 중 선택하신 1개 옵션이 무료로 제공됩니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="seller-cont-area" data-tab-content="planList">
          <div class="init-area">
            <p class="init-type">조회된 상품이 없습니다.</p>
          </div>
        </div>
      </div>
      <div class="popup-footer">
        <div class="btn-area">
          <!-- [D] 활성/비활성 여부는 disabled 클래스 및 속성으로 추가/삭제로 컨트롤 -->
          <button
            type="button"
            class="btn-primary btn-lg"
            :disabled="!subscriptionSelectFlag"
            @click.prevent="confirmSubscriptionSelect"
          >
            요금제 선택
          </button>
        </div>
      </div>
      <button type="button" class="btn-close" @click.prevent="closePopup">
        <span class="ico-close">팝업 닫기</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openFlag: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      // 요금제 선택 flag
      subscriptionSelectFlag: false
    };
  },
  methods: {
    /**
     * 팝업을 감춘다.
     * @function
     */
    closePopup() {
      try {
        this.$emit('closePopup');
      } catch (e) {
        console.log(e);
      }
    },
    getSubscriptionList() {
      console.log('요금제 조회 api 호출');
    },
    /**
     * 현재 선택된 요금제를 입력한다.
     * @function
     */
    confirmSubscription() {
      console.log('요금제 선택 완료');
      // if (this.selectZipcode == null) {
      //   this.selected = false;
      //   this.addressSelectedFlag = false;
      //   alert('주소를 선택해주세요.');
      //   return;
      // }
      // console.log('=======confirmAddress============');
      // try {
      //   // 데이터 전달
      //   this.$emit('selectedzipCode', this.selectZipcode);
      // } catch (e) {
      //   console.log(e);
      // }
    },
    /**
     * 요금제 선택시
     */
    selectSubscription(obj) {
      console.log('요금제 선택');
      this.subscriptionSelectFlag = true;
    }
  }
};
</script>
