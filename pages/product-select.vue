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
          <product-key-visual :image-list="imageList" />
          <a href="#none" class="link-kakako-chat" target="_blank" @click.prevent="openKakaoChat">
            카카오톡 채팅 연결하기
          </a>
        </div>

        <!-- 색상선택 -->
        <product-color-select :color-list="colorList" :select-color-name="selectColorName" @selectColor="selectColor" />

        <!-- 용량선택 -->
        <product-capacity-select :phone-capacity-list="phoneCapacityList" @selectCapacity="selectCapacity" />

        <!-- 배송 가능 방법 -->
        <product-delivery-select
          @selectUserAddrInfo="selectUserAddrInfo"
          @openPopupDelivery="controlPopupDelivery(true)"
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
    PopDelivery
  },

  // SSR 렌더링 전
  async asyncDataData({ app }) {
    console.log('asyncDataData');
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
      // 이미지 목록
      imageList: [
        {
          imageUrl: '/images/@/@tmp_iphone-12-pro-max-silver@2x.png'
        },
        {
          imageUrl: '/images/@/@tmp_iphone-12-pro-max-silver@2x.png'
        },
        {
          imageUrl: '/images/@/@tmp_iphone-12-pro-max-silver@2x.png'
        },
        {
          imageUrl: '/images/@/@tmp_iphone-12-pro-max-silver@2x.png'
        }
      ],
      // 색상 목록
      colorList: [],
      // 용량 목록 - api 스펙에 따라 변경 예정
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
      completeDisableFlag: true,
      userAddrInfo: {},
      productSelectInfo: {}
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
  created() {},
  async mounted() {
    this.setStickyBar();
    this.setProductInfo(); // 상품 정보 조회
    // 배송 시간
  },
  methods: {
    /**
     * 초기 진입시 데이터 조회 - 201221 현재 테스트용 url 적용
     */
    setProductInfo() {
      this.apiGetProductColorList()
        .then(res => {
          this.colorList = res.data;
          // 해당 데이터 기반으로 바로도착/행복배송 안내 정보 조회해야함. 이부분은 api에서 합쳐서 전달할지 문의 p5
          // 이미지 테스트로 set
        })
        .catch(err => {
          console.log(err);
        });
    },
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
     * 카카오톡 채팅 열기(새창)
     * @function
     */
    openKakaoChat() {
      alert('외부 링크');
      // window.open = 'http://plus.kakao.com/home/@coolsms';
    },

    /**
     * 선택 완료
     * @function
     */
    onSelectCompleted() {
      // 필수 데이터 validation 처리
      this.productSelectInfo.test1 = 'test1';
      this.$router.push({ name: 'skt-product-select', params: { productSelectInfo: this.productSelectInfo } });
    },

    /**
     * 색상선택
     */
    selectColor(obj) {
      this.productSelectInfo.selectSeq = obj.colorSeq;
      this.selectColorName = obj.colorName;
      // 이미지 & 용량 영역도 수정 예정
    },
    /**
     * 용량 선택
     */
    selectCapacity(data) {
      // 용량 선택 정보 productSelectInfo에 set
      this.selectPrice = data;
      this.completeDisableFlag = false;
    },
    /**
     * 주소 정보
     */
    selectUserAddrInfo(selectedUserAddressInfo) {
      this.userAddrInfo = selectedUserAddressInfo;
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
