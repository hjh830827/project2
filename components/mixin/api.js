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
    /**
     * 청구주소
     */
    apiGetUserAddr() {
      return this.$axios.get('http://localhost:8080/home/addr');
    },
    /**
     * 우편번호 검색
     * @param {}} kerword 
     */
    apiGetSearchAddr(kerword) {
      return this.$axios.get('http://localhost:8080/home/searchAddr?keyword='+kerword);
    },
    /**
     * 사용중인 요금제 조회
     */
    apiGetUseSubscriptionInfo() {
      return this.$axios.get('http://localhost:8080/home/useSubscriptionInfo');
    }

    
    
  }
};

export default mixin;
