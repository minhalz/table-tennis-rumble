<script setup>
defineEmits(['update:modelValue'])
const { modelValue, label, min, max } = defineProps(['modelValue', 'label', 'min', 'max'])
</script>
<template>
    <div>
        <p class="text-xl mb-0">{{ label }}</p>
        <input
            :value="modelValue"
            type="range"
            class="appearance-none w-full h-0.5 bg-grey rounded outline-none slider-thumb"
            :min="min"
            :max="max"
            step="1"
            @input="$emit('update:modelValue', $event.target.value)"
            @change="$emit('update:modelValue', $event.target.value)"
        />
        {{ modelValue }}
    </div>
</template>
