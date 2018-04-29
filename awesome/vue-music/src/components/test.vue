<template>
  <div class="test">
    <h1 @click="update">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue.js App'
    }
  },
  methods: {
    update () {
      this.msg = 'click'
    }
  },
  created () {
    this.msg = 'test Vue.js App'
  }
}
</script>

<style lang="css">
</style>
