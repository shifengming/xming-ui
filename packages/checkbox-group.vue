<template>
  <div class="xm-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'XmCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>