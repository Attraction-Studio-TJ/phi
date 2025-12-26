<template>
  <div class="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Blog Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-serif font-normal text-gray-900 mb-4">The PHI Journal</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">Discover the latest in clean beauty, skincare rituals, and wellness insights from our experts.</p>
      </div>

      <!-- Featured Post -->
      <div class="mb-16">
        <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
          <NuxtImg 
            src="/assets/phi-woman.webp" 
            alt="Featured Post"
            class="w-full h-96 object-cover"
          />
          <div class="p-8">
            <div class="text-sm text-gray-500 mb-2">October 15, 2023</div>
            <h2 class="text-2xl font-serif font-normal text-gray-900 mb-4">The Art of Minimalist Skincare</h2>
            <p class="text-gray-600 mb-6">In a world of 10-step routines, discover why less is more when it comes to healthy, glowing skin. Our experts break down the essential steps for a simplified yet effective skincare ritual.</p>
            <NuxtLink to="/blog/the-art-of-minimalist-skincare" class="text-[#D4C5A0] hover:text-[#C4B590] font-medium">
              Read More →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Blog Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Blog Post 1 -->
      

        <!-- Blog Post 2 -->
        <BlogCard
        v-for="article in articles"
        :key="article.slug"
        :title="article.title"
        :excerpt="article.description"
        :date="article.date"
        :slug="article.slug"
        :image="article.image"
      />
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogCard from '~/components/BlogCard.vue'
</script>