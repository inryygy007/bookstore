<template>
  <div class="home">
    <!-- 轮播图 -->
    <Swipe></Swipe>

    <!-- 搜索 -->
    <Search></Search>

    <!-- 分类 -->
    <div class="con" v-for="item in booktitle" :key="item.id">
      <p class="p1">{{ item.title }}</p>
      <mei-wen :booklistid="{ id: item._id }"></mei-wen>
      <div class="shux">
        <router-link :to="{ name: 'list', params: { id: item._id } }" tag="p">
          加载更多
          <!-- <span class="el-icon-refresh"></span> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Swipe from '../../components/Swipe/index';
import Search from '../../components/Search/index';
export default {
  data() {
    return {
      booktitle: {},
      nslist: {},
      booklist: {}
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
      // 首页分类数据
      this.$axios
        .get('/api/recommendPage/nodes/5910018c8094b1e228e5868f')
        .then((res) => {
          var arr = res.data.data;
          if (res.data.ok) {
            this.booktitle = arr.filter((item) => {
              return item.title != 'm站顶部banner';
            });
          }
        });

      this.$axios.get('/api/ranking/54d43437d47d13ff21cad58b').then((res) => {
        if (res.data.ok) {
          this.nslist = this.imgurl(res.data.ranking.books.slice(8, 12));
        }
      });
    },
    // 解决图片加载问题
    imgurl(arr) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].cover = unescape(arr[i].cover);
        arr[i].cover = arr[i].cover.replace('/agent/', '');
      }
      return arr;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  //分类区域
  .con {
    margin-top: 10px;
  }
  .p1 {
    font-size: 13px;
    color: #333;
    border-left: 2px solid #00c98c;
    padding-left: 10px;
    margin-bottom: 10px;
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