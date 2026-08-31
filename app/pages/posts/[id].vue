<template>
    <div class="posts-id-page">
        this id posts/[id].vue
        {{ route.params.id }}
    </div>
</template>

<script setup lang="ts">

const route = useRoute()



</script>

<style scoped>

.posts-id-page {
    background-color: darkcyan;
}

</style>