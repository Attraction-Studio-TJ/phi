<template>
  <section class="news-section section-news relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      <!-- Left: Sticky headline -->
      <div class="lg:col-span-5">
        <div class="lg:sticky lg:top-28">
          <p class="text-[10px] tracking-[0.2em] text-neutral-500 uppercase mb-4">News</p>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight uppercase text-neutral-900 dark:text-white">
            EVERY DAY, WE MAKE PEOPLE'S LIVES BETTER
          </h2>
        </div>
      </div>

      <!-- Right: Scroll-driven horizontally translating cards -->
      <div class="lg:col-span-7">
        <ul class="space-y-28">
          <li
            v-for="(item, i) in items"
            :key="item.slug"
            ref="rows"
            class="relative h-[60vh]"
            aria-label="news-card"
          >
            <!-- Sticky card that moves across as its row scrolls -->
            <article
              class="sticky top-24 z-10 will-change-transform"
              :style="{ transform: `translateX(${xOffsets[i]}%)` }"
            >
              <div class="max-w-3xl">
                <div class=" gap-6 sm:gap-8 bg-primary-50 dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl min-h-[220px] sm:min-h-[260px]">
                  <!-- Image, 35% of card -->
                  <div class="w-full h-[350px] hidden sm:block">
                    <img
                      :src="item.image"
                      :alt="item.title"
                      class="h-full w-full object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  <!-- Content, 65% of card -->
                  <div class="flex-1">
                    <div class="flex items-center gap-3 text-[11px] tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                      <span>{{ item.date }}</span>
                      <span class="size-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                      <span>{{ item.tagline }}</span>
                    </div>
                    <h3 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight">
                      {{ item.title }}
                    </h3>
                    <p class="mt-4 text-neutral-700 dark:text-neutral-300">
                      {{ item.excerpt }}
                    </p>
                    <NuxtLink :to="item.href" class="mt-6 inline-flex items-center gap-2 font-semibold text-primary-700 dark:text-primary-400">
                      MORE TO READ
                      <Icon name="mdi:arrow-right" class="size-4" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>

        <!-- CTA marquee similar to source -->
        <div class="relative mt-6 overflow-hidden">
          <div class="marquee inline-flex items-center gap-6 py-4">
            <template v-for="n in 18" :key="'marquee-'+n">
              <span class="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-neutral-400">MORE TO READ</span>
              <span class="size-1.5 rounded-full bg-neutral-300/70 dark:bg-neutral-700/70" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface NewsItem {
  slug: string
  title: string
  excerpt: string
  date: string
  href: string
  tagline: string
  image: string
}

// Dummy data (mirrors the referenced section's content style)
const items: NewsItem[] = [
  {
    slug: 'study-effectively',
    title: 'The key to mastering English lies in ... putting in the work.',
    excerpt: 'ALEXEY AND I HAVE BEEN WORKING TOGETHER SINCE FEB 2022... COMPLETE TRANSFORMATION.',
    date: '03 OCT. 2023',
    href: '/blog/study-effectively',
    tagline: 'Duck English',
    image: '/images/camera.webp'
  },
  {
    slug: 'hiring',
    title: 'We Are Hiring—Join The Duck Team!',
    excerpt: 'WE AIM TO CONQUER AND REVOLUTIONIZE THE EDUCATION FIELD. JOIN US!',
    date: '01 MAY. 2023',
    href: '/blog/we-are-hiring',
    tagline: 'Careers',
    image: '/images/grid.png'
  },
  {
    slug: 'a2-to-c1',
    title: 'From A2 to C1 in Just a Year and a Half',
    excerpt: 'EVEN WHEN THE GAPS WERE FILLING AND DOUBTS WERE FADING, I WANTED TANGIBLE PROOF.',
    date: '06 APR. 2023',
    href: '/blog/a2-to-c1',
    tagline: 'Success Story',
    image: '/images/text.png'
  },
  {
    slug: 'toward-c2',
    title: 'Toward C2',
    excerpt: "SO THRILLED WITH HOW MUCH MY ENGLISH IMPROVED THAT WORDS JUST CAN'T CAPTURE IT.",
    date: '11 JUN. 2023',
    href: '/blog/toward-c2',
    tagline: 'Milestone',
    image: '/images/camera.webp'
  }
]

// Refs for each row to compute per-row scroll progress
const rows = ref<HTMLElement[]>([])
// Each card's X offset in percent; start right and slide left as you scroll its row
const xOffsets = ref<number[]>(items.map(() => 25))

let ticking = false

const compute = () => {
  const vh = window.innerHeight || 1
  rows.value.forEach((el, i) => {
    if (!el) return
    const rect = el.getBoundingClientRect()
    // When row enters the viewport until it leaves, map progress 0..1
    const start = vh * 0.1 // a bit after entering
    const end = vh * 0.7   // before leaving
    const raw = (rect.top - start) / (end - rect.height)
    // Alternate: compute progress using center alignment
    const center = rect.top + rect.height / 2
    const p = 1 - clamp((center - vh * 0.15) / (vh * 0.9), 0, 1)
    // Lerp X from +25% (right) to -25% (left)
    const x = lerp(25, -25, p)
    xOffsets.value[i] = Math.round(x * 100) / 100
  })
}

const onScroll = () => {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(() => {
      compute()
      ticking = false
    })
  }
}

const onResize = () => compute()

onMounted(() => {
  compute()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})

function clamp(v: number, min: number, max: number) { return Math.min(max, Math.max(min, v)) }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t }
</script>

<style scoped>
/* Horizontal marquee like the source */
@keyframes marqueeX { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.marquee { min-width: 200%; white-space: nowrap; animation: marqueeX 22s linear infinite; }
</style>
