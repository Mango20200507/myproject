<template>
<div>
   <h2>{{msg}}</h2>
  <p>newsID:{{$route.params.newsID}}</p>
  <p>newsTitle:{{$route.params.newsTitle}}</p>
</div>


</template>
<script>
export default {
  data(){
    return{
      msg:'params page',
    }
  },
   beforeRouteEnter: (to, from, next) => {
            console.log('准备进去params模版');
            next()
        }, beforeRouteLeave: (to, from, next) => {
            console.log('准备离开params路由模版');
            next()
        },
}
</script>
