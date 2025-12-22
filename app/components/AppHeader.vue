<template>
    
    <nav class="absolute top-0 left-0 right-0 z-50 px-8 py-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <a href="#" class="text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase">Shop</a>
          <a href="#" class="text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase">Our Story</a>
          <a href="#" class="text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase">Blog</a>
        </div>
        
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <NuxtImg src="/assets/phi-logo.webp" alt="" />
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

</template>