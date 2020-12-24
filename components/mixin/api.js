/* eslint-disable prettier/prettier */
const mixin = {
  mounted() {
    console.log('api mixin');
  },
  methods: {
    /**
     * 상품 정보
     * @function
     * @param {string} id - 상품 id
     * @return {object}
     */
    apiGetProductInfo() {
      return this.$axios.get('http://localhost:8080/home/color');

      // return this.$axios.get('/mountains');
    },
    /**
     * 상품 색상 정보
     * @function
     * @param {string} id - 상품 id
     * @return {object}
     */
    apiGetProductColorList() {
      return this.$axios.get('http://localhost:8080/home/color');
    },
    apiGetUserAddr() {
      return this.$axios.get('http://localhost:8080/home/addr');
    },
    apiGetSearchAddr(kerword) {
      return this.$axios.get('http://localhost:8080/home/searchAddr?keyword='+kerword);
    }
    
  }
};

export default mixin;
