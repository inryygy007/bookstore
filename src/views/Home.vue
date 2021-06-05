<template>
  <div class="home">
    <!-- 轮播 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in booklunbo" :key="i"
        ><img @click="lunbo(item.link)" :src="item.img" alt
      /></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      booklunbo: {}
    };
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
<style lang="scss" scope>
.home {
  .mint-swipe {
    height: 120px;
  }
  
}
</style>
