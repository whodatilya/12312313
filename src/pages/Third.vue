<template>
  <div>
    <img style="width: 414px" :src="thirdPage" alt="">
    <div>
      <img style="width: 414px" :src="graphic" alt="">
    </div>
    <div style="display: flex; flex-direction: row; background: #fafafa; padding: 0 36px; align-items: center;  margin-bottom: 10px">
      <div style="border-radius: 10px; background: white; padding: 16px; font-size: 8px; filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.20));">Виды налогов</div>
      <div style="border-radius: 10px; padding: 14px;font-size: 8px;">Категории</div>
      <div style="border-radius: 10px; padding: 14px;font-size: 8px;">Министерства</div>
      <div style="border-radius: 10px; padding: 14px;font-size: 8px;">Районы</div>
      <div style="border-radius: 10px; padding: 14px;font-size: 8px;">Тип должников</div>
    </div>
    <div style="display: flex;flex-direction: row;flex-wrap: wrap; background: white; gap: 6px; padding: 0 40px;">
      <div style="display: flex; padding: 6px;flex-direction: column; background: #FF9383; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Налог на прибыль организации
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">3 376</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">5 002</div>
          </div>
        </div>
      </div>
      <div style="display: flex; padding: 6px;flex-direction: column; background: #FF9383; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Налог на доходы физ. лиц
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">2 487</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">3 687</div>
          </div>
        </div>
      </div>
      <div style="display: flex; padding: 6px;flex-direction: column; background: #5FD86B; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Транспортный налог с физ. лиц
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">1 265</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">1 051</div>
          </div>
        </div>
      </div>
      <div style="display: flex; padding: 6px;flex-direction: column; background: #FFCAC1; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Налог со специальным налоговым режимом
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">961</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">1 293</div>
          </div>
        </div>
      </div>
      <div style="display: flex; padding: 6px;flex-direction: column; background: #FFCAC1; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Налог на имущество с организаций
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">773</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">791</div>
          </div>
        </div>
      </div>
      <div style="display: flex; padding: 6px;flex-direction: column; background: #FF9383; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Земельный налог с организаций
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">755</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">778</div>
          </div>
        </div>
      </div>
      <div style="display: flex; padding: 6px;flex-direction: column; background: #A2EAA9; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Налог на имущество с физ. лиц
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">391</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">387</div>
          </div>
        </div>
      </div>
      <div style="display: flex; padding: 6px;flex-direction: column; background: #A2EAA9; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Транспортный налог с организаций
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">261</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">260</div>
          </div>
        </div>
      </div>
      <div style="display: flex; padding: 6px;flex-direction: column; background: #5FD86B; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Земельный налог с физ. лиц
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">270</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">Факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">249</div>
          </div>
        </div>
      </div>
      <div style="display: flex; padding: 6px;flex-direction: column; background: #FF9383; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Акцизы
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">132</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">241</div>
          </div>
        </div>
      </div>
      <div style="display: flex; padding: 6px;flex-direction: column; background: #FF9383; border-radius: 6px; width: 65px; height: 65px; justify-content: space-between">
        <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            whitespace: nowrap;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 600;
            line-height: 7px; /* 126.316% */
            letter-spacing: -0.442px;">
          Прочие налоги и сборы
        </div>
        <div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">план</div>
            <div style="overflow: hidden;
            color: rgba(0, 0, 0, 0.60);
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">3</div>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 5px">
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 6px;
            font-style: normal;
            font-weight: 400;
            line-height: 6px; /* 125% */
            letter-spacing: -0.442px;">факт</div>
            <div style="overflow: hidden;
            color: #000;
            text-overflow: ellipsis;
            font-family: SF Pro Text;
            font-size: 7px;
            font-style: normal;
            font-weight: 700;
            line-height: 7px; /* 105.263% */
            letter-spacing: -0.442px;">16</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import thirdPage from '@/assets/3-2.jpg'
import graphic from '@/assets/Pages Stack 1.svg'
import stack from '@/assets/Stack.svg'
export default {
    name: 'IndexPage',
    data () {
      return {
        thirdPage,
        graphic,
        stack
      }
    }
}
</script>

<style scoped lang="css">
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