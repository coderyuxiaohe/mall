<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/1-0.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/1-1.png" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/2-0.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/2-1.png" />
      <div slot="item-text">频道</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/3-0.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/3-1.png" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/4-0.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/4-1.png" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue';
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue';
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    },
  }
</script>

<style scoped>
  
</style>
