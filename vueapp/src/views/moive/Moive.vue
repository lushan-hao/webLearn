<template>
    <ul>
        <li v-for="movie in movieList" :key="movie.id" class="movie">
            <div class="movie-img">
                <img :src="movie.images.large" alt="">
            </div>  
            <div class="movie-info">
                <div class="movie-info-title">{{movie.title}}</div>
                <div>观众评 <span class="movie-info-average">{{movie.rating.average}}</span></div>
                <div class="movie-info-star">主演：
                    <span v-for="item in movie.casts" :key="item.id">
                        {{item.name}}&nbsp;
                    </span>
                </div>
            </div>
        </li>
    </ul>
</template>



<script>
    import axios from "axios";
    
    export default{
        data () {
            return {
                 movieList: [],
            }
        },
        created () {
            let url1 = "http://api.myjson.com/bins/pb8vw";
            let url2 ="https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250?";
            axios.get(url1).then(res => {
                console.log(res);
                this.movieList =  res.data.subjects;
                console.log(this.movieList);
            })
        }

    }

</script>

<style lang="scss" scoped>
.movie{
    display: flex;
    padding: 0.2rem;
    border-bottom: 0.02rem solid #ccc;
    &-img{
        flex-grow: 1;
        width: 0;
        img{
            width: 100%;
        }

    }
    &-info{
        flex-grow: 3;
        width: 0;
        margin-left: 0.2rem;
        &-title{
            color: #333;
            font-size: 0.34rem;
            font-weight: 700;
        }
        &-average{
            font-weight: 700;
            color: #faaf00;
        }
        &-star{
            color:#666;
            font-size: 0.26rem;
        }
    } 
}
</style>
