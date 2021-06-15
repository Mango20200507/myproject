<template>
<div>
  <h2>{{msg}}</h2><hr>
  <h3>{{$store.state.a.count}}-{{count}}</h3>
  <p>
    <button @click='$store.commit("add",10)'>增加</button>
    <button @click='reduce'>减少</button>
  </p>

   <p>
    <button @click='addAction'>增加</button>
    <button @click='reduceAction'>减少</button>
  </p>
</div>
</template>

<script>
import store from '@/vuex/store';
import {mapState,mapMutations,mapGetters, mapActions} from 'vuex';

export default {
  data(){
    return{
      msg:'hello vuex'
    }
  },
  //第一种方法
  // computed:{
  //   count(){
  //     return this.$store.state.count;
  //   }
  // },

  //第二种方法
  // computed:mapState({
  //   count:state=>state.count,
  // }),

  //第三种方法 推荐
  // computed:mapState(['count']),
  computed:{
    //es6扩展运算符
    // ...mapState(['count']),
// count(){
// return this.$store.getters.count
// }
// ...mapGetters(['count'])
count(){
  return this.$store.state.a.count;
}
  },
  methods:{
    ...mapMutations(["add",'reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>
