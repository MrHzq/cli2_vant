/*
 * @Author: hzq
 * @Date: 2019-07-24 14:47:24
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-29 17:22:25
 * @文件说明: van-image重新封装
 */
<template>
    <van-image :src="cSrc" :width="cWidth" :height="cHeight" :fit="fit" :lazy-load="lazyLoad" v-bind="$attrs" v-on="listeners" />
</template>

<script>
    import { Image } from 'vant'
    export default {
        name: 'h-image',
        inheritAttrs: false,
        components: { [Image.name]: Image },
        props: {
            // 图片链接
            src: {
                type: String,
                default: 'logo'
            },
            // 宽度
            width: {
                type: String,
                default: '44'
            },
            // 高度
            height: {
                type: String,
                default: '44'
            },
            // 图片填充模式
            fit: {
                type: String,
                default: 'cover'
            },
            // 是否要懒加载
            lazyLoad: {
                type: Boolean,
                default: true
            },
            // 图片src是否要加上isosshost
            isosshost: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            listeners() {
                return { ...this.$listeners }
            },
            cSrc() {
                let src = ''
                if (['logo'].includes(this.src)) {
                    src = require('@/assets/logo.png')
                } else {
                    src = this.src
                    if (this.isosshost) {
                        src = `${
                            this.$osshost
                        }${src}?x-oss-process=image/resize,w_${this.width *
                            2}/format,jpg/quality,Q_80`
                    }
                }
                return src
            },
            cWidth() {
                return this.$tool.rem(this.width)
            },
            cHeight() {
                return this.$tool.rem(this.height)
            }
        }
    }
</script>
