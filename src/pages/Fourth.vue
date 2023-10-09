<template>
  <div style="width: 414px; overflow-x: hidden;">
    <img @click="this.$router.push('second')" style="width: 414px" :src="headerThird" alt="">
    <div class="relative-left">
      <img style="width: 466px" :src="graphicFourth" alt="">
    </div>
    <div class="relative-left" style="display: flex; margin-left: 46px">
      <img style="width: 365px" :src="additional" alt="">
    </div>
    <div @click="isBrowserOpened = true" style="display: flex; padding: 10px; background: #0084FF; width: fit-content; border-radius: 10px; margin-left: 22px; margin-top: 15px; margin-bottom: 15px">
      <span style="color: white;
        font-family: 'Gotham Pro', sans-serif;
        font-size: 7px;
        font-style: normal;
        font-weight: 500;
        line-height: 7px; /* 122.222% */
        letter-spacing: -0.45px;">Заполнить данные</span>
    </div>
    <div v-if="isBrowserOpened" class="browser-content">
      <div @click="isBrowserOpened = false" style="display: flex; padding: 10px; width: fit-content; border-radius: 10px; margin-left: 323px; margin-top: 10px; margin-bottom: 10px">
        <span style="color: #0084FF;
          font-family: 'Gotham Pro', sans-serif;
          font-size: 7px;
          font-style: normal;
          font-weight: 500;
          line-height: 7px; /* 122.222% */
          letter-spacing: -0.45px;">Готово</span>
      </div>
      <div style="display: flex; justify-content: center;"> 
        <div style="position: relative; left: -10px">
          <img v-if="isJopa" @click="changeEcran2" style="width: 336px" :src="cabinetItem" alt="">
          <img v-if="!isJopa && !isMensheJopa" @click="changeEcran" style="width: 336px" :src="cabinetList" alt="">
          <img v-if="!isJopa && !isMensheJopa" @click="changeMoreEcran" style="position: absolute; top: 20px" :src="vectorButton" alt="">
          <img v-if="isMensheJopa" @click="changeMoreEcran2" style="width: 336px" :src="cabinetAdd" alt="">
          <div v-if="isMensheJopa" style="height: 336px; background: white"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import thirdPage from '@/assets/3-2.jpg'
import headerThird from '@/assets/headerThird.jpg'
import graphic from '@/assets/Pages Stack 1.svg'
import graphic2 from '@/assets/Pages+Stack+1.svg.png'
import stack from '@/assets/Stack.svg'
import graphicFourth from '@/assets/stakesssss.png'
import cabinetList from '@/assets/cabinetList.jpg'
import additional from '@/assets/additional.png'
import vectorButton from '@/assets/Vector.svg'
import cabinetItem from '@/assets/cabinetItem.jpg'
import cabinetAdd from '@/assets/cabinetAddFile.png'
export default {
    name: 'FourthPage',
    data () {
      return {
        headerThird,
        thirdPage,
        graphic,
        graphic2,
        additional,
        vectorButton,
        stack,
        graphicFourth,
        cabinetList,
        cabinetItem,
        cabinetAdd,
        isCategories: false,
        isTypes: true,
        isJopa: false,
        isMensheJopa: false,
        isBrowserOpened: false
      }
    },
    created() {
      window.scrollBy(0, 0)
    },
  methods: {
      onCategoryClick () {
        this.isCategories = true
        this.isTypes = false
      },
      onTypesClick () {
        this.isTypes = true
        this.isCategories = false
      },
      changeEcran () {
        this.isJopa = true
      },
      changeEcran2 () {
        this.isJopa = false
      },
      changeMoreEcran () {
        this.isMensheJopa = true
      },
      changeMoreEcran2 () {
        this.isMensheJopa = false
      }
    }
}
</script>

<style scoped lang="css">
.isActive_text {
  overflow: hidden;
  color: #4A5A75;
  text-overflow: ellipsis;
  font-family: SF Pro Text,sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 8px; /* 117.647% */
  letter-spacing: -0.442px;
}
.isActive_block {
  border-radius: 10px 10px 0 0 !important;
  background: white !important;
  padding: 5px 14px;
  font-size: 8px !important;
  filter: drop-shadow(0px 4px 40px rgba(1,1,1,1)) !important;
}

.browser-content {
  margin: 18px 22px; 
  background: #FFF;
  border: 1px solid #CBCBCB;
  border-radius: 16px;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("@/assets/fonts/SFProDisplay-Bold.eot");
  src: local("SF Pro Display Bold"), local("SFProDisplay-Bold"),
  url("@/assets/fonts/SFProDisplay-Bold.eot?#iefix") format("embedded-opentype"),
  url("@/assets/fonts/SFProDisplay-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("@/assets/fonts/SFProDisplay-Regular.eot");
  src: local("SF Pro Display Regular"), local("SFProDisplay-Regular"),
  url("@/assets/fonts/SFProDisplay-Regular.eot?#iefix") format("embedded-opentype"),
  url("@/assets/fonts/SFProDisplay-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("@/assets/fonts/SFProDisplay-Semibold.eot");
  src: local("SF Pro Display Semibold"), local("SFProDisplay-Semibold"),
  url("@/assets/fonts/SFProDisplay-Semibold.eot?#iefix") format("embedded-opentype"),
  url("@/assets/fonts/SFProDisplay-Semibold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("@/assets/fonts/SFProText-Regular.ttf");
  src: local("SF Pro Text Regular"), local("SFProText-Regular"),
  url("@/assets/fonts/SFProText-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Text";
  src: url("@/assets/fonts/SFProText-Bold.ttf");
  src: local("SF Pro Text Bold"), local("SFProText-Bold"),
  url("@/assets/fonts/SFProText-Bold.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
html, body {
  padding: 0;
  margin: 0;
}
.header {
  padding: 10px 20px 20px 20px;
}
.header__wrapper {
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-bottom: 44px;
}
.header__text {
  color: #000;
  text-align: center;
  font-family: Times New Roman, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  line-height: 14px;
  letter-spacing: -0.442px;
}
.main-text {
  color: #000;
  font-family: Times New Roman, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 28px; /* 133.333% */
  letter-spacing: -0.442px;
}
.text-center {
  text-align: center;
}
.text-bold {
  font-weight: bold;
}
.info {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  padding-bottom: 80px;
  padding-right: 80px;
}
.minister__text {
  padding: 0 88px 0 115px;
  color: #000;
  text-align: justify;
  font-family: Times New Roman, sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: normal;
  line-height: 32px;
  letter-spacing: -0.442px;
}
.minister__text p {
  text-indent: 40px;
}
.indicators__info_banner {
  align-items: center;
  display: flex;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(24, 162, 242, 0.12);
}
.info__text {
  color: #2C2D2E;
  font-family: SF Pro Text, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.24px;
}
.indicators {
  margin: 0 80px;
}
.category__header {
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: SF Pro Display, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: 0.36px;
  padding: 32px 0 16px;
}
.indicators__list_header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 24px;
  padding: 8px 0
}
.indicators__list_header > div {
  font-feature-settings: 'ss03' on, 'clig' off, 'liga' off;
  font-family: SF Pro Text Regular, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 146.667% */
  letter-spacing: -0.456px;
}
.p-bottom-24 {
  padding-bottom: 24px;
}
.indicators__list_line_type_1 {
  border: 1.5px solid rgba(0, 0, 0, 0.80);
  margin: 0
}
.indicators__list_line_type_2 {
  border: 1px solid rgba(0, 0, 0, 0.80);
  margin: 0
}
.indicator__item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.40);
}
.indicator__button {
  padding: 12px 16px;
  color: #FFFFFF;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  margin-left: auto;
  border-radius: 4px
}
.button__green {
  background: linear-gradient(180deg, #1DBF53 0%, #009E35 100%);
}
.button__green:hover {
  background: linear-gradient(180deg, #1DBF53 0%, #009E35 20%);
}
.button__red {
  background: linear-gradient(180deg, #FF4A4A 0%, #EA0000 100%);
}
.button__red:hover {
  background: linear-gradient(180deg, #FF4A4A 0%, #EA0000 20%);
}
.indicators__list_wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.indicator__title {
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: SF Pro,sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 590;
  line-height: 22px;
  letter-spacing: -0.442px;
}
.indicator__unit {
  color: #92A6B9;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: SF Pro,sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.078px;
}
.indicator__value {
  color: #000;
  font-feature-settings: 'ss03' on, 'clig' off, 'liga' off;
  font-family: SF Pro Text Bold, sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: bold;
  line-height: 28px;
  letter-spacing: -0.456px;
}
.indicator__button_text {
  font-family: SF Pro Text Regular, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.24px;
}
.glow__green-1 {
  animation: glowing__green 2400ms infinite;
}
.glow__green-2 {
  animation: glowing__green 2000ms infinite;
}
.glow__red {
  animation: glowing__red 1600ms infinite;
}
.value__green {
  color: #00B83E;
}
.value__red {
  color: #F00;
}

@keyframes glowing__green {
  0% {
    background-color: transparent;
    box-shadow: 0 0 0 12px transparent;
    border-radius: 4px
  }
  50% {
    background-color: rgba(15, 175, 68, 0.40);
    box-shadow: 0 0 0 12px rgba(15, 175, 68, 0.40);
  }
  100% {
    background-color: transparent;
    box-shadow: 0 0 0 12px transparent;
    border-radius: 4px
  }
}

.relative-left {
  position: relative;
  left: -26px;
}

@keyframes glowing__red {
  0% {
    background-color: transparent;
    box-shadow: 0 0 0 12px transparent;
    border-radius: 4px
  }
  50% {
    background-color: rgba(245, 37, 37, 0.40);
    box-shadow: 0 0 0 12px rgba(245, 37, 37, 0.40);
  }
  100% {
    background-color: transparent;
    box-shadow: 0 0 0 12px transparent;
    border-radius: 4px
  }
}
</style>