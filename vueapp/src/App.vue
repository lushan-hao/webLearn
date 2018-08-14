<template>
  <div id="app">
   <Comheader :selectMenu="selectMenu"> </Comheader> 

      <router-view class="content"/>

  <Comfooter @changeTitle="changeTitle" :menuList="menuList"></Comfooter>  
     
  
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
  methods: {
    changeTitle(menu){
      this.selectMenu = menu;
    }
  },
  data () {
    return {
      menuList:[
        {
          title: '电影',
          bgColor: '#e54847',
          name: 'movie',
          path: '/movie'
        },{
          title: '音乐',
          bgColor: '#009688',
          name: 'music',
          path: '/music'
        },{
          title: '书籍',
          bgColor: '#795548',
          name: 'book',
          path: '/book'
        },{
          title: '图片',
          bgColor: '#3f51b5',
          name: 'photo',
          path: '/photo'
        }
      ],
      selectMenu: {},
    }
  }
}

</script>




<style lang="scss">
.content{
  margin: 1rem 0;
}

</style>
