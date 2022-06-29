<!--
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-28 12:55:36
 * @LastEditTime: 2022-06-29 21:58:16
 * @FilePath: /WebDemo/src/views/Confirm.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
-->
<template>
    <div class="confirm-container">
        <van-nav-bar title="确认订单信息" left-text="返回" left-arrow @click-left="onClickLeft" />
        <van-form @submit="onSubmit">
            <van-address-edit :area-list="areaList" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSubmit"
                save-button-text="确认" detail-maxlength="100" />
        </van-form>

    </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import qs from 'qs'
export default {
    name: 'confirm',
    data() {
        return {
            pack_id: '',
            receiver: '',
            phone: '',
            showArea: false,
            areaList: areaList,
        }
    },
    methods: {
        onSubmit(value) {
            console.log(this.pack_id);
            console.log(value.province + ' ' + value.city + ' ' + value.county + ' ' + value.addressDetail);
            this.$axios.put('api/redemptions', qs.stringify({
                'pack_id': this.pack_id,
                'receiver': value.name,
                'phone': value.tel,
                'address': value.province + ' ' + value.city + ' ' + value.county + ' ' + value.addressDetail
            })).then(res => {
                console.log(res.data);
                let { message, data, code } = res.data;
                if (code == 200) {
                    this.$dialog.alert({ 'message': message }).then(() => {
                        this.$router.push({ name: 'Profile' })
                    })
                }
            })

        },
        onConfirmArea() {

        },
        onClickLeft() {
            this.$router.go(-1)
        }
    },
    created() {
        this.pack_id = this.$route.params.pack_id
    }
}

</script>

<style>
.confirm-container {
    /* margin: 10px 20px 10px 20px; */
}

.confirm-detail {
    margin-top: 10px;
}

.my-swipe .van-swipe-item {
    color: #fff;
    /* font-size: 20px; */
    /* line-height: 100px;
    width: 150px; */
    text-align: center;
    background-color: #39a9ed;
}
</style>