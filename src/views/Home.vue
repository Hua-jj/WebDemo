<!--
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-27 13:00:32
 * @LastEditTime: 2022-06-29 22:07:50
 * @FilePath: /WebDemo/src/views/Home.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
-->
<template>
    <van-nav-bar title="兑换平台" />
    <div class="exchange-cell">
      <van-cell-group inset size="large">
        <van-field v-model="key" label="卡号" placeholder="请输入4位卡号" maxlength=16 :formatter="formatter"
          format-trigger="onChange" clearable center />
        <van-field v-model="password" type="password" label="卡密" placeholder="请输入4位卡密" :formatter="formatter"
          format-trigger="onChange" maxlength=16 clearable center />
      </van-cell-group>
    </div>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit" @click="selectPack">
                兑换
            </van-button>
        </div>

</template>

<script>
// @ is an alias to /src

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
    onConfirm(event) {
      console.log(this.key);
      // console.log(event.target);
      this.$axios.post('api/redemptions', qs.stringify({
        'key': this.key,
        'password': this.password
      })).then(res => {
        let { message, data, code } = res.data;
        console.log(message);
        if (code == 200) {  // 初次使用，跳转选择页
          this.$router.push('/pack')
        } else if (code == 201) { // 已被兑换，访问详情页
          this.$router.push('/profile')
        } else {            // 帐号或密码错误
          this.$notify({ type: 'danger', message: message })
        }
      })
    },
    formatter(value) {
      // console.log(value.replace(/\d/g, '').toUpperCase());
      return value.toUpperCase()
    }
  },
  components: {

  }
}
</script>

<style>
.exchange-cell {
  margin-top: 50%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

</style>