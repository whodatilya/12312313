<template>
  <div>
    <img @click="this.$router.push('fourth')" style="width: 414px" :src="cabinetAdd" alt="">
  </div>
</template>

<script>
import cabinetAdd from '@/assets/cabinetAddFile.png'
export default {
    name: 'FifthPage',
    data () {
      return {
        cabinetAdd
      }
    }
}
</script>
