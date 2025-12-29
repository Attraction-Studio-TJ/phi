<template>
  <section class="relative mx-auto max-w-4xl px-6 py-12">
    <div class="mb-8">
      <h2 class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Latest Posts</h2>
      <p class="mt-2 text-neutral-600 dark:text-neutral-300">Hand-picked articles for you</p>
    </div>

    <!-- Tag filter bar -->
    <div class="mb-6 pl-12 sm:pl-16">
      <div class="flex items-center gap-2 overflow-x-auto">
        <button
          class="inline-flex items-center rounded-full border border-neutral-200/60 dark:border-white/10 bg-neutral-50/70 dark:bg-neutral-800/70 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
          @click="clearTags"
          :aria-pressed="selectedTags.length === 0"
        >
          All
        </button>
        <button
          v-for="tag in allTags"
          :key="'filter-' + tag"
          class="inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
          :class="isSelected(tag)
            ? 'border-primary-500/30 text-primary-700 dark:text-primary-300 bg-primary-50/70 dark:bg-primary-400/10'
            : 'border-neutral-200/60 dark:border-white/10 text-neutral-700 dark:text-neutral-200 bg-neutral-50/70 dark:bg-neutral-800/70 hover:bg-white dark:hover:bg-neutral-800'"
          @click="toggleTag(tag)"
          :aria-pressed="isSelected(tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <div class="relative">
      <!-- Left-edge vertical marquee -->
      <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-12 overflow-hidden">
        <div class="marquee__inner">
          <div v-for="n in 12" :key="'marquee-top-' + n" class="marquee__item">
            <span class="text-[10px] text-nowrap sm:text-xs font-semibold tracking-widest text-neutral-400 dark:text-neutral-500"> My Posts * My Posts * </span>
          </div>
          <!-- duplicate sequence for seamless loop -->
          <div v-for="n in 12" :key="'marquee-bottom-' + n" class="marquee__item">
            <span class="text-[10px] text-nowrap sm:text-xs font-semibold tracking-widest text-neutral-400 dark:text-neutral-500"> My Posts * My Posts * </span>
          </div>
        </div>
      </div>

      <!-- Stacked list with left padding so it doesn't overlap the marquee -->
      <TransitionGroup name="list" tag="ul" class="space-y-3 overflow-visible pl-12 sm:pl-16">
        <li v-for="post in filteredPosts" :key="post.slug" class="relative overflow-visible">
          <NuxtLink
            :to="post.href"
            class="group block border-b border-neutral-200/60 dark:border-white/10"
          >
            <!-- Floating image preview -->
            <div
              class="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[65%] opacity-0 scale-95 transform-gpu transition-all duration-500 ease-out sm:group-hover:opacity-100 sm:group-hover:translate-y-[-75%] sm:group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:translate-y-[-75%] group-focus-visible:scale-100"
            >
              <NuxtImg
                :src="post.image"
                :alt="post.title"
                format="webp"
                sizes="sm:80vw md:60vw lg:720px"
                class="absolute top-0 left-1/2 -translate-x-1/2 aspect-square w-[78vw] max-w-[420px] rounded-2xl object-cover shadow-2xl ring-1 ring-black/5 dark:ring-white/10"
              />
            </div>

          <!-- Card content -->
          <div class="relative z-10 p-5 sm:p-6">
            <div class="mb-3 flex flex-wrap gap-2">
              <button
                v-for="cat in post.categories"
                :key="cat"
                type="button"
                @click.stop="toggleTag(cat)"
                @keydown.enter.prevent.stop="toggleTag(cat)"
                @keydown.space.prevent.stop="toggleTag(cat)"
                :aria-pressed="isSelected(cat)"
                class="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-colors"
                :class="isSelected(cat)
                  ? 'border-primary-500/30 text-primary-700 dark:text-primary-300 bg-primary-50/70 dark:bg-primary-400/10'
                  : 'border-neutral-200/70 dark:border-white/10 bg-neutral-50/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-200 hover:bg-white dark:hover:bg-neutral-800'"
              >
                {{ cat }}
              </button>
            </div>

            <h3 class="text-base sm:text-lg font-semibold text-neutral-900 ">
              {{ post.title }}
            </h3>
            <p class="mt-2 line-clamp-2 sm:line-clamp-3 text-sm text-neutral-600 dark:text-neutral-300">
              {{ post.excerpt }}
            </p>

            <div class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400">
              Read more
              <Icon name="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </NuxtLink>
      </li>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PostItem {
  slug: string
  title: string
  excerpt: string
  image: string
  categories: string[]
  href: string
}

const posts: PostItem[] = [
  {
    slug: 'design-systems-2025',
    title: 'Design Systems in 2025: What Changed',
    excerpt: 'A quick tour through the latest patterns and tools transforming how teams ship consistent UI at scale.',
    image: '/images/camera.webp',
    categories: ['Design', 'Systems'],
    href: '/blog/design-systems-2025'
  },
  {
    slug: 'nuxt-image-perf',
    title: 'Nuxt Image: Performance Wins You Can Feel',
    excerpt: 'Leverage automatic format selection, smart sizes, and lazy loading to drastically cut LCP on media-heavy pages.',
    image: '/images/grid.png',
    categories: ['Nuxt', 'Performance'],
    href: '/blog/nuxt-image-performance'
  },
  {
    slug: 'tailwind-recipes',
    title: 'Tailwind Recipes: Modern Card UIs',
    excerpt: 'Practical snippets for building modern, responsive card layouts with accessibility and polish.',
    image: '/images/text.png',
    categories: ['Tailwind', 'UI'],
    href: '/blog/tailwind-card-recipes'
  },
  {
    slug: 'content-strategy',
    title: 'Content Strategy for Product Teams',
    excerpt: 'How product and content can partner to ship features that resonate and convert.',
    image: '/images/grid.png',
    categories: ['Product', 'Content'],
    href: '/blog/content-strategy-product'
  },
  {
    slug: 'web-animations',
    title: 'Smoother Web Animations with CSS',
    excerpt: 'Use modern CSS features to create animations that feel natural without tanking performance.',
    image: '/images/text.png',
    categories: ['CSS', 'Motion'],
    href: '/blog/css-animations-smooth'
  },
  {
    slug: 'state-management',
    title: 'Lightweight State Management Patterns',
    excerpt: 'When you don’t need a giant library—simple patterns that scale well in real apps.',
    image: '/images/camera.webp',
    categories: ['Architecture', 'JavaScript'],
    href: '/blog/state-management-patterns'
  }
]

// Tag filtering logic
const selectedTags = ref<string[]>([])
const allTags = computed(() => Array.from(new Set(posts.flatMap(p => p.categories))).sort())
const isSelected = (tag: string) => selectedTags.value.includes(tag)
const toggleTag = (tag: string) => {
  const i = selectedTags.value.indexOf(tag)
  if (i >= 0) selectedTags.value.splice(i, 1)
  else selectedTags.value.push(tag)
}
const clearTags = () => { selectedTags.value = [] }

// OR-match: post shows if ANY selected tag matches. Switch to AND by using `every` instead of `some`.
const filteredPosts = computed(() => {
  if (selectedTags.value.length === 0) return posts
  return posts.filter(p => selectedTags.value.some(t => p.categories.includes(t)))
})
</script>

<style scoped>
@keyframes marqueeY {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

.marquee__inner {
  position: absolute;
  inset: 0 auto 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;
  animation: marqueeY 18s linear infinite;
}

.marquee__item {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  opacity: 0.8;
}

/* Smooth list filtering transitions */
.list-enter-active,
.list-leave-active {
  transition: all 250ms ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}
.list-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.list-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}
.list-move {
  transition: transform 250ms ease;
}
</style>
