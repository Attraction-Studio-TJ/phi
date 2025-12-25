<template>
  <div class="relative min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <div class="relative min-h-screen flex items-center justify-center">
      <!-- Background Images -->
      <div class="absolute inset-0 flex">
        <NuxtImg
          src="~/assets/phi-woman.webp"
          alt="Hero left"
          class="w-1/2 h-full object-cover"
          width="800"
          height="1200"
        />
        <NuxtImg
          src="~/assets/phi-zulmaury-saavedra.webp"
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
</template>

<script setup>
// No imports needed unless you add components
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  letter-spacing: -0.02em;
}
</style>
