<template>
  <transition name="dialog-fade">
    <!-- 对话框的遮罩，self代表只有点击自己才触发 -->
    <div class="xm-dialog_wrapper" v-if="visible" @click.self="handleClose">
      <div class="xm-dialog" :style="{width, marginTop: top}">
        <div class="xm-dialog_header">
            <slot name="title">
                <!-- 将span放在slot内，这样不仅可以定义title文本，还可以定义样式等 -->
                <span class="xm-dialog_title">{{ title }}</span>
            </slot>
          <button class="xm-dialog_headerbtn" @click="handleClose">
            <i class="xm-icon-cuowu"></i>
          </button>
        </div>
        <div class="xm-dialog_body">
            <slot></slot>
        </div>
        <div class="xm-dialog_footer">
            <!-- 如果footer不传递内容，则不显示footer -->
          <slot name="footer" v-if="$slots.footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
    name: 'XmDialog',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '50%'
        },
        top: {
            type: String,
            default: '15vh'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
            console.log('我是关闭')
            this.$emit('update:visible', false)
        }
    }
}
</script>
<style lang="scss" scoped>
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
// scoped会给当前组件的模版中的所有的元素都添加一个随机的属性
// scoped会给当前组件中所有的样式  页添加一个对应的属性选择器
.xm-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .xm-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .xm-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .xm-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        outline: nxm;
        border: 1px solid #fff;
        cursor: pointer;
        font-size: 16px;
        .xm-icon-cuowu{
          color:#606266
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .xm-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
</style>