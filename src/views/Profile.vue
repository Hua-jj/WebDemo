<!--
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-27 13:00:32
 * @LastEditTime: 2022-06-29 21:57:06
 * @FilePath: /WebDemo/src/views/Profile.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
-->
<template>
  <div class="profile">
    <!-- 可以使用 CellGroup 作为容器 -->
    <van-nav-bar title="兑换详情" />
    <van-cell-group inset>
      <van-cell title="兑换码" :value="redemption.key" />
      <van-cell title="隶属活动" :value="redemption.activity" />
      <van-cell title="兑换礼包" :value="redemption.pack_name" :label="redemption.pack_description" />
      <van-cell title="兑换时间" :value="redemption.redeem_time" />
      <van-cell title="收件人" :value="redemption.receiver" />
      <van-cell title="收件地址" :value="redemption.address" />
      <van-cell title="快递公司" :value="redemption.delivery_company" />
      <van-cell title="快递单号" :value="redemption.parcel_index" />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" @click="onReturnIndex">
        返回首页
      </van-button>
    </div>

  </div>
</template>

<script>

import qs from 'qs'

export default {
  name: 'Profile',
  // setup() {
  //   const key = ref('')
  //   const password = ref('')
  //   return {key, password}
  // },
  data() {
    return {
      redemption: '',
    }
  },
  methods: {
    onReturnIndex() {
      this.$router.push({name:'Home'})
    }
  },
  created() {
    this.$axios.get('api/redemptions').then(res => {
      console.log(res.data);
      let { message, data, code } = res.data;
      this.redemption = data
    })
  }

}
</script>

<style>
</style>