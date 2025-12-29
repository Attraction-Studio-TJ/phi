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
        <h2 class="text-4xl md:text-5xl font-serif font-light text-[#2b201a] mb-6">
              Best Sellers
            </h2>
      
      </div>

      <!-- Products grid -->
      <div
        class="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[#f0dfd2] text-center text-sm md:text-base"
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


<!-- what we bring section -->

  <section class="bg-[#f9f1ea] py-16 md:py-24">
    <div class="mx-auto px-6 md:px-12">
      <div class="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
        <!-- Left Content -->
        <div class="space-y-12 flex flex-col justify-between h-full">
          <div>
            <h2 class="text-4xl md:text-5xl font-serif font-light text-[#2b201a] mb-6">
              What We Bring
            </h2>
          </div>

          <!-- Icon -->
          <div class="flex items-center">
            <svg class="w-16 h-16" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="4" fill="#2b201a"/>
              <circle cx="32" cy="16" r="4" fill="#2b201a"/>
              <circle cx="32" cy="48" r="4" fill="#2b201a"/>
              <circle cx="16" cy="32" r="4" fill="#2b201a"/>
              <circle cx="48" cy="32" r="4" fill="#2b201a"/>
            </svg>
          </div>

        </div>

        <!-- Centre Content -->
<div class="flex flex-col justify-between h-full space-y-12">

  <!-- Top Paragraph -->
  <div>
    <p class="text-[#4a4a4a] leading-relaxed max-w-md">
      Improve your skin barrier function using a unique combination of clinical strength ingredients essential to the role of skin health.
    </p>
  </div>

  <!-- Features List (bottom) -->
  <div class="space-y-4 max-w-md">
    <div
      v-for="(feature, index) in features"
      :key="index"
      class="flex items-center gap-4 pb-3 border-b border-[#d4c5b8]"
    >
      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#2b201a] text-white text-xs flex items-center justify-center font-medium">
        {{ index + 1 }}
      </span>
      <span class="text-[#4a4a4a] text-sm md:text-base">
        {{ feature }}
      </span>
    </div>
  </div>

</div>


        <!-- Right Image -->
        <div class="lg:mt-0">
          <img
            src="/assets/warm-skincare.jpg"
            alt="Cocktail glass"
            class="w-full h-auto object-cover rounded-sm shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>



  <!-- about us -->
   <section class="relative bg-[#333333] py-16 md:py-44 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 opacity-60">
      <img
        src="/assets/skin-closeup.jpg"
        alt="Background"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Decorative line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-white/20"></div>

    <div class="relative z-10 mx-auto px-6 md:px-12">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left Content -->
        <div class="text-white">
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 leading-tight">
            About us
          </h2>
          <p class="text-white/90 leading-relaxed max-w-lg text-sm md:text-base">
            Phi Cosmeceutical is a boutique skincare company who work alongside a leading medical, surgical and cosmetic dermatology practice in Christchurch, New Zealand. Phi Cosmeceutical recognises that caring for your skin can be a bit overwhelming due to the abundance of products on the market which are associated with sometimes confusing beauty claims. 
          </p>
        </div>

        <!-- Right Content -->
        <div class="space-y-8">
          <!-- Features List -->
          <div class="space-y-4">
            <div
              v-for="(item, index) in aboutFeatures"
              :key="index"
              class="flex items-start gap-4"
            >
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-white text-[#3d5a6b] text-xs flex items-center justify-center font-medium mt-0.5">
                {{ index + 1 }}
              </span>
              <span class="text-white/90 text-sm md:text-base">
                {{ item }}
              </span>
            </div>
          </div>

          <!-- Decorative line -->
          <div class="w-full h-px bg-white/20 my-8"></div>

          <!-- CTA Button -->
          <div>
            <button class="px-8 py-3 border border-white/40 rounded-full text-white text-sm tracking-wide hover:bg-white/10 transition-colors">
              Learn more about us
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom decorative line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
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

const features = [
  'Guaranteed Results',
  'No parabens, artificial dyes or fragrances',
  'Results-driven',
  'High quality ingredients',
  'Optimal outcomes',
]

const aboutFeatures = [
  'Active ingredients',
  'Made in New Zealand',
  'Active ingredients',
  'Fix the underline issues',
  'No parabens, artificial dyes or fragrances',
]

</script>

