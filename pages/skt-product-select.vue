<template>
  <div>
    <div class="wrap seller-wrap seller-join-conditions">
      <div class="sticky-top">
        <div class="spot-step">
          <ol class="step-list">
            <!-- [D] 작성 완료시 end 클래스 추가, 현재페이지는 링크에 aria-current="step" 추가 -->
            <li class="step-item end">
              <a href="#none" class="link-block"><span>옵션/혜택</span></a>
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
                  <input id="_joinType1" type="radio" name="_joinType" checked="checked" />
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
          <div class="opt-group">
            <h2 class="opt-group-tit">요금제 선택</h2>
            <div class="opt-group-con type-plan">
              <div class="seller-plan-item open">
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
                      <em class="badge-round type2">추천</em>
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
              <button
                type="button"
                class="btn-plan-list"
                onclick="UI.modal({modal: '.pop-plan-list', modalMode: 'overlap'})"
              >
                <span>요금제를 선택하세요.</span>
              </button>
              <button type="button" class="btn-default btn-fix">혜택 자세히 보기</button>
            </div>
          </div>
          <!-- //e: 요금제 선택 -->

          <!-- s: 온가족 할인 -->
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
          <!-- //e: 온가족 할인 -->

          <!-- s: 복지 할인 -->
          <div class="opt-group">
            <h2 class="opt-group-tit">복지 할인</h2>
            <div class="opt-group-con type-welfare">
              <div class="product-option-col">
                <span class="c-ick-var">
                  <input id="w1" type="radio" name="w" checked="checked" />
                  <label for="w1">적용 -30,000<span class="unit">원/월</span></label>
                </span>
                <!-- [D] 비활성 상태 애트리뷰트 disabled 추가/삭제 -->
                <span class="c-ick-var">
                  <input id="w2" type="radio" name="w" />
                  <label for="w2">미적용</label>
                </span>
              </div>
            </div>
          </div>
          <!-- //e: 복지 할인 -->

          <!-- s: 할인 방법 -->
          <div class="opt-group">
            <h2 class="opt-group-tit">할인 방법</h2>
            <div class="opt-group-con type-discount">
              <div class="product-option-row discount-types">
                <span class="c-ick-var">
                  <input id="_discountType1" type="radio" name="_discountType" />
                  <label for="_discountType1">
                    <div class="row">
                      <span class="txt">12개월 휴대폰 할인</span> <span class="desc">총 - 120,000원</span>
                    </div>
                    <div class="row">
                      <span class="txt">통신요금의 25%(선택약정)</span> <span class="desc">월 - 230,000원</span>
                    </div>
                  </label>
                </span>
                <span class="c-ick-var">
                  <input id="_discountType2" type="radio" name="_discountType" />
                  <label for="_discountType2">
                    <div class="row">
                      <span class="txt">12개월 휴대폰 할인</span> <span class="desc">총 - 120,000원</span>
                    </div>
                    <div class="row">
                      <span class="txt">통신요금의 25%(선택약정)</span> <span class="desc">월 - 230,000원</span>
                    </div>
                  </label>
                </span>
                <span class="c-ick-var">
                  <input id="_discountType3" type="radio" name="_discountType" checked="checked" />
                  <label for="_discountType3">
                    <div class="row">
                      <span class="txt">24개월 휴대폰 할인</span> <span class="desc">총 - 120,000원</span>
                    </div>
                    <div class="row">
                      <span class="txt">공시지원금+지원금</span> <span class="desc">월 - 230,000원</span>
                    </div>
                  </label>
                </span>
              </div>
            </div>
          </div>
          <!-- //e: 할인 방법 -->

          <!-- s: 납부 방법 -->
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
          <!-- //e: 납부 방법 -->
        </div>
      </main>
      <!-- s: 하단 스티키 바 -->
      <div class="sticky-bar">
        <div class="layer-pay">
          <h2 class="g-invisible">출고가 가격정보</h2>
          <div class="l-grid">
            <div class="foot">
              <p class="price-area">
                <span class="stit">
                  <span class="text">
                    <span class="sunit">출고가</span>
                  </span>
                </span>
                <strong class="price">
                  <span class="num"><strong>1,155,000</strong></span>
                  <span class="unit">원</span>
                </strong>
              </p>
              <!-- [D] 활성/비활성 여부는 클래스 disabled 추가/삭제로 컨트롤 -->
              <!-- <div class="btn-area disabled"> -->
              <div class="btn-area">
                <button type="button" class="btn-primary" @click="doOrder">주문하기</button>
                <button type="button" class="btn-light">장바구니</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //e: 하단 스티키 바 -->
    </div>

    <!-- 요금제 선택 레이어팝업 -->
    <div class="popup pop-seller pop-plan-list" style="display: none">
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
            <button type="button" class="btn-primary btn-lg disabled" disabled>요금제 선택</button>
          </div>
        </div>
        <button type="button" class="btn-close" onclick="UI.modalClose(this);return false;">
          <span class="ico-close">팝업 닫기</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// API 함수
import apiMixin from '~/components/mixin/api';

export default {
  components: {},
  mixins: [apiMixin],
  // SSR 렌더링 전
  async asyncData({ params }) {
    console.log('========asyncData==========');
    console.log(params);
  },
  data() {
    return {
      // 페이지 타이틀
      title: '[상품 Mobile] detail | SK텔레콤 공식 온라인 쇼핑몰 T월드 다이렉트'
    };
  },
  watch: {},
  async mounted() {},
  methods: {
    doOrder() {
      window.location.href = '/order-confirm';
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
