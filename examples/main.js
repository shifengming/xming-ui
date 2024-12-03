import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 全局导入
// import xming from '../packages'
// Vue.use(xming)

// 按需导入方案一
// import xming from '../packages'
// Vue.use(xming, {   // 按需导入
//     components: [
//         'XmButton',
//         'XmInput'
//     ]
// })

// 按需导入方案二
import { XmInput, XmButton, XmCheckbox, XmCheckboxGroup } from '../packages'
Vue.use(XmInput).use(XmButton).use(XmCheckbox).use(XmCheckboxGroup)



new Vue({
    render: h => h(App)
}).$mount('#app')