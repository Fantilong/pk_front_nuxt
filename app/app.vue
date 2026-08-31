<template>
  <Head>
      <Title>{{ title }}</Title>
      <Meta
        name="description"
        :content="title"
      />
      <Style>
        body { background-color: green; }
      </Style>
    </Head>
  <div class="app">
    this is app.vue
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>

const title = ref('Hello World')


</script>