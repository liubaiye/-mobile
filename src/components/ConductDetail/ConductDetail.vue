<template>
  <div class="home-index">
    <div class="conduct-page">
      
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
  name: "ConductDetail",
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
      sellList: [
        {
          id: 1,
          name: "活期宝",
          tag: "每日项目",
          point: "0.5",
          sellClear:false
        },{
          id: 2,
          name: "周周盈",
          tag: "短期灵活",
          point: "0.7",
          day: 7,
          sellClear:false
        },{
          id: 3,
          name: "月月盈",
          tag: "中期稳健",
          point: "0.8",
          day: 30,
          sellClear:false
        },{
          id: 4,
          name: "季季盈",
          tag: "长期猛赚",
          point: "0.9",
          day: 90,
          sellClear:false
        },{
          id: 5,
          name: "半年盈",
          tag: "利润翻番",
          point: "1.1",
          day: 180,
          sellClear:true
        }
      ],
      sellClear: false,
      swriper_list: [
        {
          url: "javascript:",
          img:
            "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
          title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img:
            "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
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
