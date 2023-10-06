<template>
  <div>
    <img @click="this.$router.push('third')" style="width: 414px; height: 896px" :src="secondPage" alt="">
  </div>
</template>

<script>
import secondPage from '@/assets/2-2.jpg'
export default {
    name: 'IndexPage',
    data () {
      return {
        secondPage
      }
    }
}
</script>

<style>

</style>