<template>
    <div class="about-page">
        this is pages/about.vue
             <div class="test-css">test-css</div>

    </div>
</template>

<script setup lang="ts">

definePageMeta({
    pageTransition: {
        name: 'rotate'
    }
})

</script>

<style scoped>

.about-page {
    background-color: darkblue;
}

</style>