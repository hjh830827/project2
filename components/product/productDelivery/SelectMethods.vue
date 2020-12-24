<template>
  <div role="tablist" class="sort-lists">
    <button
      v-if="instantDeliveryAvailableFlag"
      ref="buttonID"
      type="button"
      class="sort-items"
      aria-selected="false"
      @click="selectMethod('ID')"
    >
      <span class="tit">바로도착</span>
      <!-- <span class="desc"><strong>00시00분00초</strong> 이내<br> 주문하면 오늘 도착</span> -->
      <span class="desc">17시 이후 주문 시<br />내일(주말:월요일) 도착</span>
    </button>
    <button
      v-if="happyDeliveryAvailableFlag"
      ref="buttonHD"
      type="button"
      class="sort-items"
      aria-selected="false"
      @click="selectMethod('HD')"
    >
      <span class="tit">행복배송</span>
      <span class="desc"><strong>00시00분00초</strong> 이내<br />주문하면 오늘 도착</span>
    </button>
    <button ref="buttonND" type="button" class="sort-items" aria-selected="false" @click="selectMethod('ND')">
      <span class="tit">택배</span>
      <span class="desc">꼼꼼하게 포장하여<br />우체국 익일 특급 배송</span>
    </button>
    <button ref="buttonDP" type="button" class="sort-items" aria-selected="false" @click="selectMethod('DP')">
      <span class="tit">바로픽업</span>
      <span class="desc">주문하고 가까운<br />대리점에서 바로 찾기</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    instantDeliveryAvailableFlag: {
      type: Boolean,
      required: true,
      default: false
    },
    happyDeliveryAvailableFlag: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      buttonLength: 4,

      // 버튼 약자 IP:바로배송, HP:행복배송, ND:택배, DP:바로픽업
      buttons: ['DP', 'HD', 'ID', 'ND'],

      // 버튼 엘리먼트
      buttonElements: []
    };
  },
  watch: {},
  mounted() {
    this.setButtonElements();
  },
  methods: {
    /**
     * 버튼 엘리먼트를 배열에 넣는다.
     * @function
     */
    setButtonElements() {
      for (let i = 0; i < this.buttonLength; i++) {
        if (this.$refs[`button${this.buttons[i]}`]) {
          this.buttonElements.push(this.$refs[`button${this.buttons[i]}`]);
        }
      }
    },

    /**
     * 버튼을 선택하면 aria-selected를 true로 바꾼다.
     * 현재 선택된 버튼의 name을 저장한다.
     * @function
     */
    selectMethod(name) {
      try {
        for (let i = 0; i < this.buttonElements.length; i++) {
          this.buttonElements[i].ariaSelected = false;
        }
        console.log(`button${name}`);
        this.$refs[`button${name}`].ariaSelected = true;
        this.$emit('selectMethod', name);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
