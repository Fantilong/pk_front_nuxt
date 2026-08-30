<template>
   <div class="h1">helloe nuxt</div>
    <AppAlert name="画板备份 9">his is an auto-imported component.</AppAlert>
    <!-- <img src="/img/画板备份 9.png" alt=""> -->
    <!-- <img src="~/assets/img/画板备份 8.png" alt="" srcset=""> -->
     <img :src="imgUrl" alt="" srcset="">
</template>

<script lang="ts" setup>
// const runtimeConfig = useRuntimeConfig()

// console.log('runtimeConfig', runtimeConfig);

const light = () => import('./assets/img/画板备份 8.png?url')

const images = import.meta.glob<string>('../assets/img/*.{png,jpg,svg}', {
  query: '?url',
  import: 'default',
})


async function getImageUrl (name: string) {
  const load = images[`../assets/img/${name}.png`]

  if (!load) {
    throw new Error(`Unknown image: ${name}`)
  }

  return await load()
}

const imgUrl = (await getImageUrl('画板备份 8'))





</script>
