<template>
  <div class="opt-group">
    <h2 class="opt-group-tit">색상 선택</h2>
    <div class="opt-group-con opt-color">
      <div class="product-color">
        <div class="color-chips">
          <span v-for="(item, index) in colorList" :key="index" class="c-ick-var">
            <input
              :id="'_colorChip' + index"
              type="radio"
              name="_colorChip"
              :value="item.colorName"
              @click="selectColor(item)"
            />
            <label :for="'_colorChip' + index" class="text" :style="{ 'background-color': item.backgroundColor }">{{
              item.colorName
            }}</label>
          </span>
        </div>
        <span class="color-name">{{ selectColorName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colorList: {
      type: Array,
      required: true
    },
    selectColorName: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    selectColor(colorName) {
      this.$emit('selectColor', colorName);
    }
  }
};
</script>
