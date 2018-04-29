<template>
  <div class="todos">
    <hello />
    <router-link :to="{ name: 'todo', params: {
      id: 1
      } }">
      <button>todo 1</button>
    </router-link>
    <a href="./error">
      <button>error</button>
    </a>
  </div>
</template>

<script>
import hello from '@/components/hello'

export default {
  name: 'todos',
  components: {
    hello
  }
}
</script>
