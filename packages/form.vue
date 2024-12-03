<template>
    <div class="xm-form">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'XmForm',
    props: {
        model: {
            type: Object,
            required: true
        },
        // label的宽度
        labelWidth: {
            type: String,
            default: '80px'
        }
    },
    provide() {
        return {
            Form: this
        }
    },
}
</script>