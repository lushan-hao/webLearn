<template>
<div>
    <div class="header">
        <div class="header-mask" :style="{background:'url('+titleimg+') no-repeat center/cover'}"></div>
        <div class="header-img">
            <img :src="titleimg" alt="">
        </div>
        <div class="header-info" clearfix>
            <p class="header-info-name">{{titlename}}</p>
            <p class="header-info-author">{{titleauthor}}</p>
            <div class="header-info-list">
                <i class="icon iconfont icon-shangyishou" @click="prev"></i>
                <i class="icon iconfont icon-bofang" v-show="!isPlay" @click="play"></i>
                <i class="icon iconfont icon-zanting" v-show="isPlay" @click="pause"></i>
                <i class="icon iconfont icon-xiayishou" @click="next"></i>
            </div>
            <div class="header-info-menu" @click="toggleList = !toggleList">歌单</div>
        </div>
    </div>
    <transition name="slide">
        <ul class="music" v-show="toggleList">
            <li @click="change(index)" :class="['music-list',nowIndex == index ? 'selected' : '']" v-for="(menu,index) in musicList" :key="index">
                <span class="music-list-name">{{menu.title}}&nbsp;|&nbsp;</span>
                <span class="music-list-people">{{menu.author}}</span> 
            </li>/
        </ul>
    </transition>
   
  
    <div class="audio">         <!--                                                                        马上播放  控制声音播放                  -->
        <audio ref="musicAudio" :src="titlelrc" @play="isPlay=true" @pause="isPlay=false" class="audio-ctrl" autoplay controls></audio>
    </div>
    
</div>
</template>


<script>
import '@/assets/font/iconfont.css'
export default {
    props: ['musicList'],
    data () {
        return {
            nowIndex: -1,
            isPlay: false,
            toggleList: false,
            titleimg: "http://img3.imgtn.bdimg.com/it/u=1039246244,1205520727&fm=27&gp=0.jpg",
            titlename: '',
            titleauthor: '',
            titlelrc: ''
        }
    },
    methods: {
        change(index){
            this.nowIndex = index;
        },
        play(){
            this.$refs.musicAudio.play();
        },
        pause(){
            this.$refs.musicAudio.pause();
        },
        prev(){
            this.nowIndex--;
             if(this.nowIndex == -1){
                 this.nowIndex = this.musicList.length-1;
             }
        },
        next(){
            this.nowIndex++;
            if(this.nowIndex == this.musicList.length){
                this.nowIndex = 0;
            }
        }
    },
    watch: {
        nowIndex(){
            let nowMusic = this.musicList[this.nowIndex]
            this.titleimg = nowMusic.musicImgSrc;
            this.titlename = nowMusic.title;
            this.titleauthor = nowMusic.author;
            this.titlelrc = nowMusic.src;
        }
    }
    

}
</script>

<style lang="scss" scoped>
.clearfix::after {
    content: '';
    display: block;
    clear: both;
}
.music{
    background-color: #2a2929;
    position: fixed;
    bottom: 2rem;
    width: 100%;
    overflow-y: scroll;
    height: 4rem;
    &-list{
        border-bottom: 0.02rem solid #343433;
        padding: 0.2rem;
        color: #dcdbdb;
        &.selected{
            color: #299557;
        }
    }
}
.slide{
    &-enter{
        transform: translateY(100%);  
        &-to{
        transform: translateY(0);
        } 
        &-active{
        transition: transform 1s ease;
        }
    }
    &-leave {
    transform: translateY(0);
        &-to {
      transform: translateY(100%);
        }
        &-active {
      transition: transform 1s ease;
        }   
  }
}
  
   
.header{
    display: flex;
    text-align: center;
    position: relative;
    color: #fff;
    &-mask{
        position: absolute;
        top: 0;;
        bottom: 0;
        left: 0;
        right: 0;
        filter: blur(0.4rem);
        z-index: -1;
    }
    
    &-img{
        flex-grow: 1;
        width: 0;
        margin-left: 0.2rem;
        img{
            width: 100%;
        }
    }
    &-info{
        width: 0;
        flex-grow: 2;
        position: relative;
        &-name{
      font-size: 0.5rem;
        }
        &-list{
            float: left;
            position: absolute;
            transform: translateX(1.5rem);
            i{
                font-size: 0.4rem;   
            }
        }
        &-menu{
            float: right;
            margin-right: 0.2rem;
        }
    }

}
.audio{
    background: #f1f3f4;
    position: fixed;
    bottom: 1rem;
    width: 100%;
    padding: 0 0.2rem;
    height: 1rem;
}
</style>
