<template>
  <router-view></router-view>
  <!-- <hello></hello> -->
</template>
<script>
// import Hello from './components/HelloWorld.vue'
export default {
  data() {
    return {
      flag: false
    };
  },
  components: {
    // Hello
  }
};
</script>

<style lang="scss" scope>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #fff;
}
</style>