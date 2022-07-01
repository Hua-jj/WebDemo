<!--
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-28 12:55:36
 * @LastEditTime: 2022-07-01 20:46:03
 * @FilePath: /WebDemo/src/views/Confirm.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
-->
<template>
    <div class="confirm-container">
        <van-nav-bar title="确认订单信息" left-text="返回" left-arrow @click-left="onClickLeft" />
        <van-cell-group>
            <van-cell>
                <template v-slot:label>
                    <div v-for="item in pack.items">
                        <span style="display: block;">{{ item }}</span>
                    </div>
                </template>
                <template v-slot:value>
                    <van-tag type="primary" size="medium" plain>{{ pack.name }}</van-tag>
                </template>
                <template v-slot:title>
                    <van-icon name="gift-o" /> 礼包详情
                </template>
            </van-cell>
        </van-cell-group>

        <van-divider>收件信息</van-divider>
        <van-form @submit="onSubmit">
            <van-address-edit :area-list="areaList" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSubmit"
                save-button-text="提交订单" detail-maxlength="100" />
        </van-form>
    </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import qs from "qs";
export default {
    name: "confirm",
    data() {
        return {
            pack_id: "",
            pack: "",
            receiver: "",
            phone: "",
            showArea: false,
            areaList: areaList,
        };
    },
    methods: {
        onSubmit(value) {
            console.log(this.pack_id);
            console.log(
                value.province +
                " " +
                value.city +
                " " +
                value.county +
                " " +
                value.addressDetail
            );
            this.$dialog.confirm({
                title: '提示',
                message: '请确认订单信息，提交后无法更改。'
            }).then(() => {
                // on confirm
                this.$axios
                    .put(
                        "api/redemptions",
                        qs.stringify({
                            pack_id: this.pack_id,
                            receiver: value.name,
                            phone: value.tel,
                            address:
                                value.province +
                                " " +
                                value.city +
                                " " +
                                value.county +
                                " " +
                                value.addressDetail,
                        })
                    )
                    .then((res) => {
                        console.log(res.data);
                        let { message, data, code } = res.data;
                        if (code == 200) {
                            this.$dialog.alert({ message: message }).then(() => {
                                this.$router.push({ name: "Profile" });
                            });
                        } else {
                            this.$dialog.alert({ message: message });
                        }
                    });
            }).catch(() => {
                // on cancel
            })

        },
        onConfirmArea() { },
        onClickLeft() {
            this.$router.go(-1);
        },
    },
    created() {
        this.pack_id = this.$route.params.pack_id;
        this.$axios.get('api/packs', {
            params: {
                'pack_id': this.pack_id
            }
        }).then(res => {
            let { message, data, code } = res.data;
            console.log(data);
            this.pack = data;
            this.pack.description = this.pack.description.replaceAll(";", "；")
            // this.pack.description = this.pack.description.replaceAll('；', "\n")
            this.pack.items = this.pack.description.split("；")
            console.log(this.pack.items);
        })
    },
};
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