<template>
  <div class="one">
    <img  @click="this.$router.push('second')" style="width: 414px" :src="firstMain" alt="">
    <img style="width: 414px; position: fixed; bottom: 0; display: block" :src="menu" alt="">
  </div>
</template>

<script>
import firstMain from '@/assets/mainFirstCopy.jpg'
import menu from '@/assets/menu.jpg'
export default {
    name: 'IndexPage',
    data () {
      return {
        firstMain,
        menu
      }
    }
}
</script>

<style>

</style>