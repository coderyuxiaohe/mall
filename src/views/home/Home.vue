<template>
	<div id="home">
    <nav-bar class="home-nav"><div slot="center">蘑菇街</div></nav-bar>

    <scroll class="content" @loadMore="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" 
        :titles="['流行', '新款', '精选']" 
        @tabClick="tabClick">
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
	</div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'

import { getHomeMultidata, getHomeGoods } from '@/network/home'

export default {
	name: 'home',
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodsList,
    Scroll
  },
  created(){
    // 请求header数据
    this.getHomeMultidata()

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
        default:
          this.currentType = 'pop';
      }
    },
    loadMore(){
      this.getHomeGoods(this.currentType);
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.list);
        this.goods[type].page = page;
      })
    },
  }
};
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: #FFF;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content{
    position: absolute;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: auto;
  }
</style>
