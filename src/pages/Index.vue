<template>
  <div>
    <img @click="this.$router.push('second')" style="width: 414px; height: 896px" :src="first" alt="">
  </div>
</template>

<script>
import first from '@/assets/1-1.jpg'
export default {
    name: 'IndexPage',
    data () {
      return {
        first
      }
    }
}
</script>

<style>

</style>