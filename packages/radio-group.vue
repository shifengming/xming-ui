<template>
    <div class="xm-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'XmRadioGroup',
  provide() {
    return {
        RadioGroup: this
    }
  },
  props: {
    // xm-radio-group接收到了value值
    // 将来还需要触发 当前组件的input事件
    // provide 与 inject  用来做祖孙之间的组件通讯
    value: null
  }
}
</script>