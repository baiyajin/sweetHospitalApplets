<template>
    <view class="hintContent" v-if="hintContent">
        {{hintContent}}
    </view>
</template>

<script>
    export default {
        computed: {
            hintContent: {
                get () {
                    return this.$store.state.hintContent
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .hintContent {
        width: auto;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        border-radius: 10px;
        font-size: 16px;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        bottom: 5%;
        z-index: 9999;
        text-align: center;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>
