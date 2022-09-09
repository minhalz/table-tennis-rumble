<script setup>
import useGameStore from '@/stores/useGameStore'
useHead({
    title: 'Settings - Table Tennis Rumble',
})
definePageMeta({
    key: 'Settings',
})
const game = useGameStore()
</script>
<template>
    <div class="px-4 w-full flex items-center justify-center">
        <div class="glass p-5 sm:p-10 text-white text-center w-[670px] max-w-full">
            <h1 class="text-4xl md:text-5xl font-semibold mb-4">Settings</h1>
            <Setting v-model.number="game.pointsToWin" label="Score to win" min="3" max="21" />
            <Setting v-model.number="game.servesPerPlayerPref" label="Serves Per Player" min="1" max="5" />
            <NuxtLink class="btn btn-white inline-block w-full sm:w-1/2 md:max-w-[200px] mt-4" to="/game"
            >Start</NuxtLink
            >
        </div>
    </div>
</template>
