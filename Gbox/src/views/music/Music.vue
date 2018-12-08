<template>
    <player :musicList="musicList"></player>
</template>


<script>
import Player from '@/components/Player.vue';
import axios from  'axios';
export default {
    data(){
        return {
            musicList: []
        };
    },
    created(){
        // console.log('music');
        this.$emit('switchTab', 'music');
        // let url1 = 'https://api.myjson.com/bins/jat2m';
        axios.get('/data/music.json').then(res=>{
            this.musicList = res.data.songs;
            console.log(this.musicList);
        });
    },
    components: {
        Player
    }
}
</script>

<style lang="scss" scoped>

</style>

