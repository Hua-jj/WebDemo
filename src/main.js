/*
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-28 12:55:36
 * @LastEditTime: 2022-06-29 19:00:08
 * @FilePath: /WebDemo/src/main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
 */
import { createApp } from 'vue'
import {Button, Field, CellGroup} from 'vant'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { Swipe, SwipeItem } from 'vant';
import { NavBar } from 'vant';
import { Form} from 'vant';
import { Skeleton } from 'vant';

// axios.defaults.baseURL = '/api'

// Toast
import { Toast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { Dialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { Notify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { ImagePreview } from 'vant';
import 'vant/es/image-preview/style';

const app = createApp(App)
app.use(router)
app.use(Button)
app.use(Field)
app.use(CellGroup)
app.use(Dialog)
app.use(Notify)
app.use(Toast)
app.use(Swipe);
app.use(SwipeItem);
app.use(NavBar)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Skeleton);

app.config.globalProperties.$axios = axios
app.mount('#app')
