/*
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-28 12:55:36
 * @LastEditTime: 2022-06-28 20:51:44
 * @FilePath: /WebDemo/src/main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
 */
import { createApp } from 'vue'
import {Button, Field, CellGroup, Dialog, Notify} from 'vant'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// axios.defaults.baseURL = '/api'

const app = createApp(App)
app.use(router)
app.use(Button)
app.use(Field)
app.use(CellGroup)
app.use(Dialog)
app.use(Notify)

app.config.globalProperties.$axios = axios
app.mount('#app')
