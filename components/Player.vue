<script setup>
const { player, serving } = defineProps(['player', 'serving'])
</script>
<template>
    <div class="w-1/2">
        <div class="inline-block relative">
            <img v-if="serving" class="absolute block -top-10 -right-28 w-[120px] max-w-none" src="/icons/serve.svg" />
            <button class="p-5 text-8xl lg:text-9xl font-bold" @click="$emit('addPoint')">{{ player.points }}</button>
        </div>
        <p class="text-xl">{{ player.rule }}</p>
    </div>
</template>
