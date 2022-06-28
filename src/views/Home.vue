<!--
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-27 13:00:32
 * @LastEditTime: 2022-06-28 20:53:11
 * @FilePath: /WebDemo/src/views/Home.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
-->
<template>
  <div class="home">
    <!-- <van-notify></van-notify> -->
    <div class="exchange-cell">
      <van-cell-group inset>
        <van-field v-model="key" label="卡号" placeholder="请输入4位卡号" maxlength=16 :formatter="formatter"
          format-trigger="onChange" clearable center />
        <van-field v-model="password" type="password" label="卡密" placeholder="请输入4位卡密" :formatter="formatter"
          format-trigger="onChange" maxlength=16 clearable center />
      </van-cell-group>
    </div>

    <div class="sumit-btn">
      <van-button type="primary" @click="exchange">兑换</van-button>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Dialog } from 'vant'
import { ref } from 'vue'
import qs from 'qs'
export default {
  name: 'Home',
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
      // console.log(event.target);
      this.$axios.post('api/redemptions', qs.stringify({
        'key': this.key,
        'password': this.password
      })).then(res => {
        let { message, data, code } = res.data;
        if (code == 200) {  // 初次使用，跳转选择页
          this.$router.push('/choice')
        } else if (code == 201) { // 已被兑换，访问详情页
          this.$router.push('/profile')
        } else {            // 帐号或密码错误
          // this.$notify({ type: 'warning', message: message })
          Dialog({message: message})
        }
      })
    },
    formatter(value) {
      // console.log(value.replace(/\d/g, '').toUpperCase());
      return value.toUpperCase()
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
.exchange-cell {
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.submit-btn {
  margin-top: 10px;
}
</style>