<template>
  <div>
    <img @click="this.$router.push('second')" style="width: 414px; height: 896px" :src="firstMain" alt="">
<!--    <img  :src="first" alt="">-->
  </div>
</template>

<script>
// import first from '@/assets/1-1.jpg'
import firstMain from '@/assets/mainFirst.jpg'
export default {
    name: 'IndexPage',
    data () {
      return {
        firstMain
      }
    }
}
</script>

<style>

</style>