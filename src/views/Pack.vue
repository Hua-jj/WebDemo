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
        <van-notice-bar left-icon="volume-o" :text="'本次活动兑换起讫时间为'+activity.start_time+'至'+activity.expired_time" />
        <van-swipe class="my-swipe" :autoplay="0"  @change="packChange">
            <van-swipe-item v-for="pack in packs" :key="pack">
                <van-image :src="pack.image" height="250" fit="contain" />
            </van-swipe-item>
        </van-swipe>
        <van-divider>清单详情</van-divider>
        <van-cell-group class="choice-detail">
            <van-cell style="white-space:pre-wrap;" :title="currentPack.name" :value="'剩余：' + currentPack.num + '件'" :label="currentPack.description"
                size="large" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit" @click="selectPack" :disabled="currentPack.num<=0">
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
            activity_id: '',
            activity: '',
        }
    },
    computed: {

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
        },
        getPack() {
            return this.$axios.get('api/packs')
        },
        getActivity() {
            return this.$axios.get('api/activities', {
                    params: {
                        'index': this.activity_id
                    }
                })
        }
    },
    filters: {
        leftNumber(value) {
            return "剩余：" + value + "件";
        },
        formatterDescription(val) {
            return val.replace(';', '\n')
        },
    },
    created() {
        this.activity_id = this.$route.params.activity_id
        console.log(this.activity_id);
        this.$axios.all([this.getPack(), this.getActivity()]).then(this.$axios.spread((res1, res2)=> {
            // console.log(res1, res2);
            this.packs = res1.data.data;
            this.packs.forEach(element => {
                element['description'] = element['description'].replace(';/g', "<br />")
                element['description'] = element['description'].replace('；/g', "<br />")
            });
            this.currentPack = this.packs[0];
            
            this.activity = res2.data.data;
            console.log(this.activity);
        }))
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
    /* color: #fff; */
    /* font-size: 20px; */
    /* line-height: 100px;
    width: 150px; */
    text-align: center;
    /* background-color: #39a9ed; */
}
</style>