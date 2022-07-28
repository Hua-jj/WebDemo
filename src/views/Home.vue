<!--
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-27 13:00:32
 * @LastEditTime: 2022-07-28 19:23:35
 * @FilePath: /WebDemo/src/views/Home.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
-->
<template>
  <div class="home">
    <van-nav-bar title="欢迎登录兑换平台" />


    <div class="exchange-cell">
      <van-form @submit="onConfirm" inset>
        <van-field v-model="key" label="登录方式" center>
          <template #input>
            <van-radio-group v-model="userType" direction="horizontal">
              <van-radio name="code" @click="clearInput">券码验证</van-radio>
              <van-radio name="phone" @click="clearInput">手机号验证</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <div v-if="userType == 'code'">
          <van-field v-model="key" label="卡号" placeholder="请输入4位卡号" maxlength=16 :formatter="formatter"
            format-trigger="onChange" clearable center />
          <van-field v-model="password" type="password" label="卡密" placeholder="请输入4位卡密" :formatter="formatter"
            format-trigger="onChange" maxlength=16 clearable center />
        </div>
        <div v-else>
          <van-field v-model="key" label="手机号" type="tel" placeholder="请输入11位手机号" maxlength=11
            :rules="rules.telValidator" clearable center />
          <van-field v-model="password" label="短信验证码" type="digit" placeholder="请输入短信验证码" maxlength=6 :rules="rules.codeValidator" center clearable>
            <template #button>
              <van-button size="small" type="primary" @click="sendSmsCode" :disabled="codeDisabled" plain>{{ codeMsg
              }}
              </van-button>
            </template>
          </van-field>
        </div>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            兑换
          </van-button>
        </div>
      </van-form>
    </div>


  </div>


</template>

<script>
// @ is an alias to /src

import { interfaceDeclaration } from '@babel/types';
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
      password: '',
      userType: 'code',    // 验证类型
      codeDisabled: false,  // 是否禁用验证码按钮
      countDown: 60,
      codeMsg: '获取验证码',
      timer: null,
      telPattern: /1\d{10}/,
      rules: {
        telValidator: [{
          validator: val => {
            return /1\d{10}/.test(val)
          },
          message : '请输入正确的手机号',
          trigger: 'onChange'
        }],
        codeValidator: [{
          validator: val => {
            console.log('test', /1\d{10}/.test(val));
            return /\d{6}/.test(val)
          },
          message : '请输入六位验证码',
          trigger: 'onChange'
        }],
      }
    }
  },
  methods: {
    onConfirm() {
      console.log(this.key);
      // console.log(event.target);
      this.$axios.post('api/redemptions', qs.stringify({
        'key': this.key,
        'password': this.password,
        'user_type': this.userType
      })).then(res => {
        let { message, data, code } = res.data;
        console.log(message);
        if (code == 200) {  // 初次使用，跳转选择页
          // console.log(data);
          this.$router.push({ name: 'Activity', query: { id: data } })
        } else if (code == 201) { // 已被兑换，访问详情页
          this.$router.push('/profile')
        } else {            // 帐号或密码错误
          this.$notify({ type: 'danger', message: message })
        }
      })
    },
    clearInput() {
      this.key = '',
        this.password = ''
    },
    sendSmsCode() {
      this.$axios.get('api/smscodes', {
        params: {
          phone: this.key
        }
      }).then(res => {
        let { message, data, code } = res.data;
        if (code == 200) {
          this.$notify({ type: 'success', message: message })
          // 获取验证码倒计时
          if (!this.timer) {
            this.timer = setInterval(() => {
              if (this.countDown > 0 && this.countDown <= 60) {
                this.countDown -= 1
                this.codeDisabled = true
                if (this.countDown !== 0) { // 倒计时未结束
                  const codeMsgs = '重新获取'
                  this.codeMsg = codeMsgs.concat(this.countDown, 's')
                } else {
                  clearInterval(this.timer) // 倒计时结束
                  this.codeMsg = '获取验证码'
                  this.countDown = 60
                  this.timer = null
                  this.codeDisabled = false
                }
              }
            }, 1000)
          }
        } else {
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
  margin-top: 45%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>