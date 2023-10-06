<template>
  <div>
    <div v-if="!hello">
      <img @click="this.$router.push('second')" style="width: 414px" :src="headerThird" alt="">
      <img style="width: 414px" :src="indicatorPage" alt="">
      <img @click="changeComponent" style="width: 414px" :src="!switcher ? component1 : component2" alt="">
      <div style="display: flex; padding: 10px; background: rgba(0, 132, 255, 0.10); width: fit-content; border-radius: 10px; margin-left: 40px; margin-bottom: 40px">
      <span style="color: #0084FF;
        font-family: 'Gotham Pro', sans-serif;
        font-size: 7px;
        font-style: normal;
        font-weight: 500;
        line-height: 7px; /* 122.222% */
        letter-spacing: -0.45px;" @click="openModal">Добавить показатель</span>
      </div>
    </div>
    <div v-else style="background: white; display: flex; flex-direction: column; font-family: 'Gotham Pro',sans-serif; font-size: 18px; font-weight: 600">
      <img @click="employee" style="width: 414px" :src="backButton" alt="">
      <span style="margin-left: 40px">Отправить письмо сотруднику</span>
      <img style="margin: 0 40px;width: 334px" :src="who" alt="">
      <img style="margin: 0 40px; width: 334px" :src="srok" alt="">
      <img style="margin: 0 40px; width: 334px" :src="button" alt="">
    </div>

    <div v-if="modalSwitcher" style="display: flex; flex-direction: column;padding: 20px; gap: 10px; z-index: 999; background: white; box-shadow: 0px -12px 22px -3px rgba(34, 60, 80, 0.27);;border-radius: 10px 10px 0 0">
      <div style="background: #f2f5fa; padding: 10px; border-radius: 6px; font-family: 'Gotham Pro', sans-serif">Добавлю сам</div>
      <div @click="employee" style="background: #f2f5fa; padding: 10px; border-radius: 6px; font-family: 'Gotham Pro', sans-serif">Поручить сотруднику</div>
    </div>
  </div>
</template>

<script>
import thirdPage from '@/assets/3-2.jpg'
import headerThird from '@/assets/headerThird.jpg'
import graphic from '@/assets/Pages Stack 1.svg'
import graphic2 from '@/assets/Pages+Stack+1.svg.png'
import stack from '@/assets/Stack.svg'
import indicatorPage from '@/assets/layouts/indicatorPage.svg'
import component1 from '@/assets/layouts/component1.svg'
import component2 from '@/assets/layouts/component2.svg'
import backButton from '@/assets/backButton.jpg'
import who from '@/assets/who.jpg'
import srok from '@/assets/srok.jpg'
import button from '@/assets/button.jpg'
export default {
    name: 'IndexPage',
    data () {
      return {
        headerThird,
        thirdPage,
        graphic,
        graphic2,
        indicatorPage,
        component1,
        component2,
        backButton,
        srok,
        button,
        who,
        stack,
        isCategories: false,
        isTypes: true,
        switcher: false,
        modalSwitcher: false,
        hello: false
      }
    },
  created() {
    window.scrollBy(0, 0)
  },
  methods: {
      openModal () {
        this.modalSwitcher = !this.modalSwitcher
      },
      changeComponent () {
        this.switcher = !this.switcher
      },
      onCategoryClick () {
        this.isCategories = true
        this.isTypes = false
      },
      onTypesClick () {
        this.isTypes = true
        this.isCategories = false
      },
      employee () {
        this.hello = !this.hello
        this.modalSwitcher = false
      }
    }
}
</script>

<style scoped lang="css">
.isActive_text {
  overflow: hidden;
  color: #4A5A75;
  text-overflow: ellipsis;
  font-family: Gotham Pro,sans-serif;
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