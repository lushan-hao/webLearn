<template>
    <swipe class="my-swipe">
        <swipe-item class="slide1"><img src="/img/1.jpg" alt=""></swipe-item>
        <swipe-item class="slide2"><img src="/img/2.jpg" alt=""></swipe-item>
        <swipe-item class="slide3"><img src="/img/3.jpg" alt=""></swipe-item>
    </swipe>
</template>


<script>
import('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';

export default {
    created(){
        this.$emit('switchTab', 'book');
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
</style>

