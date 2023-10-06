<template>
  <div class="two">
    <img @click="this.$router.push('first')" style="width: 414px" :src="headerSecond" alt="">
    <img @click="this.$router.push('third')" style="width: 414px; margin-top: -6px;" :src="contentSecond" alt="">
    <img style="width: 414px;" :src="contentSecondCont" alt="">
  </div>
</template>

<script>
import secondPage from '@/assets/2-2.jpg'
import headerSecond from '@/assets/headerSecond.jpg'
import contentSecond from '@/assets/contentSecond.jpg'
import contentSecondCont from '@/assets/secondContentContCopy.jpg'
export default {
    name: 'IndexPage',
    data () {
      return {
        headerSecond,
        contentSecond,
        contentSecondCont,
        secondPage
      }
    }
}
</script>

<style>

</style>