<template> 
    <AppHeader />
    <NuxtPage />
    <FooterSection />
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
import FooterSection from '~/components/FooterSection.vue'
</script>

<style scoped>
/* Import a serif font similar to the design */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  letter-spacing: -0.02em;
}
</style>
