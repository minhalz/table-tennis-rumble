<script setup>
import useGameStore from '@/stores/useGameStore'
const game = useGameStore()
</script>
<template>
    <ul class="absolute top-0 right-0 left-0 flex justify-center lg:justify-end">
        <li>
            <NuxtLink class="icon-button" to="/settings" @click="game.reset()">
                <img class="w-[60px]" src="/icons/settings.svg" />
            </NuxtLink>
        </li>
        <li>
            <button class="icon-button" @click="game.reset()">
                <img class="w-[60px]" src="/icons/reset.svg" />
            </button>
        </li>
    </ul>
</template>
