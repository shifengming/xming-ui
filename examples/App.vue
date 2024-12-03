<template>
    <div id="app">
        <xm-button type="primary">按钮</xm-button>
        <xm-input placeholder="请输入密码" type="password" name="name" :disabled="true"></xm-input>
          <xm-checkbox-group v-model="hobby">
            <xm-checkbox label="苹果"></xm-checkbox>
            <xm-checkbox label="香蕉"></xm-checkbox>
            <xm-checkbox label="草莓"></xm-checkbox>
            <xm-checkbox label="梨子"></xm-checkbox>
            <xm-checkbox label="龙眼"></xm-checkbox>
        </xm-checkbox-group>
    </div>
</template>
<script>
export default {
  data() {
    return {  
      hobby: ['苹果','梨子']
    }
  }
}
</script>

