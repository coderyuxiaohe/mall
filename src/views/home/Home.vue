<template>
	<div>
		<h1>首页</h1>
    <div>{{ homeData }}</div>
	</div>
</template>

<script>
import { request } from '../../network/request'

export default {
	name: 'home',
  data(){
    return {
      homeData: null
    }
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

<style scoped></style>
