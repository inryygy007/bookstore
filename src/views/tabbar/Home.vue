<template>
  <div class="home">
    <!-- 轮播图 -->
    <Swipe></Swipe>

    <!-- 搜索 -->
    <Search></Search>

    
  </div>
</template>

<script>
import Swipe from '../../components/Swipe/index';
import Search from '../../components/Search/index';
export default {
  data() {
    return {
      booklunbo: {}
    };
  },
  components: {
    Swipe,
    Search
  },
  created() {
    this.getbook();
  },
  methods: {
    getbook() {
      // 轮播数据
      this.$axios
        .get('/api/recommendPage/node/spread/575f74f27a4a60dc78a435a3?pl=ios')
        .then((res) => {
          //  console.log(res)
          if (res.data.ok) {
            this.booklunbo = res.data.data.slice(1, 5);
          }
        });
    },
    lunbo(id) {
      this.$router.push({ name: 'book', params: { id: id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .mint-swipe {
    height: 120px;
  }
 .con{
    margin-top: 10px;
  }
  .p1 {
    font-size: 13px;
    color: #333;
    border-left: 2px solid #00c98c;
    padding-left: 10px;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
  }
  .shux {
    //   border-top: 1px solid #EAEAEA;
    height: 44px;
    text-align: center;
    line-height: 44px;
    box-shadow: 0px 2px 1px #eaeaea;
    p {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>