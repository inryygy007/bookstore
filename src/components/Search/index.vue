<template>
  <div class="search">
    <div class="sear">
      <input
        type="search"
        v-model="value"
        @keyup.enter="getsearch"
        class="inputs"
        placeholder="请输入您要搜索的关键字"
      />
      <span @click="getsearch" class="mui-icon mui-icon-search"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  created() {},
  methods: {
    //按enter键调用 点击放大镜也会调用
    getsearch() {
      this.$router.push({ name: 'search', params: { val: this.value } });
      this.$emit('setsearch', this.value);
      this.value = '';
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  .sear {
    position: relative;
    .inputs {
      margin-top: 5px;
      // width: 100%;
      background-color: #fff;
      border: 1px solid #999;
      padding-top: 10px;
    }
    .mui-icon-search {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 100;
    }
  }
}
</style>
