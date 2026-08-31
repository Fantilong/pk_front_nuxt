<template>
   <div class="h1">helloe nuxt</div>
    <AppAlert name="画板备份 9">his is an auto-imported component.</AppAlert>
    <!-- <img src="/img/画板备份 9.png" alt=""> -->
    <!-- <img src="~/assets/img/画板备份 8.png" alt="" srcset=""> -->
     <img :src="imgUrl" alt="" srcset="">


     <div class="test-css">test-css</div>
     <div class="test-css-1">test-css-1</div>
     <div class="test-css-2">test-css-2</div>

     <h1 class="animate__animated animate__bounce">An animated element</h1>

     <div class="content">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
     </div>
</template>

<script lang="ts" setup>
// import 'animate.css'

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

useHead({
  link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }],
})


const color = ref('blue')


// definePageMeta({
//   middleware: (to, form) => {

//   },
//   validate(route) {
//     return false
//   },
// })


const description = ref('这是一个description')

useHead({
  title: 'My App',
  meta: [
    {name: 'description', content: description}
  ]
})

// useSeoMeta({
//   title: 'My Amazing Site',
//   ogTitle: 'My Amazing Site',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })


</script>


<style lang="scss">
.test-css-2 {
  color: v-bind(color)
}

.content {
  width: 100px;
  height: 100px;
  background-color: darkblue;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .item{
    width: 20px;
    height: 20px;
    background-color: darkcyan;
  }
}


  
</style>