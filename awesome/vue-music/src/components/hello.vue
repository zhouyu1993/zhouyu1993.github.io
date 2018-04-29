<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <span>{{number}}</span>
    <button @click="updateNumber(1)">更新 number</button>
    <button @click="cookie">获取cookie中uid,如果没有则写入</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      msg: 'Hello Vue.js App'
    }
  },
  computed: {
    ...mapState(['number'])
  },
  methods: {
    ...mapActions(['updateNumber']),
    cookie () {
      const uid = this.$$cookie('uid')
      if (!uid) {
        this.$$cookie.set('uid', 'zhouyu')
      } else {
        this.$$toast(uid)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hello {
  text-align: center;

  h1 {
    font-size: 30px;
    color: #121212;
  }

  span {
    font-size: 26px;
    color: #f00;
  }

  img {
    width: 200px;
    height: 200px;
  }

  button {
    display: block;
    padding: 10px 20px;
    margin: 10px auto;
    font-size: 26px;
    color: #fff;
    background-color: #00baf7;
    border: 0;
  }
}
</style>
