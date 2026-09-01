<template>
    <div class="about-page">
        this is pages/about.vue
             <div class="test-css">test-css</div>

                 <div class="counter"> {{ counter }}</div>


    </div>
</template>

<script setup lang="ts">

definePageMeta({
    pageTransition: {
        name: 'rotate'
    }
})

 const counter = useState('counter');

</script>

<style scoped>

.about-page {
    background-color: darkblue;
}

.counter {
    color: white ;
}

</style>