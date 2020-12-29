<template>
  <div class="popup pop-seller pop-benefit-detail" :style="{ display: openFlag ? 'block' : 'none' }">
    <div class="popup-body">
      <div class="popup-header">
        <h1 class="popup-title">혜택 자세히 보기</h1>
      </div>
      <div role="main" class="popup-content">
        <div class="seller-tab-wrap">
          <button
            v-for="(item, index) in subscriptionList"
            :key="index"
            type="button"
            class="tab-item"
            :class="getActiveClass(item.a)"
            data-tab="planList"
            @click.prevent="setTab(item.a)"
          >
            <span>{{ item.b }}</span>
          </button>
          <!-- <button type="button" class="tab-item" data-tab="planList" @click.prevent="setTab(TAB2)">
            <span>사용중</span>
          </button>
          <button type="button" class="tab-item" data-tab="planList" @click.prevent="setTab(TAB3)">
            <span>AI 추천</span>
          </button> -->
        </div>
        <h2 class="g-invisible">요금제 목록</h2>
        <div
          v-for="(item, index) in subscriptionList"
          v-show="currentTab === item.a"
          :key="index"
          class="seller-cont-area"
          data-tab-content="planList"
        >
          <div class="seller-plan-list">
            <div class="seller-plan-item">
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
                    <em class="badge-round type1">{{ item.b }}</em>
                    <h2 class="main-tit">데이터 무제한</h2>
                  </div>
                  <div class="data">
                    <h2 class="main-tit">{{ item.c | comma }} <span>원/월</span></h2>
                    <span class="sub-tit">해당 데이터 확인 중 원/월</span>
                  </div>
                </div>
                <p class="desc">{{ item.dataDtlInfo }}</p>
                <dl class="list-basic-option">
                  <dt>집전화/이동전화</dt>
                  <dd>무제한</dd>
                  <dt>문자</dt>
                  <dd>기본제공</dd>
                </dl>
              </div>
              <div class="area-toggle-cont">
                <h3 class="g-invisible">혜택 자세히보기</h3>
                <div class="area-benefit">
                  <ul class="list-benefit">
                    <li class="item-benefit">
                      <img class="thumb-benefit" src="/img/seller/ico_benefit_04.png" alt="혜택이미지" />
                      <div class="desc-benefit">
                        <strong>T 멤버십 VIP</strong>
                        <p class="txt-desc">연 6회 영화 무료 관람, 패밀리 레스토랑/편의점 등 다양한 제휴 혜택 제공</p>
                      </div>
                    </li>
                    <li class="item-benefit">
                      <img class="thumb-benefit" src="/img/seller/ico_benefit_01.png" alt="혜택이미지" />
                      <div class="desc-benefit">
                        <strong>분실/파손 보험</strong>
                        <p class="txt-desc">
                          분실파손 100% 할인 (최대 2,900원, 24개월)<br />(보험상품 별도 가입신청 필요)
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
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
          </div>
        </div>
      </div>
      <div class="popup-footer">
        <div class="btn-area">
          <!-- [D] 활성/비활성 여부는 disabled 클래스 및 속성으로 추가/삭제로 컨트롤 -->
          <button type="button" class="btn-primary btn-lg disabled" disabled>요금제 선택</button>
        </div>
      </div>
      <button type="button" class="btn-close" @click.prevent="closePopup">
        <span class="ico-close">팝업 닫기</span>
      </button>
    </div>
  </div>

  <!-- //popup -->
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
    openFlag: {
      type: Boolean,
      required: true,
      default: false
    },
    subscriptionList: {
      type: Array,
      required: true,
      default: null
    }
  },
  data() {
    return {
      // 요금제 선택 flag
      subscriptionSelectFlag: false,
      currentTab: '1'
    };
  },
  methods: {
    /**
     * active class 'on'
     * @param {string} tab - 현재 탭과 비교할 탭 이름
     */
    getActiveClass(tab) {
      try {
        if (this.currentTab === tab) return 'on';
      } catch (e) {
        console.log(e);
      }
    },
    /**
     * 현재 탭으로 설정
     * @param {string} tab - 현재 탭으로 설정할 탭 이름
     */
    setTab(tab) {
      try {
        this.currentTab = tab;
      } catch (e) {
        console.log(e);
      }
    },
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
    }
  }
};
</script>
