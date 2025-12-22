<template>
    <AppHeader />
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
        <div class="border-b border-gray-100 pb-8">
          <div class="h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
            <NuxtImg 
              src="/assets/phi-zulmaury-saavedra.webp" 
              alt="Blog Post 1"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-sm text-gray-500 mb-2">November 2, 2023</div>
          <h3 class="text-xl font-serif font-normal text-gray-900 mb-3">Understanding Your Skin's Natural Rhythm</h3>
          <p class="text-gray-600 mb-4">Learn how to work with your skin's natural circadian rhythm for optimal results from your skincare routine.</p>
          <NuxtLink to="/blog/skin-natural-rhythm" class="text-[#D4C5A0] hover:text-[#C4B590] text-sm font-medium">
            Read More →
          </NuxtLink>
        </div>

        <!-- Blog Post 2 -->
        <div class="border-b border-gray-100 pb-8">
          <div class="h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
            <div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
          <div class="text-sm text-gray-500 mb-2">November 10, 2023</div>
          <h3 class="text-xl font-serif font-normal text-gray-900 mb-3">The Power of Adaptogenic Ingredients</h3>
          <p class="text-gray-600 mb-4">Discover how adaptogens can help your skin better respond to stress and environmental aggressors.</p>
          <NuxtLink to="/blog/adaptogenic-ingredients" class="text-[#D4C5A0] hover:text-[#C4B590] text-sm font-medium">
            Read More →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can add any component logic here
useHead({
  title: 'Journal - PHI',
  meta: [
    { name: 'description', content: 'Discover the latest in clean beauty, skincare rituals, and wellness insights from PHI experts.' }
  ]
})
</script>
