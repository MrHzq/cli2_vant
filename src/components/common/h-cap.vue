/*
 * @Author: hzq
 * @Date: 2019-04-03 15:25:57
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-29 17:22:31
 * @文件说明: 仅用于间隔的
 */
<template>
    <div :style="style" />
</template>

<script>
    export default {
        name: 'h-cap',
        inheritAttrs: false,
        props: {
            height: {
                type: [String, Number],
                default: 10
            }
        },
        computed: {
            style() {
                return {
                    height: this.$tool.rem(this.height)
                }
            }
        }
    }
</script>
<style lang="scss" scoped></style>
