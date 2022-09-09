<script setup>
definePageMeta({
    key: 'Home',
})
</script>
<template>
    <div class="px-4 w-full flex items-center justify-center">
        <div class="glass p-5 sm:p-10 text-white text-center w-[670px] max-w-full">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Table Tennis Rumble</h1>
            <p class="text-xl mb-6 md:mb-10">Table tennis with randomness!</p>
            <ul class="flex flex-wrap justify-center">
                <li class="inline-block px-2 w-full sm:w-1/2 md:max-w-[200px] mb-4 sm:mb-0">
                    <NuxtLink class="btn btn-white block" to="/game">Start</NuxtLink>
                </li>
                <li class="inline-block px-2 w-full sm:w-1/2 md:max-w-[200px]">
                    <NuxtLink class="btn btn-white-outline block" to="/settings">Settings</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
