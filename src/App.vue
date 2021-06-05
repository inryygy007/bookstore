<template>
<hello></hello>
</template>
<script>
import Hello from './components/HelloWorld.vue'
export default {
  data () {
    return {
    flag:false  
    }
  },
 components:{
  Hello
 }
}
</script>