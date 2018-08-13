<template>
  <div id="app">

   <Comheader> </Comheader> 

      <router-view/>

  <Comfooter></Comfooter>  
     
  
  </div>
</template>





<script>

import Comfooter from '@/components/Comfooter.vue';
import Comheader from '@/components/Comheader.vue';

export default{
  components: {
    Comfooter,
    Comheader,
  },
  data () {
    return {
      
    }
  }
}

</script>




<style lang="sass" scoped>

</style>
