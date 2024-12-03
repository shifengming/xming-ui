<template>
 <div class="xm-input" :class="{'xm-input_suffix': showSuffix}">
    <!-- placeholde配置默认的文字 -->
    <!-- type配置文本框的类型 -->
    <!-- disabled配置是否禁用 -->
    <!-- 配置name属性 -->
    <!-- value和input用于配置v-model的实现 -->

    <!-- 如果传了show-password，判断是否需要切换 密码的显示  如果不传  则不判断-->
   <input
    class="xm-input_inner"
    :class="{'is-disabled': disabled}"
    :placeholder="placeholder"
    :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
    :name="name"
    :disabled="disabled"
    :value="value"
    @input="handleInput"
   >
   <span class="xm-input_suffix" v-show="showSuffix">
      <i class="on-input_icon xm-icon-cuowu" v-if="clearable && value" @click="clear"></i>
      <i class="on-input_icon xm-icon-yanjing" v-if="showPassword && type=='password'" @click="handlePassword"
      :class="{'xm-icon-view-active': passwordVisible}"
      ></i>
    </span>
 </div>
</template>
<script>
export default {
  name: 'XmInput',
  components: {
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      passwordVisible: false // 显示是否显示密码框
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    clear() {
      // 把内容清空
      this.$emit('input', '')
    },
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>
<style lang="scss" scoped>
  .xm-input_suffix{
    .xm-input_inner{
      padding-right: 30px;
    }
    .xm-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .xm-icon-view-active {
        color: blue
      }
    }
  }

  .xm-input{
    width: 20%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .xm-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
 
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
</style>