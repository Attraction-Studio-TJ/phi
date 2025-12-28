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


<!-- what we bring section -->

  <section class="bg-[#f9f1ea] py-16 md:py-24">
    <div class="mx-auto px-6 md:px-12">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Left Content -->
        <div class="space-y-12">
          <div>
            <h2 class="text-4xl md:text-5xl font-serif font-light text-[#2b201a] mb-6">
              What We Bring
            </h2>
            <p class="text-[#4a4a4a] leading-relaxed max-w-md">
              We craft impactful strategies, bold and innovative designs, and compelling brand messages to help businesses grow, connect with their audience, and stand out in an increasingly competitive market.
            </p>
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

          <!-- Features List -->
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
   <section class="relative bg-[#333333] py-16 md:py-24 overflow-hidden">
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
            We are a team of passionate creatives, strategists, and innovators dedicated to transforming brands with bold ideas and impactful solutions.
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

  <!-- footer design -->


  <footer class="bg-[#2d3a36] text-white py-16 md:py-20">
    <div class="mx-auto px-6 md:px-12">
      <!-- Top Section -->
      <div class="grid md:grid-cols-2 gap-12 mb-16">
        <!-- Left Navigation -->
        <nav class="space-y-4">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="block text-2xl md:text-3xl font-serif font-light tracking-wide hover:text-white/70 transition-colors group"
          >
            {{ link.name }}
            <sup v-if="link.count" class="text-xs ml-1 text-white/60">{{ link.count }}</sup>
          </a>
        </nav>

        <!-- Right Contact -->
        <div class="text-right space-y-3">
          <div class="text-xs tracking-widest text-white/60 uppercase mb-2">
            Email
          </div>
          <a
            href="mailto:hello@phicosmeceutical.co.nz"
            class="text-sm md:text-base hover:text-white/70 transition-colors"
          >
            hello@phicosmeceutical.co.nz
          </a>
          
          <div class="mt-8 space-y-2">
            <a
              href="#"
              class="flex items-center justify-end gap-2 text-sm hover:text-white/70 transition-colors group"
            >
              <span>IG</span>
              <svg class="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="#"
              class="flex items-center justify-end gap-2 text-sm hover:text-white/70 transition-colors group"
            >
              <span>TT</span>
              <svg class="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="flex justify-center mb-20">
        <form class="relative w-full max-w-md group">
          <input
            type="email"
            placeholder="Join our newsletter"
            class="w-full bg-transparent border-b border-white/30 py-3 px-1 text-white/60 placeholder:text-white/40 placeholder:italic focus:outline-none focus:border-white/60 transition-colors text-sm md:text-base"
          />
          <button
            type="submit"
            class="absolute right-0 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>

      <!-- Bottom Section -->
      <div class="grid md:grid-cols-3 gap-8 items-end text-xs md:text-sm">
        <!-- Left - Tagline -->
        <div class="space-y-1">
          <p class="text-white/70 uppercase tracking-wide">All rights reserved</p>
          <p class="text-white/50">© PHI COSMECEUTICAL</p>
        </div>

        <!-- Center - Language/Currency -->
        <div class="flex justify-center gap-4 text-white/60">
          <button class="hover:text-white transition-colors">
            <span class="font-serif italic">₹₹</span>
          </button>
          <span class="text-white/30">:</span>
          <button class="hover:text-white transition-colors">
            <span class="font-serif italic">₹₹</span>
          </button>
          <span class="text-white/30">:</span>
          <button class="hover:text-white transition-colors">
            <span class="font-serif italic">μ</span>
          </button>
        </div>

        <!-- Right - Legal Links -->
        <div class="flex justify-end gap-6 text-white/60">
          <a href="#" class="hover:text-white transition-colors underline underline-offset-4">
            PURCHASE FAQS
          </a>
          <a href="#" class="hover:text-white transition-colors underline underline-offset-4">
            TERMS & CONDITIONS
          </a>
          <a href="#" class="hover:text-white transition-colors underline underline-offset-4">
            PRIVACY POLICY
          </a>
        </div>
      </div>
    </div>
  </footer>



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
  'Time Efficiency',
  'Competitive Edge',
  'Market Adaptability',
  'Lasting Impact',
]

const aboutFeatures = [
  'Years of expertise in branding',
  'Strategies customized to your needs',
  'Fresh and innovative ideas',
  'Focused on measurable success',
  'A smooth and transparent process',
]

const navLinks = [
  { name: 'COLLECTIONS', href: '#collections', count: '04' },
  { name: 'SHOP', href: '#shop', count: '28' },
  { name: 'OUR STORY', href: '#story', count: null },
  { name: 'CONTACT', href: '#contact', count: null },
]

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  letter-spacing: -0.02em;
}

a, button {
  font-family: 'Cormorant Garamond', serif;
}

nav a {
  font-weight: 300;
  letter-spacing: 0.02em;
}
</style>
