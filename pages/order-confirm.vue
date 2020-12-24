<template>
  <div class="wrap seller-wrap seller-order-confirm">
    <div class="sticky-top">
      <div class="spot-step">
        <ol class="step-list">
          <!-- [D] 작성 완료시 end 클래스 추가, 현재페이지는 링크에 aria-current="step" 추가 -->
          <li class="step-item end">
            <a href="#none" class="link-block"><span>옵션/혜택</span></a>
          </li>
          <li class="step-item end">
            <a href="#none" class="link-block"><span>가입 조건</span></a>
          </li>
          <li class="step-item">
            <a href="#none" class="link-block" aria-current="step"><span>주문확인</span></a>
          </li>
        </ol>
      </div>
    </div>
    <main role="main" class="content">
      <h1 class="g-invisible">주문확인</h1>
      <div class="l-grid l-seller">
        <!-- s: 한번 더 할인 -->
        <div class="opt-group group-more-discount">
          <h2 class="opt-group-tit">한번 더 할인</h2>
          <div class="opt-group-con type-discount-more">
            <!-- 쿠폰 할인 -->
            <!-- [D] case : 1 -->
            <div class="item">
              <a href="#" class="link">
                <span class="text">쿠폰할인</span>
                <span class="bundle">
                  <span class="btn"> <em class="point">2</em> 장 </span>
                </span>
              </a>
            </div>
            <!-- [D] case : 2 -->
            <div class="item">
              <a href="#" class="link">
                <span class="text">쿠폰할인</span>
                <span class="bundle">
                  <span class="btn seller-txt-style">등록하기</span>
                </span>
              </a>
            </div>
            <!-- [D] case : 3 -->
            <div class="item">
              <a href="#" class="link">
                <span class="text">쿠폰할인</span>
                <span class="bundle">
                  <em class="price">- 20,000원</em> <span class="btn seller-txt-style">변경</span>
                </span>
              </a>
            </div>
            <!-- 포인트 할인 -->
            <div class="item">
              <a href="#" class="link">
                <span class="text">포인트 및 이용권 할인</span>
                <span class="bundle">
                  <span class="btn">포인트 조회 및 사용</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- //e: 한번 더 할인 -->
        <!-- s: T 기프트 -->
        <!-- 선택 전 -->
        <div class="opt-group">
          <h2 class="opt-group-tit">T 기프트</h2>
          <div class="opt-group-con">
            <div class="tgift-type before-selected">
              <div class="cont">
                <a href="#none">
                  <img src="/images/seller/banner_tgift_select@2x.png" class="img" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 선택 후 -->
        <!-- //e: T 기프트 -->
        <div class="opt-group">
          <h2 class="opt-group-tit">T 기프트</h2>
          <div class="opt-group-con">
            <div class="tgift-type">
              <div class="thumb"><img src="/images/@/@tmp_iphone-12-pro-max-silver@2x.png" alt="" /></div>
              <div class="cont">
                <p class="title">[베루스] 노트9 필수패키지</p>
                <button type="button" class="btn-change seller-txt-style">변경</button>
                <div class="option">랜덤발송</div>
              </div>
            </div>
          </div>
        </div>
        <!-- s: 주문 확인 -->
        <div class="opt-group group-order-confirm">
          <h2 class="opt-group-tit">주문 확인</h2>
          <div class="opt-group-con order-confirm-type">
            <h3 class="tit">iPhone 12 Pro Max</h3>
            <span class="desc">IPHONE_12_PRO_MAX_128GBL</span>
            <div class="thumb-box">
              <img src="/images/@/@tmp_img_iphone_pro_max@2x.png" alt="" />
            </div>
            <div class="order-detail-area">
              <table class="table-row-list">
                <caption>
                  주문확인 요금상세
                </caption>
                <colgroup>
                  <col style="width: 35%" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">휴대폰 월 할부금</th>
                    <td><strong class="price">86,169</strong> <span class="unit">원</span></td>
                  </tr>
                  <tr>
                    <th scope="row">월 통신 요금</th>
                    <td><strong class="price">66,725</strong> <span class="unit">원</span></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row"><strong>월 납부금액</strong></th>
                    <td>
                      <span class="block"> <strong class="price">99,296</strong><span class="unit"> 원/월</span> </span>
                      <span class="block">
                        <em class="small">통신요금 + 휴대폰 할부금 (24개월)</em>
                      </span>
                      <a href="#none" class="block seller-txt-style btn-more">주문내역 자세히 보기</a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <!-- //e: 주문 확인 -->
        <!-- s: 유의사항 -->
        <a href="#none" class="seller-notice-link">유의사항 확인하기</a>
        <!-- //e: 유의사항 -->
      </div>
    </main>
    <!-- s: 하단 스티키 바 -->
    <div class="sticky-bar">
      <div class="layer-pay">
        <div class="l-grid">
          <div class="btn-area">
            <button type="button" class="btn-primary">신청서 작성하기</button>
          </div>
        </div>
      </div>
    </div>
    <!-- //e: 하단 스티키 바 -->
  </div>
</template>

<script>
// API 함수
import apiMixin from '~/components/mixin/api';

export default {
  components: {},

  // SSR 렌더링 전
  async asyncDataData({ app }) {},
  mixins: [apiMixin],
  data() {
    return {
      // 페이지 타이틀
      title: '[상품 Mobile] detail | SK텔레콤 공식 온라인 쇼핑몰 T월드 다이렉트'
    };
  },
  watch: {},
  async mounted() {},
  methods: {},
  head() {
    return {
      title: this.title
    };
  }
};
</script>

<style></style>
