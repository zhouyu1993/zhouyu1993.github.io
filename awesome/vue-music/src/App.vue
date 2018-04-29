<template>
  <div id="app">
    <div class="logo">
      <img :src="src">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      src: require('@/assets/img/logo.png')
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/rem';

#app {
  width: rem(750);
  margin: 0 auto;

  .logo {
    padding: rem(20) 0;
    text-align: center;

    img {
      width: rem(200);
      height: rem(200);
    }
  }
}
</style>
