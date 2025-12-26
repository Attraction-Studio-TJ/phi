<template>
  <article class="max-w-3xl mx-auto px-6 py-24">
    <h1 class="text-4xl font-serif mb-6">
      {{ post.title }}
    </h1>

    <p class="text-sm text-gray-500 mb-12">
      {{ post.date }}
    </p>

    <ContentRenderer :value="post" />
  </article>
</template>

<script setup>
  const article = await $content('blog', route.params.slug).fetch()

const route = useRoute()

const { data: post } = await useAsyncData(() =>
  queryContent(route.path).findOne()
)
</script>
