<template>
  <TabBar>
    <TabBarItem link="/home" activeColor="#ff5150">
      <img slot="item-icon" src="@/assets/img/tabbar/1-0.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/1-1.png" />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem link="/category" activeColor="#ff5150">
      <img slot="item-icon" src="@/assets/img/tabbar/2-0.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/2-1.png" />
      <div slot="item-text">频道</div>
    </TabBarItem>
    <TabBarItem link="/cart" activeColor="#ff5150">
      <img slot="item-icon" src="@/assets/img/tabbar/3-0.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/3-1.png" />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem link="/profile" activeColor="#ff5150">
      <img slot="item-icon" src="@/assets/img/tabbar/4-0.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/4-1.png" />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from './tabbar/TabBar.vue';
  import TabBarItem from './tabbar/TabBarItem.vue';
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
