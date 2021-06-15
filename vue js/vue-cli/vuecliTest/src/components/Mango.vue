<template>
  <div >
    <h2>{{msg}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Mango',
  data () {
    return {
      msg: 'Welcome to mango'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
