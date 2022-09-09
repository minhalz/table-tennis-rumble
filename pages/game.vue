<script setup>
import useGameStore from '@/stores/useGameStore'
const game = useGameStore()
useHead({
    title: 'Game - Table Tennis Rumble',
})
</script>
<template>
    <div class="text-white w-full text-center">
        <OptionsBar />
        <div class="flex flex-wrap portrait:hidden sm:portrait:flex">
            <Player :player="game.players[0]" :serving="game.servingPlayer === 0" @add-point="game.addPoint(0)" />
            <Player :player="game.players[1]" :serving="game.servingPlayer === 1" @add-point="game.addPoint(1)" />
            <div v-if="game.winner !== null" class="w-full absolute left-0 bottom-4 flex justify-center items-center">
                <p class="text-xl mr-5">{{ game.players[game.winner].name }} wins!</p>
                <button class="btn btn-white text-sm lg:text-xl" @click="game.reset()">Play again</button>
            </div>
        </div>
        <OrientationWarning />
    </div>
</template>
