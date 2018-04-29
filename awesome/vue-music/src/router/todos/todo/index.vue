<template>
  <div class="todo">
    {{name}}:{{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      name: 'todo'
    }
  }
}
</script>

<style lang="scss">
.todo {
  text-align: center;
}
</style>
