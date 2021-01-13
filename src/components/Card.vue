<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="tianzhushan" @click.native="clickItem()">
      <div>邮箱：tian.zhu.shan@qq.com</div>
      <div>微信号：wxid_rsm5kkpepdw821</div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>/* eslint-disable */
  export default {
    data () {
      return {
        activeNames: 'tianzhushan'
      }
    },
    methods: {
      handleChange:function () {
        console.log("1")
      },
      clickItem:function () {
        console.log("2")
      }
    }
  }
</script>
