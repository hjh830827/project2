<template>
  <div v-show="deliveryMethodSelectedFlag && selectedMethod !== ''" class="buyer-info">
    <div class="buyer-tit">
      <h3 class="tit">배송정보</h3>
      <a v-show="firstUserAddressFlag" href="#none" class="notice" @click.prevent="modifyAddress(true)">
        이 주소가 아닌가요?
      </a>
      <a
        v-show="!firstUserAddressFlag && formConfirmedFlag"
        href="#none"
        class="notice"
        @click.prevent="modifyAddress()"
        >수정</a
      >
    </div>
    <!-- 초기 청구 주소 존재시 -->
    <ul v-show="firstUserAddressFlag" class="buyer-list">
      <li class="buyer-item">
        <span for="_deliveryParcelPhone2" class="title">휴대폰 번호</span>
        <div class="form-group">
          <span class="c-input"> {{ userAddressInfo.cellPhone }} </span>
        </div>
      </li>
      <li class="buyer-item">
        <strong class="title">주소</strong>
        <div class="detail-address">
          <div class="form-group">
            <span class="c-input">
              <span>{{ userAddressInfo.zip }}</span>
              <span>{{ userAddressInfo.basAddr }}</span>
              <span>{{ userAddressInfo.dtlAddr }}</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
    <!-- //초기 청구 주소 존재시 -->

    <!-- 입력한 청구 주소 -->
    <ul v-show="!firstUserAddressFlag && formConfirmedFlag" class="buyer-list">
      <li class="buyer-item">
        <span for="_deliveryParcelPhone2" class="title">휴대폰 번호</span>
        <div class="form-group">
          <span class="c-input"> {{ selectedUserAddressInfo.cellPhone }}</span>
        </div>
      </li>
      <li class="buyer-item">
        <strong class="title">주소</strong>
        <div class="detail-address">
          <div class="form-group">
            <span class="c-input">
              <span>{{ selectedUserAddressInfo.zip }}</span>
              <span>{{ selectedUserAddressInfo.basAddr }}</span>
              <span>{{ selectedUserAddressInfo.dtlAddr }}</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
    <!-- //입력한 청구 주소 -->

    <!-- 입력 폼 -->
    <div v-show="!firstUserAddressFlag && !formConfirmedFlag">
      <ul class="buyer-list">
        <li class="buyer-item">
          <label for="_deliveryParcelPhone2" class="title">휴대폰 번호</label>
          <div class="form-group">
            <span class="c-input">
              <input
                id="_deliveryParcelPhone"
                v-model="selectedUserAddressInfo.cellPhone"
                type="number"
                placeholder="- 없이 숫자만 입력해주세요"
                required="required"
                maxlength="11"
                class="input"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              />
            </span>
          </div>
        </li>
        <li class="buyer-item">
          <strong class="title">주소</strong>
          <div class="detail-address">
            <div class="form-group">
              <span class="c-input">
                <input
                  type="number"
                  title="우편번호"
                  class="input"
                  :value="selectedUserAddressInfo.zip"
                  readonly="readonly"
                  required=""
                  pattern="[0-9]*"
                  inputmode="numeric"
                />
              </span>
              <button type="button" class="btn-extra" @click="openPopupZipcode">우편번호 찾기</button>
            </div>
            <div class="form-group">
              <span class="c-input">
                <input
                  type="text"
                  title="기본 주소"
                  :value="selectedUserAddressInfo.basAddr"
                  class="input"
                  readonly="readonly"
                  required=""
                />
              </span>
            </div>
            <div class="form-group">
              <span class="c-input">
                <input
                  v-model="selectedUserAddressInfo.dtlAddr"
                  type="text"
                  title="나머지 주소"
                  placeholder="나머지 주소를 입력해주세요."
                  maxlength="50"
                  class="input"
                />
              </span>
            </div>
          </div>
        </li>
      </ul>
      <button type="button" class="btn-submit" @click.prevent="ConfirmInputForm">확인</button>
    </div>
    <!-- //입력 폼 -->
    <!-- 우편번호 검색 레이어 팝업 -->
    <pop-zipcode :open-flag="popupZipcodeFlag" @selectedzipCode="selectedzipCode" />
  </div>
</template>

<script>
// API 함수
import apiMixin from '~/components/mixin/api';

import PopZipcode from '~/components/popup/PopZipcode.vue';

export default {
  components: {
    PopZipcode
  },
  mixins: [apiMixin],
  props: {
    selectedMethod: {
      type: String,
      required: true,
      default: ''
    },
    deliveryMethodSelectedFlag: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
      // 처음 받아온 사용자 주소 flag
      firstUserAddressFlag: false,

      // 사용자 주소 입력폼 완료 flag
      formConfirmedFlag: false,

      // 사용자 전화번호
      userPhoneNumber: '',
      number: '',
      // 초기 청구주소
      userAddressInfo: {},
      // 우편번호 팝업 on/off flag
      popupZipcodeFlag: false,
      selectedUserAddressInfo: {
        cellPhone: '',
        zip: '',
        basAddr: '',
        dtlAddr: ''
      }
    };
  },
  watch: {
    number() {
      return (this.number = this.number.replace(/[^0-9]/g, '')); // 정규식 사용
    }
  },
  created() {},
  mounted() {
    this.setUserAddr(); // 청구 정보
  },
  methods: {
    // 청구 정보 조회
    setUserAddr() {
      this.apiGetUserAddr()
        .then(res => {
          this.userAddressInfo = res.data;
          if (res.data.zip != null) {
            this.firstUserAddressFlag = true;
          } else {
            this.firstUserAddressFlag = false;
          }
          // 초기 진입시 메인 화면에 데이터 전달
          this.$emit('selectUserAddrInfo', this.userAddressInfo);
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * 사용자 주소를 수정한다.
     * @function
     * @param {boolean} firstFlag - 처음 받아온 사용자 주소를 수정할 때 true 입력. 그 외에는 값을 입력하지 않는다.
     */
    modifyAddress(firstFlag) {
      this.formConfirmedFlag = false;
      this.firstUserAddressFlag = false;
      console.log(this.firstUserAddressFlag);

      // 처음 받아온 사용자 주소가 있을 때 수정을 진행하려고 한 뒤에는, 일반 수정/입력 상태로 바뀐다.
      // if (firstFlag) this.firstUserAddressFlag = false;
    },

    /**
     * 입력하거나 수정한 내용을 확정한다.
     * @function
     */
    ConfirmInputForm() {
      // validation 체크 후 데이터 전송
      this.$emit('selectUserAddrInfo', this.selectedUserAddressInfo);
      this.formConfirmedFlag = true;
    },

    /**
     * 주소 검색 팝업을 보인다.
     * @function
     */
    openPopupZipcode() {
      console.log('test!!!!!!!!!!!!!!!!!');
      try {
        // this.$emit('openPopupZipcode', true);
        this.popupZipcodeFlag = true;
      } catch (e) {
        console.log(e);
      }
    },
    /**
     * 우편검색 팝업에서 선택한 zipcode 전달
     */
    selectedzipCode(zipcode) {
      this.selectedUserAddressInfo.zip = zipcode.zip;
      this.selectedUserAddressInfo.basAddr = zipcode.newAddr;
      this.popupZipcodeFlag = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
