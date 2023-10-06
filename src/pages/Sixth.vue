<template>
  <div>
    <img @click="this.$router.push('fourth')" style="width: 414px" :src="cabinetItem" alt="">
  </div>
</template>

<script>
import cabinetItem from '@/assets/cabinetItem.jpg'
export default {
    name: 'SixthPage',
    data () {
      return {
        cabinetItem
      }
    }
}
</script>