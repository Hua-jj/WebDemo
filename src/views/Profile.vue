<!--
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-27 13:00:32
 * @LastEditTime: 2022-06-28 19:52:13
 * @FilePath: /WebDemo/src/views/Profile.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
-->
<template>
  <div class="profile">
    <!-- 可以使用 CellGroup 作为容器 -->
    <div class="exchange-cell">
      <van-cell-group inset>
        <van-field v-model="key" label="卡号" placeholder="请输入4位卡号" maxlength="16" clearable="true"/>
        <van-field v-model="password" type="password" label="卡密" placeholder="请输入4位卡密" maxlength="16" clearable="true"/>
      </van-cell-group>
    </div>
    <div class="sumit-btn">
      <van-button type="primary" @click="exchange">兑换</van-button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

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
      key: '',
      password: ''
    }
  },
  methods: {
    exchange(event) {
      console.log(this.key);
      console.log(event.target);
      this.$axios.post('api/redemptions', qs.stringify({
        'key':this.key,
        'password': this.password
      })).then( res => {
        console.log(res.data);
      })
    }
  },
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
.home {
  
}

.exchange-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.submit-btn {
  margin-top: 10px;
}
</style>