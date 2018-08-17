<template>
<router-link to="/photo">
    <v-touch  class="img"  @swipeleft ="swipeleft" @swiperight="swiperight"
        :style="{background:'url(' + imgSrc + ') no-repeat center/contain #000'}">
        </v-touch>
</router-link>
    
</template>

<script>
export default {
    data () {
        return {
            list: -1,
            imgSrc: ''
        }
    },
    watch: {
        list(){
            let nowImg = this.$store.state.photoList[this.list];
            if(nowImg){
                        this.imgSrc = nowImg.src;
                    }
            }
    },
    created(){
        this.list = this.$route.params.idx;  
    },
    methods: {
            swipeleft(){
                this.list++;
                if(this.list == this.$store.state.photoList.length){
                    this.list = 0;
                }
            },
            swiperight(){
                this.list--;
                if(this.list == -1){
                    this.list = this.$store.state.photoList.length-1;
                }
            }   
        }
}
</script>


<style lang="scss" scoped>
.img {
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  left: 0;
  right: 0;
}
</style>
