<template>
	<div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
	</div>
</template>

<script>
import { request } from '@/network/request'
import NavBar from '@/components/navbar/NavBar.vue';

export default {
	name: 'home',
  data(){
    return {
      homeData: null
    }
  },
  components: {
    NavBar
  },
  created(){
    request({
      url: '/home/multidata',
    }).then(res => {
      console.log(res);
      this.homeData = res;
    })
  }
};
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #FFF;
  }
</style>
