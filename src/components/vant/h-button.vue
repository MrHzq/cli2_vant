/*
 * @Author: hzq
 * @Date: 2019-01-25 10:01:21
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-29 17:16:27
 * @文件说明: 基于van-button封装的按钮
 */
<template>
    <van-button :style="style" v-bind="$attrs" class="h-button" v-on="listeners">
        <slot />
    </van-button>
</template>

<script>
    import { Button } from 'vant'
    export default {
        inheritAttrs: false,
        components: { [Button.name]: Button },
        props: {
            // 按钮宽度
            width: {
                type: String,
                default: '80'
            },
            // 按钮高度
            height: {
                type: String,
                default: '24'
            },
            // 按钮跳转链接
            to: {
                type: String,
                default: ''
            }
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    click: () => {
                        if (this.to) this.$to(this.to)
                        this.$emit('click')
                    }
                }
            },
            style() {
                return {
                    height: this.$tool.rem(this.height),
                    width: this.$tool.rem(this.width)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .h-button {
        @extend .cursor;
        padding: 0;
        line-height: initial;
    }
    .van-button--default {
        color: #fff;
    }
    .disabled {
        color: #fff;
        background-color: #d9d9d9 !important;
        border-color: #d9d9d9 !important;
    }
</style>
