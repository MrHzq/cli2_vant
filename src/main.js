import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import hzqAxios from 'hzq-axios'
import hzqTool from 'hzq-tool'
import './components/global'
import { Toast, Lazyload } from 'vant'

Vue.use(hzqTool, { router })

Vue.use(Toast).use(Lazyload)

Vue.prototype.$toast = Toast

const isTest = process.env.PATH_ENV === 'test'
console.log('isTest：' + isTest)

Vue.use(hzqAxios, require.context('@/apiurl', true, /\.js$/), {
    baseURL: '/api',
    // 请求拦截之前
    beforeRequest(config) {
        console.log(config)
        return config
    },
    // 接口响应成功事件
    respSuccess(res) {
        console.log(res)
    },
    // 接口响应失败事件
    respError(e) {
        console.log(e)
        if (e.response && e.response.data) {
            if (typeof e.response.data === 'object') {
                if (e.response.data.Code === 401) {
                    Toast('权限错误，请稍后再试！')
                } else Toast(e.response.data.Toast)
            } else Toast('网络错误，请稍后再试！')
        } else Toast('网络错误，请稍后再试！')
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
