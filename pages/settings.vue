<script setup>
import useGameStore from '@/stores/useGameStore'
useHead({
    title: 'Settings - Table Tennis Rumble',
})
definePageMeta({
    layout: 'glass',
})
const game = useGameStore()
</script>
<template>
    <div>
        <h1 class="text-4xl md:text-5xl font-semibold mb-4">Settings</h1>
        <Setting v-model.number="game.pointsToWin" label="Score to win" min="3" max="21" />
        <Setting v-model.number="game.servesPerPlayerPref" label="Serves Per Player" min="1" max="5" />
        <NuxtLink class="btn btn-white inline-block w-full sm:w-1/2 md:max-w-[200px] mt-4" to="/game">Start</NuxtLink>
    </div>
</template>
