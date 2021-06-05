<template>
<Homepage/>
  <!-- <router-view></router-view> -->
</template>
<script>
import Homepage from './views/tabbar/Homepage.vue';
export default {
  data() {
    return {
      flag: false
    };
  },
  components: {
    Homepage
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