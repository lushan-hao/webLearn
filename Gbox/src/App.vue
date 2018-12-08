<template>
  <div id="app">
    <CommonHeader :selectMenu="selectMenu"></CommonHeader>
    <router-view class="content" @switchTab="switchTab"/>
    <CommonFooter :footerBgColor="selectMenu.bgColor" :menuList="menuList"></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';
import CommonFooter from '@/components/CommonFooter.vue';
export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    switchTab(menuName){ // 'music'
      this.menuList.forEach(menu => {
        if(menu.name === menuName){
          this.selectMenu = menu;
        }
      });
    }
  },
  data () {
    return {
      menuList: [
        {
          title: '音乐',
          bgColor: '#31c27c',
          name: 'music',
          path: '/music'
        },
        {
          title: '电影',
          bgColor: '#ef4238',
          name: 'movie',
          path: '/movie'
        },{
          title: '书籍',
          bgColor: '#795548',
          name: 'book',
          path: '/book'
        },{
          title: '图片',
          bgColor: '#44b2d5',
          name: 'photo',
          path: '/photo'
        }
      ],
      selectMenu: {}, // 当前选中的菜单,
    }
  }
}
</script>



<style lang="scss">
.content{
  margin: 1rem 0;
}

</style>
