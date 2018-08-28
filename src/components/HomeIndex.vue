<template>
  <div class="home-index">
    <swiper :aspect-ratio="300/800">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in swriper_list" :key="index">
        <img :src="item.img">
      </swiper-item>
    </swiper>
    <flexbox :gutter="0" wrap="wrap" class="four-tit">
      <flexbox-item :span="1/4">
        <div class="flex-demo">
          <div class="flex-img text-center">
            <img src="../../static/images/1_03.png" />
            <p>新手福利</p>
          </div>
        </div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="flex-demo">
          <div class="flex-img text-center">
            <img src="../../static/images/2_06.png" />
            <p>邀请好友</p>
          </div>
        </div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="flex-demo">
          <div class="flex-img text-center">
            <img src="../../static/images/3_08.png" />
            <p>安全保障</p>
          </div>
        </div>
      </flexbox-item>
      <flexbox-item :span="1/4">
        <div class="flex-demo">
          <div class="flex-img text-center">
            <img src="../../static/images/4_11.png" />
            <p>理财学堂</p>
          </div>
        </div>
      </flexbox-item>
    </flexbox>
    <div class="index-item">
      <h3>安全第一 收益至上</h3>
      <abbr>上市公司护航，严格风控 优质债权</abbr>
    </div>
    <div class="index-box">
      <div class="item-title">活期理财</div>
      <div class="flexbox-index first-child">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="4/10">
            <div class="flex-demo has-right-solid">
              <h1>0.5%</h1>
              <p>万元每日收益50元</p>
            </div>
          </flexbox-item>
          <flexbox-item :span="6/10">
            <div class="flex-demo right-gird">
              <p>活灵活现 随时支取</p>
              <span>本息保障</span>
              <span>每日返息</span>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div class="index-box">
      <div class="item-title">锁定期理财</div>
      <div class="flexbox-index first-child">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="4/10">
            <div class="flex-demo has-right-solid">
              <h1>0.7%</h1>
              <p>每日收益</p>
            </div>
          </flexbox-item>
          <flexbox-item :span="6/10">
            <div class="flex-demo right-gird">
              <p>锁定期 7天</p>
              <abbr>可购金额100,000.00元</abbr>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="flexbox-index">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="4/10">
            <div class="flex-demo has-right-solid">
              <h1>0.9%</h1>
              <p>每日收益</p>
            </div>
          </flexbox-item>
          <flexbox-item :span="6/10">
            <div class="flex-demo right-gird">
              <p>锁定期 30天</p>
              <abbr>可购金额100,000.00元</abbr>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="flexbox-index">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="4/10">
            <div class="flex-demo has-right-solid">
              <h1>1.0%</h1>
              <p>每日收益</p>
            </div>
          </flexbox-item>
          <flexbox-item :span="6/10">
            <div class="flex-demo right-gird">
              <p>锁定期 90天</p>
              <abbr>可购金额100,000.00元</abbr>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="flexbox-index">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="4/10">
            <div class="flex-demo has-right-solid">
              <h1>1.2%</h1>
              <p>每日收益</p>
            </div>
          </flexbox-item>
          <flexbox-item :span="6/10">
            <div class="flex-demo right-gird">
              <p>锁定期 180天</p>
              <abbr>可购金额100,000.00元</abbr>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="flexbox-index">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="4/10">
            <div class="flex-demo has-right-solid">
              <h1>1.5%</h1>
              <p>每日收益</p>
            </div>
          </flexbox-item>
          <flexbox-item :span="6/10">
            <div class="flex-demo right-gird">
              <p>锁定期 365天</p>
              <abbr>可购金额100,000.00元</abbr>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";
  import $ from "jquery";
  import {
    SwiperItem,
    Swiper,
    Popup,
    Flexbox,
    Group,
    Radio,
    Confirm,
    XButton,
    XDialog,
    XSwitch,
    Tab,
    TabItem,
    FlexboxItem,
    TransferDomDirective as TransferDom
  } from "vux";
  export default {
    name: "HomeIndex",
    components: {
      SwiperItem,
      Swiper,
      Popup,
      Flexbox,
      Group,
      Radio,
      Confirm,
      XButton,
      XDialog,
      XSwitch,
      FlexboxItem,
      Tab,
      TabItem
    },
    data() {
      return {
        swriper_list: [{
            url: "javascript:",
            img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
            title: "送你一朵fua"
          },
          {
            url: "javascript:",
            img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
            title: "送你一次旅行",
            fallbackImg: "https://static.vux.li/demo/3.jpg"
          }
        ]
      };
    },
    watch: {
      checked(newVal, oldVal) {
        if (newVal) {
          this.popChartOption.title.text = "热力值";
        } else {
          this.popChartOption.title.text = "客流分析";
        }
      }
    },
    methods: {
      chartBtn() {
        this.showDialogStyle = true;
        let option = this.popChartOption;
        this.popChartInit(option);
      },
      dateChange() {},
      confirms() {
        this.confirmChecked = true;
      },
      cellChange() {
        this.visibility = true;
      },
      onItemClick(val) {
        this.selectIndex = val;
      },
      popChartInit(option) {
        this.popChart = echarts.init(this.$refs.popChart);
        this.popChart.setOption(option);
      }
    },
    mounted() {
      let width = $("body").width();
      let height = $("body").height() - 50;
      this.size = {
        width: width,
        height: height
      };
    }
  };

</script>
<style scoped>


</style>
