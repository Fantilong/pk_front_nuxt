<template>
    <div class="app-alert">
        <slot></slot>
        <img :src="imageUrl" alt="">

    </div>
</template>

<script setup lang="ts">
const props = defineProps<{name: string}>()

const imageUrl = computed(() => {
    return `/img/${props.name}.png`
})

</script>

<style scoped>

</style>