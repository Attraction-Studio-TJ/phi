<template>
  <div class="border-b border-gray-100 pb-8">
    <div class="h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
      <NuxtImg 
        v-if="image"
        :src="image" 
        :alt="title || 'Blog post image'"
        class="w-full h-full object-cover"
        width="400"
        height="200"
        loading="lazy"
      />
      <div v-else class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
    </div>
    <div v-if="date" class="text-sm text-gray-500 mb-2">{{ formatDate(date) }}</div>
    <h3 v-if="title" class="text-xl font-serif font-normal text-gray-900 mb-3">{{ title }}</h3>
    <p v-if="excerpt" class="text-gray-600 mb-4">{{ excerpt }}</p>
    <NuxtLink v-if="slug" :to="`/blog/${slug}`" class="text-[#D4C5A0] hover:text-[#C4B590] text-sm font-medium">
      Read More →
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  excerpt: {
    type: String,
    default: ''
  },
  slug: {
    type: String,
    default: ''
  }
});

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
</script>
