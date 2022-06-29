<!--
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-28 12:55:36
 * @LastEditTime: 2022-06-29 22:02:11
 * @FilePath: /WebDemo/src/views/Pack.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
-->
<template>
    <div class="choice-container">
        <van-nav-bar title="选择礼盒" left-text="返回" left-arrow @click-left="onClickLeft" />
        <van-notice-bar left-icon="volume-o" :text="'本次活动兑换起讫时间为'+'2022-07-01'+'至'+'2022-12-02'" />

        <van-swipe class="my-swipe" :autoplay="0" indicator-color="white" @change="packChange">
            <van-swipe-item v-for="pack in packs" :key="pack">
                <van-image :src="pack.image" height="250" fit="contain" />
            </van-swipe-item>
        </van-swipe>
        <van-divider>清单详情</van-divider>
        <van-cell-group class="choice-detail">
            <van-cell :title="currentPack.name" :value="'剩余：' + currentPack.num + '件'" :label="currentPack.description"
                size="large" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit" @click="selectPack">
                选择
            </van-button>
        </div>

    </div>

</template>

<script>

export default {
    name: 'Pack',
    data() {
        return {
            packs: [],
            currentPack: {},
        }
    },
    methods: {
        packChange(index) {
            // this.$toast('当前 Swipe 索引：' + index);
            this.currentPack = this.packs[index];
            console.log(this.currentPack);
        },
        selectPack() {
            this.$router.push({ name: 'Confirm', params: { 'pack_id': this.currentPack.index } })
        },
        onClickLeft() {
            this.$router.go(-1)
        }
    },
    filters: {
        leftNumber(value) {
            return "剩余：" + str(value) + "件";
        }
    },
    created() {
        this.$axios.get('api/packs', {
        }).then(res => {
            let { message, data, code } = res.data;
            console.log(res.data);
            if (code == 200) {
                this.packs = data;
                this.currentPack = data[0]
            }
        })
    }
}

</script>

<style>
.choice-container {
    /* margin: 10px 20px 10px 20px; */
}

.choice-detail {
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