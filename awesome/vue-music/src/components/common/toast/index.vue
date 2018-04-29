<template>
  <transition name="fade">
    <div v-if="existing" v-show="visible" v-html="message" class="vue-demo-toast">2wwdwd</div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  props: {
    existing: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: '提示'
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 1000
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/rem';

.vue-demo-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2000;
  padding: rem(30);
  font-size: rem(32);
  color: #fff;
  text-align: center;
  word-break: break-all;
  background-color: rgba(0, 0, 0, .7);
  border-radius: rem(20);
  transform: translate3d(-50%, -50%, 0);
}
</style>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
