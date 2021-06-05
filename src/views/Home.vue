<template>
  <div class="home">
    <!-- 头部区域 -->
    <mt-header v-if="fag" ref="header" fixed title="你今天真好看！">
      <div @click="getback" v-show="flag" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button @click="getuser" slot="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghu1"></use>
        </svg>
      </mt-button>
    </mt-header>
    <Swipe/>
  </div>
</template>
<script>
import '../font/fonts-user';
import Swipe from '../components/Swipe'
export default {
  //注册轮播图组件
  components:{Swipe},
  data() {
    return {
      flag: true,
      fag: true,
      boxheight: ''
    };
  },
  mounted() {
    this.boxheight = document.documentElement.clientHeight;
  },
  methods: {
    // 返回按钮
    getback() {},
    //用户头像按钮
    getuser() {}
  }
};
</script>
<style lang="scss" scope>
.home {
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 52px;
  .mint-header.is-fixed {
    z-index: 99;
  }
  .mint-header {
    height: 30px;
    background-color: #00c98c;
  }
}
</style>

