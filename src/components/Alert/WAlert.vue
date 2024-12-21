<template>
    <div
        :class="['alert', type]"
        :style="{ backgroundColor }"
    >
        <slot />
        <button
            v-if="dismissible"
            class="close"
            @click="onClose"
        >
            &times;
        </button>
        <span v-if="icon" class="icon"></span>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, ref } from 'vue';

const props = defineProps({
    primary: { type: Boolean, default: false },
    size: { type: String, default: 'medium' },
    backgroundColor: { type: String, default: '' },
    closable: { type: Boolean, default: false },
    type: { type: String, default: 'info' },
    dismissible: { type: Boolean, default: false },
    timeout: { type: Number, default: 0 },
    icon: { type: Boolean, default: false },
});

const emit = defineEmits(['close']);

const onClose = () => {
    emit('close');
};

if (props.timeout > 0) {
    onMounted(() => {
        setTimeout(onClose, props.timeout);
    });
}
</script>

<style scoped>
.alert {
    padding: 1rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    position: relative;
}
.close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}
.icon {
    margin-right: 0.5rem;
}
.alert.info {
    background-color: #d9edf7;
    color: #31708f;
}
.alert.success {
    background-color: #dff0d8;
    color: #3c763d;
}
.alert.warning {
    background-color: #fcf8e3;
    color: #8a6d3b;
}
.alert.error {
    background-color: #f2dede;
    color: #a94442;
}
</style>