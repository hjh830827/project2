<template>
  <!-- [D] div.wrap에 클래스 product-detail-page 추가
 		header가 상단 고정을 경우 div.wrap에 클래스 header-sticky 추가 -->
  <div class="wrap header-sticky seller-product-detail">
    <page-header />
    <main role="main" class="content">
      <div class="l-grid">
        <div class="seller-detail-header">
          <product-header />
          <!-- key visual -->
          <product-key-visual />
          <a href="#none" class="link-kakako-chat" target="_blank" @click.prevent="openKakaoChat">
            카카오톡 채팅 연결하기
          </a>
        </div>

        <!-- 색상선택 -->
        <div class="opt-group">
          <h2 class="opt-group-tit">색상 선택</h2>
          <div class="opt-group-con opt-color">
            <div class="product-color">
              <div class="color-chips">
                <span v-for="(item, index) in list" :key="index" class="c-ick-var">
                  <input
                    :id="'_colorChip' + index"
                    type="radio"
                    name="_colorChip"
                    :value="item.colorName"
                    @click="selectColor(item.colorName)"
                  />
                  <label
                    :for="'_colorChip' + index"
                    class="text"
                    :style="{ 'background-color': item.backgroundColor }"
                    >{{ item.colorName }}</label
                  >
                </span>
              </div>
              <span class="color-name">{{ selectColorName }}</span>
            </div>
          </div>
        </div>

        <!-- 용량선택 -->
        <div class="opt-group">
          <h2 class="opt-group-tit">용량 선택</h2>
          <div class="opt-group-con opt-capacity">
            <div class="product-option-row product-capacities">
              <h3 class="g-invisible">용량 선택</h3>
              <span
                v-for="(item, index) in phoneCapacityList"
                :key="index"
                class="c-ick-var"
                :class="{ 'disabled-semi': item.saleCd == '1' }"
              >
                <input
                  :id="'productCapacity' + index"
                  type="radio"
                  name="_productCapacity"
                  @click="selectCapacity(item.productPrice)"
                />
                <label :for="'productCapacity' + index">
                  <span class="text">{{ item.phoneCapacity }}</span>
                  <span class="side">₩{{ item.productPrice | comma }}</span>
                </label>
              </span>
            </div>
          </div>
        </div>

        <!-- 배송 가능 방법 -->
        <product-delivery-select
          @openPopupDelivery="controlPopupDelivery(true)"
          @openPopupZipcode="controlPopupZipcode(true)"
        />

        <!-- 함께 많이 본 휴대폰 -->
        <!-- <favorite-seller /> -->

        <!-- s: 특장점 및 구매후기 -->
        <product-detail-tab />
      </div>
    </main>
    <!-- s: 하단 스티키 바 -->
    <sticky-bar
      :select-price="selectPrice"
      :complete-disable-flag="completeDisableFlag"
      @mounted="stickyBarMounted"
      @onSelectCompleted="onSelectCompleted"
    />

    <!-- 바로도착/행복배송 안내 레이어 팝업 -->
    <pop-delivery :open-flag="popupDeliveryFlag" @closePopup="controlPopupDelivery(false)" />

    <!-- 우편번호 검색 레이어 팝업 -->
    <pop-zipcode :open-flag="popupZipcodeFlag" @closePopup="controlPopupZipcode(false)" />
  </div>
</template>

<script>
// API 함수
import apiMixin from '~/components/mixin/api';

// 컴포넌트
import PageHeader from '~/components/layout/PageHeader';
import FavoriteSeller from '~/components/product/FavoriteSeller.vue';
import ProductCapacitySelect from '~/components/product/ProductCapacitySelect.vue';
import ProductColorSelect from '~/components/product/ProductColorSelect.vue';
import ProductDeliverySelect from '~/components/product/productDelivery/ProductDeliverySelect.vue';
import ProductDetailTab from '~/components/product/ProductDetailTab.vue';
import ProductHeader from '~/components/product/ProductHeader.vue';
import ProductKeyVisual from '~/components/product/ProductKeyVisual.vue';
import StickyBar from '~/components/product/StickyBar.vue';
import PopDelivery from '~/components/popup/PopDelivery.vue';
import PopZipcode from '~/components/popup/PopZipcode.vue';

export default {
  components: {
    PageHeader,
    ProductHeader,
    ProductKeyVisual,
    ProductDeliverySelect,
    ProductCapacitySelect,
    FavoriteSeller,
    ProductColorSelect,
    ProductDetailTab,
    StickyBar,
    PopDelivery,
    PopZipcode
  },

  // SSR 렌더링 전
  async asyncDataData({ app }) {
    // const axios = app.$axios;
    // const res = await axios.get('https://api.nuxtjs.dev/mountains');
    // const mountains = res.data;
    // return { mountains };
  },
  filters: {
    /**
     * 3자리수 콤마 적용
     */
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  },
  mixins: [apiMixin],
  data() {
    return {
      // 페이지 타이틀
      title: '[상품 Mobile] detail | SK텔레콤 공식 온라인 쇼핑몰 T월드 다이렉트',

      // 스크롤이 위로 가는지 아래로 가는지 확인 flag
      scrollFlag: true,

      // 현재 스크롤 top 값
      currentScrollTop: 0,

      // stickBar 엘리먼트
      stickyBarElement: null,

      // 바로도착/행복배송 팝업 on/off flag
      popupDeliveryFlag: false,

      // 우편번호 팝업 on/off flag
      popupZipcodeFlag: false,
      colorList: [],
      list: [
        {
          colorName: '브라운',
          backgroundColor: '#a67c52'
        },
        {
          colorName: '딥블루',
          backgroundColor: '#0f0f44'
        },
        {
          colorName: '버건디레드',
          backgroundColor: '#8e0c25'
        },
        {
          colorName: '스페이스 그레이',
          backgroundColor: '#d8d8d8'
        }
      ],
      phoneCapacityList: [
        {
          phoneCapacity: '128G',
          saleCd: '0',
          productPrice: '120000'
        },
        {
          phoneCapacity: '456G',
          saleCd: '1',
          productPrice: '1200000'
        },
        {
          phoneCapacity: '789G',
          saleCd: '0',
          productPrice: '2'
        }
      ],
      selectColorName: '', // 초기진입시 default 데이터 확인
      selectPrice: '0',
      completeDisableFlag: true
    };
  },
  watch: {
    /**
     * 현재 스크롤값 watch
     */
    currentScrollTop() {},

    /**
     * 현재 스크롤이 위로 가면 class active를 제거하고 아래로 가면 active를 추가한다.
     */
    scrollFlag() {
      try {
        if (this.stickyBarElement !== null && this.stickyBarElement !== undefined) {
          if (this.scrollFlag) {
            this.stickyBarElement.classList.add('active');
          } else {
            this.stickyBarElement.classList.remove('active');
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  async mounted() {
    this.setStickyBar();
    const res = await this.apiGetProductColorList();
    console.log('==============');
    console.log(res);
  },
  methods: {
    /**
     * 하단 stickyBar를 스크롤에 따라 보이고 감춘다.
     * @function
     */
    setStickyBar() {
      try {
        this.currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        this.scrollFlag = this.detectScrollFlag(this.currentScrollTop);
        window.addEventListener(
          'scroll',
          e => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            this.scrollFlag = this.detectScrollFlag(scrollTop);
            this.currentScrollTop = scrollTop;
          },
          false
        );
      } catch (e) {
        console.log(e);
      }
    },

    /**
     * 현재 스크롤이 위로 가는지 아래로 가는지 확인
     * @function
     * @param {number} scrollTop - 판단할 scrollTop 값
     * @return {boolean} 아래로 스크롤링 - true, 위로 스크롤링 - false
     */
    detectScrollFlag(scrollTop) {
      try {
        if (scrollTop > this.currentScrollTop) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
      }
    },

    /**
     * stickyBar가 mounted되었음
     * @function
     * @param {object} elem - stickybar로 설정할 elemet object
     */
    stickyBarMounted(elem) {
      try {
        this.stickyBarElement = elem;
      } catch (e) {
        console.log(e);
      }
    },

    /**
     * 바로도착/행복배송 팝업 보이거나 감춤
     * @function
     * @param {boolean} flag - true(보임), false(감춤)
     */
    controlPopupDelivery(flag) {
      try {
        this.popupDeliveryFlag = flag;
      } catch (e) {
        console.log(e);
      }
    },

    /**
     * 주소검색 팝업 보이거나 감춤
     * @function
     * @param {boolean} flag - true(보임), false(감춤)
     */
    controlPopupZipcode(flag) {
      try {
        this.popupZipcodeFlag = flag;
      } catch (e) {
        console.log(e);
      }
    },

    /**
     * 카카오톡 채팅 열기(새창)
     * @function
     */
    openKakaoChat() {
      alert('외부 링크');
    },

    /**
     * 선택 완료
     * @function
     */
    onSelectCompleted() {
      window.location.href = '/skt-product-select';
    },

    /**
     * 색상선택
     */
    selectColor(data) {
      this.selectColorName = data;
      // 이미지 & 용량 영역도 수정 예정
    },
    /**
     * 용량 선택
     */
    selectCapacity(data) {
      this.selectPrice = data;
      this.completeDisableFlag = false;
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
