<template>
  <div class="opt-group">
    <h2 class="opt-group-tit">배송 가능 방법</h2>
    <div class="opt-group-con opt-delivery">
      <select-methods
        :instant-delivery-available-flag="instantDeliveryAvailableFlag"
        :happy-delivery-available-flag="happyDeliveryAvailableFlag"
        @selectMethod="selectMethod"
      />
      <p v-if="instantDeliveryAvailableFlag || happyDeliveryAvailableFlag" class="opt-group-notice">
        <a href="#none" @click.prevent="openPopup">바로도착/행복배송에 대해 알아보세요.</a>
      </p>

      <!-- 사용자 주소 정보 -->
      <user-address
        :selected-method="selectedMethod"
        :delivery-method-selected-flag="deliveryMethodSelectedFlag"
        @selectUserAddrInfo="selectUserAddrInfo"
      />
      <!-- // 사용자 주소 정보 -->

      <!-- 매장 주소 정보 -->
      <store-address :selected-method="selectedMethod" :delivery-method-selected-flag="deliveryMethodSelectedFlag" />
      <!-- //매장 주소 정보 -->
    </div>
  </div>
</template>

<script>
import SelectMethods from '~/components/product/productDelivery/SelectMethods';
import UserAddress from '~/components/product/productDelivery/UserAddress';
import StoreAddress from '~/components/product/productDelivery/StoreAddress';

export default {
  components: {
    SelectMethods,
    UserAddress,
    StoreAddress
  },
  props: {},
  data() {
    return {
      // 바로배송 flag
      instantDeliveryAvailableFlag: true,

      // 행복배송 flag
      happyDeliveryAvailableFlag: true,

      // 선택된 배송방법
      selectedMethod: '',

      // 배송방법 선택 flag
      deliveryMethodSelectedFlag: true,

      selectedUserAddressInfo: {}
    };
  },
  watch: {
    /**
     * 선택된 배송방법이
     * 바로픽업 -> 매장 주소 입력정보
     * 그 외 -> 사용자 주소 입력정보
     * @function
     */
    selectedMethod() {
      if (this.selectedMethod !== '') {
        if (this.selectedMethod === 'DP') {
          // 바로픽업
          this.deliveryMethodSelectedFlag = false;
        } else {
          this.deliveryMethodSelectedFlag = true;
        }
      }
    }
  },
  async mounted() {},
  methods: {
    /**
     * 바로도착/행복배송 팝업을 보여준다.
     * @function
     */
    openPopup() {
      try {
        this.$emit('openPopupDelivery');
      } catch (e) {
        console.log(e);
      }
    },

    /**
     * 바로도착/행복배송 팝업을 보여준다.
     * @function
     * @param {string} name - 선택된 배송방법
     */
    selectMethod(name) {
      this.selectedMethod = name;
    },

    /**
     * 주소 정보
     */
    selectUserAddrInfo(selectedUserAddressInfo) {
      console.log('djfkdjfkdjfkdjfkdj');
      console.log(selectedUserAddressInfo);
      this.$emit('selectUserAddrInfo', selectedUserAddressInfo);
    }
  }
};
</script>

<style lang="scss" scoped></style>
