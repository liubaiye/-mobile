<template>
  <div class="head-nav" style="height:100%;">
    <x-header :left-options="{showBack: !isIndex}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      <div slot="right" v-show="isIndex">
        <router-link :to="{path:'/UserHome'}">
          <i class="iconfont icon-yanjing2 head-ico" ></i>
        </router-link>
      </div>
      <div slot="left" v-show="isIndex">
        <router-link :to="{path:'/UserHome'}">
          <i class="iconfont head-ico icon-lingdangtixingxiaoxigonggaozhuyitongzhizhong" ></i>
        </router-link>
      </div>
      <div class="page-title">{{appTitle}}</div>
    </x-header>
    <view-box ref="viewBox" class="view-cage">
        <router-view></router-view>
    </view-box>
    <tabbar class="tabbar-foot" >
      <tabbar-item @on-item-click="routeGo(item,index)" v-for='(item,index) in tabbarNav' :key="index" :selected="item.selected" >
        <span slot="icon" class="iconfont" :class="item.icon">
        </span>
        <span slot="label">{{item.label}}</span>
      </tabbar-item>
    </tabbar>
  
  </div>

</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";

  import {
    Popup,
   
    LoadMore,
    Cell,
    XHeader,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    CellBox,
    Group,
    ViewBox,
 
    ChinaAddressV4Data,
 
  } from "vux";
  export default {
    name: "head-nav",
    components: {
      Popup,
      ChinaAddressV4Data,
      Cell,
      XHeader,
      Grid,
      GridItem,
      Tabbar,
      TabbarItem,
      CellBox,
      Group,
      ViewBox
    },
    data() {
      return {
        businessState:false,
        routS:true,
        itemSelect:0,
        tabbarNav: [{
          icon: 'icon-tuijian',
          label: '推荐',
          selected: true,
          path: '/Home'
        }, {
          icon: 'icon-weibiaoti5',
          label: '理财',
          selected: false,
          path: '/ConductFinancial'
        }, {
          icon: 'icon-zhinanzhen1',
          label: '发现',
          selected: false,
          path: '/MachineState'
        }, {
          icon: 'icon-wode-copy',
          label: '我的',
          selected: false,
          path: '/MachineState'
        }],
        value_0_1: ["安徽省", "合肥市"],
        addressData: ChinaAddressV4Data,
        demo01_index: 0
      };
    },
    computed: {
      appTitle(){
        return this.$route.meta.label
      },
      isIndex(){
        if(this.$route.meta.label !='推荐'){
          return false;
        }else{
          return true;
        }
      }
    },
    methods: {
      
      routeGo(val,index){
        this.itemSelect = index
        if(val.path==='/BusinessIndex'){
            this.routS = true
            this.businessState = true
        }else if(val.path==='/MachineState'){
            this.routS = false
            this.businessState = true
        }else{
          this.$router.push({
          path:val.path
        })
        }
        
      },
      onFocus(){
        this.$router.push({
          path:'/SearchStatic'
        })
      },
      activePath() {
        var active = this.$route.fullPath
        this.tabbarNav.map((item) => {
          if (item.path === active) {
            item.selected = true
          } else {
            item.selected = false
          }
        })
      },
      login() {},
      regair() {},
      demo01_onIndexChange(index) {
        this.demo01_index = index
      },
    },
    mounted() {
      this.activePath()
    }
  };

</script>
<style scoped>
  .tabbr-ico {
    font-size: 20px !important;
  }

  .view-cage .view-cage {
    margin-top: 0;
  }

</style>
