<template>
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
      <div class="flex justify-center mb-80">
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
