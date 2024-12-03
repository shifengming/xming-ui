// 整个包的入口
// 定义install方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import './fonts/iconfont.css'
import Vue from 'vue'

const components = [
    Button,
    Dialog,
    Input,
    Checkbox,
    Radio,
    RadioGroup,
    Switch,
    CheckboxGroup,
    Form,
    FormItem
]

const [XmButton, XmInput, XmDialog, XmCheckbox, XmRadio, XmRadioGroup, XmSwitch, XmCheckboxGroup, XmForm, XmFormItem ] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
XmButton.install = Vue => Vue.component(Button.name, Button)
XmInput.install = Vue => Vue.component(Input.name, Input)
XmDialog.install = Vue => Vue.component(Dialog.name, Dialog)
XmCheckbox.install = Vue => Vue.component(Checkbox.name, Checkbox)
XmRadio.install = Vue => Vue.component(Radio.name, Radio)
XmRadioGroup.install = Vue => Vue.component(RadioGroup.name, RadioGroup)
XmSwitch.install = Vue => Vue.component(Switch.name, Switch)
XmCheckboxGroup.install = Vue => Vue.component(CheckboxGroup.name, CheckboxGroup)
XmForm.install = Vue => Vue.component(Form.name, Form)
XmFormItem.install = Vue => Vue.component(FormItem.name, FormItem)
export {
    XmButton,
    XmInput,
    XmDialog,
    XmCheckbox,
    XmRadio,
    XmRadioGroup,
    XmSwitch,
    XmCheckboxGroup,
    XmForm,
    XmFormItem
}

const install = function (vue, options) {
    if (options && options.components) {
        // 按需注册组件，把用户注册的组件和定义的组件进行一个对比
        // 如果是相同的，就进行注册这个组件
        const xmComponents = options.components
        xmComponents.forEach((itemName) => {
            components.forEach((item) => {
                if (itemName === item.name) {
                    Vue.component(item.name, item)
                }
            })
        })
    } else {
        // 全局注册所有的组件
        components.forEach((item) => {
            Vue.component(item.name, item)
        })
    }
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}

