<template>
  <div class="relative min-h-screen bg-gray-100">
    <!-- Navigation -->
    <nav class="absolute top-0 left-0 right-0 z-50 px-8 py-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <a href="#" class="text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase">Shop</a>
          <a href="#" class="text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase">Our Story</a>
          <a href="#" class="text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase">Blog</a>
        </div>
        
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <h1 class="text-2xl tracking-[0.3em] text-white font-light uppercase">Terrais</h1>
        </div>
        
        <div class="flex items-center space-x-6">
          <button class="text-white/90 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button class="text-white/90 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative min-h-screen flex items-center justify-center">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="/assets/phi-woman.webp" 
          alt="Hero background" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl lg:text-7xl text-white font-serif leading-tight mb-6">
          Skincare stripped<br />
          back to the essentials.
        </h1>
        
        <p class="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          A blend of wild-harvested botanicals and adaptogenic ingredients to<br />
          cleanse, nourish, and protect — disrupting your skin's natural rhythm.
        </p>
        
        <button class="bg-[#D4C5A0] hover:bg-[#C4B590] text-gray-800 px-8 py-3 rounded-full text-sm tracking-wider uppercase transition-colors font-medium">
          Start Your Ritual
        </button>
      </div>
    </div>
  </div>

  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
// Add any component logic here
</script>

<style scoped>
/* Import a serif font similar to the design */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');

h2 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  letter-spacing: -0.02em;
}
</style>