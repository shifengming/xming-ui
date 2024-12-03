<template>
  <div class="xm-switch" :class="{'is-checked': value}" @click="handleClick">
    <input class="xm-switch_input" type="checkbox" :name="name" ref="input">
    <span class="xm-switch_core" ref="core">
      <span class="xm-switch_button"></span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'XmSwitch',
  props: {
    value: {
        type: Boolean,
        default: false
    },
    activeColor: {
        type: String,
        default: ''
    },
    inactiveColor: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    }
  },
  methods: {
    async handleClick() {
        this.$emit('input', !this.value)
        // 点击的时候，还需要修改背景颜色
        // 需要等待value发生了改变，在setColor
        // 等待数据修改后，等待DOM更新，在修改按钮的颜色
        await this.$nextTick()
        this.setColor()
    },
    setColor() {
        // 修改开关的颜色
        if (this.activeColor || this.inactiveColor) {
            var color = !this.value ? this.activeColor : this.inactiveColor
            console.log(color)
            this.$refs.core.style.borderColor = color
            this.$refs.core.style.backgroundColor = color
        }
        this.$refs.input.checked = this.value
        console.log(this.$refs.input.checked, 'check')
    }
  },
  mounted() {
    this.setColor()
  }
}
</script>
<style lang="scss" scoped>
  .xm-switch{
        display: inline-block;
        align-items: center;
        position: relative;
        font-size: 14px;
        line-height: 20px;
        vertical-align: middle;
        .xm-switch_input {
            position: absolute;
            width: 0;
            height: 0;
            opacity: 0;
            margin: 0;
        }

    .xm-switch_core{
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s,background-color .3s;
        vertical-align: middle;
    .xm-switch_button{
        position:absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
      }
    }
  }
    // 选中样式
  .is-checked {
    .xm-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .xm-switch_button {
        transform: translateX(20px);
      }
    }
  }
</style>
 