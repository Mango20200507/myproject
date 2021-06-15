<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
<div>
  <button @click='goBack'>后退</button>
  <button @click='goOn'>前进</button>
  <button @click='goHome'>返回首页</button>
</div>
    <router-link to='/'>Home</router-link>|
    <router-link to='/params/857/高考加油'>params</router-link>|
    <router-link to='/goHome'>goHome</router-link>|
    <router-link to='/Hi1'>Hi1</router-link>|
    <router-link to='/Mango'>Mango</router-link>|
    <router-link to='/sun'>sun</router-link>|
    <router-link to='/6845'>随便写的</router-link>|
    <!-- <div>
      <router-link to="/" >首页</router-link>/
      <router-link to="/Mango" >mango</router-link>/ -->
      <!-- <router-link to="/Mango/Mango1" >mango1</router-link>/ -->
      <!-- <router-link :to="{name:'Mango1',params:{username:'史密斯',id:'88888'}}" >mango1</router-link>/
      <router-link to="/Mango/Mango2" >mango2</router-link>
      <p>{{$route.name}}</p> -->
    <!-- </div> -->
<transition name='fade' mode="out-in">
 <router-view ></router-view>
</transition>

    <!-- <router-view name="left" style="float:left;width:50%;height:300px;background-color:#ccc;"></router-view>
    <router-view name="right"  style="float:left;width:50%;height:300px;background-color:pink;"></router-view> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goOn(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter{
opacity: 0;
}

.fade-enter-active{
transition:opacity .5s;
}

.fade-leave{
  opacity: 1;
}

.fade-leave-active{
  opacity: 0;
  transition:opacity .5s;
}
</style>
