<template>
<div>
    <swipe class="my-swipe">
        <swipe-item class="slide1"><img src="/img/hua.jpg" alt=""></swipe-item>
        <swipe-item class="slide2"><img src="/img/hua1.jpg" alt=""></swipe-item>
        <swipe-item class="slide3"><img src="/img/hua2.jpg" alt=""></swipe-item>
    </swipe>
    <ul class="ul">
        <li v-for="(book,index) in bookList" :key="index" class="ul-li">
            <img :src="book.book_cover" alt="" class="ul-li-img">
            <div class="in">
                <div class="tit">{{book.bookname}}</div>
                <div class="aut">{{book.author_name}}</div>
                <div class="info">{{book.book_info}}</div>
            </div>
        </li>
    </ul>
</div>
    
</template>


<script>
import axios from 'axios';
import('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';

export default {
    data() {
        return {
            bookList: [],
        };
    },
    created(){
        this.$emit('switchTab', 'book');
        axios.get('https://api.myjson.com/bins/dcoqm').then(res=>{
            this.bookList = res.data.data;
        });
    },
    components: {
        swipe: Swipe,
        "swipe-item": SwipeItem
    }
}
</script>

<style lang="scss" scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {

    background-color: #0089dc;
    color: #fff;
}

.slide2 {
    background-color: #ffd705;
    color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
.ul{
    // display: flex;
    width: 100%;
    position: relative;
    z-index: -1;
    &-li{
        height: 3rem;
        width: 100%;
        border-bottom: 0.1rem;
        border-color: #000;
        &-img{
            // flex: 1;
            width: 2rem;
            height: 2.5rem;
            margin-bottom: 0.2rem;
            margin-top: 0.2rem;
            margin-left: 0.2rem;
            float: left;
        }
    }
}
.in{
    // flex: 3;
    float: right;
    width: 4rem;
    overflow: hidden;
     height: 2.5rem;
            margin-bottom: 0.2rem;
            margin-top: 0.2rem;
            margin-left: 0.2rem;
}
.tit{
    font-size: 0.35rem;
    text-align: center;
    height: 0.65rem;
    overflow: hidden;
}
.aut{
    font-size: 0.3rem;
}
.info{
    overflow: hidden;
}
</style>

