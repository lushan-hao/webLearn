<template>

    <ul class="clearfix">
        <li @click="gotoDetail(index)" v-for='(menu,index) in $store.state.photoList' :key="menu.src" class="photoAll">
            <img :src="menu.src" alt="">
        </li>
    </ul>
</template>


<script>
import axios from 'axios';
export default {
    data () {
        return {
        }
    },
    methods: {
        gotoDetail(index){
            this.$router.push(`/photodetail/${index}`);
        }  
    },
    created(){
        this.$emit('switchTab', 'photo');
        axios.get('/data/photodata.json').then(res =>{
            this.$store.commit('setPhotoList',res.data.photoData);
        })
    }
}
</script>

<style lang="scss" scoped>

.photoAll{
    width: 50%;
    float: left;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
</style>

