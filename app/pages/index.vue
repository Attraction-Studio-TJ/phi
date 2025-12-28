<template>
  <div class="relative min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <div class="relative min-h-screen flex items-center justify-center">
      <!-- Background Images -->
      <div class="absolute inset-0 flex">
        <NuxtImg
          src="/assets/phi-woman.webp"
          alt="Hero left"
          class="w-1/2 h-full object-cover"
          width="800"
          height="1200"
        />
        <NuxtImg
          src="/assets/phi-zulmaury-saavedra.webp"
          alt="Hero right"
          class="w-1/2 h-full object-cover"
          width="800"
          height="1200"
        />
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center mx-auto">
        <h1 class="!text-5xl md:text-6xl lg:text-8xl text-white font-serif leading-tight mb-6">
          Skincare stripped<br />
          back to the essentials.
        </h1>

        <p class="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          A blend of wild-harvested botanicals and adaptogenic ingredients to<br />
          cleanse, nourish, and protect — disrupting your skin's natural rhythm.
        </p>

        <button
          class="bg-[#D4C5A0] hover:bg-[#C4B590] mt-8 text-gray-800 px-8 py-3 rounded-full text-sm tracking-wider uppercase transition-colors font-medium"
        >
          Start Your Ritual
        </button>
      </div>
    </div>
  </div>

  <!-- new product carousel -->

  <section class="bg-[#f9f1ea] py-16 md:py-24">
    <div class="mx-auto">
      <!-- Header -->
      <div class="flex items-center gap-4 ml-8 mb-10 md:mb-14">
        <span class="w-3 h-3 rounded-full bg-[#2b201a]"></span>
        <h2 class="text-2xl md:text-3xl font-light tracking-wide text-[#2b201a]">
          best sellers
        </h2>
        <button
          class="ml-4 text-2xl md:text-3xl font-light tracking-wide text-[#b7a9a0] hover:text-[#2b201a] transition-colors"
        >
          sets
        </button>
      </div>

      <!-- Products grid -->
      <div
        class="grid grid-cols-2 lg:grid-cols-4 border-t border-[#f0dfd2] text-center text-sm md:text-base"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="border-r last:border-r-0 border-[#f0dfd2] px-4 md:px-8 py-10 flex flex-col items-center"
        >
          <!-- Category / Tag -->
          <div class="w-full text-left mb-10 text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-[#4e4f58]">
            <span class="block">{{ product.tagTop }}</span>
            <span v-if="product.tagBottom" class="block">{{ product.tagBottom }}</span>
          </div>

          <!-- Product image -->
          <div class="h-40 md:h-56 flex items-center justify-center mb-8">
            <img
              :src="product.image"
              :alt="product.name"
              class="max-h-full object-contain"
            />
          </div>

          <!-- Name -->
          <p class="text-xs md:text-sm text-[#444] mb-1">
            {{ product.name }}
          </p>

          <!-- Price -->
          <div class="flex items-center justify-center gap-2 text-xs md:text-sm">
            <span class="text-[#2b201a]">
              {{ product.price }}
            </span>
            <span
              v-if="product.previousPrice"
              class="text-[#b7a9a0] line-through"
            >
              {{ product.previousPrice }}
            </span>
          </div>
        </div>
      </div>

      <!-- Slider indicator -->
      <div class="mt-10 flex justify-center">
        <div class="w-24 h-[2px] bg-[#e1d1c3] relative">
          <span class="absolute left-1/2 -translate-x-1/2 w-10 h-[2px] bg-[#2b201a]"></span>
        </div>
      </div>
    </div>
  </section>



</template>

<script setup lang="ts">
const products = [
  {
    id: 1,
    tagTop: 'ILLUMINATE',
    tagBottom: '',
    name: 'C-Boost',
    price: '€39,00',
    previousPrice: '',
    image: '/assets/c-boost.png',
  },
  {
    id: 2,
    tagTop: 'UNIFY',
    tagBottom: 'TIGHTEN PORES',
    name: 'Unifying serum spray',
    price: '€34,00',
    previousPrice: '',
    image: '/assets/polish.png',
  },
  {
    id: 3,
    tagTop: 'NATURAL GLOW',
    tagBottom: '',
    name: 'Super glow set',
    price: '€82,00',
    previousPrice: '€98,00',
    image: '/assets/spotless.png',
  },
  {
    id: 4,
    tagTop: 'PROTECT',
    tagBottom: 'ILLUMINATE',
    name: 'Radiance day oil',
    price: '€69,00',
    previousPrice: '',
    image: '/assets/luminous.png',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  letter-spacing: -0.02em;
}
</style>
