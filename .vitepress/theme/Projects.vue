<template>
  <div class="divide-y divide-gray-200">

    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="
          text-3xl
          leading-9
          font-extrabold
          text-gray-900
          tracking-tight
          sm:text-4xl sm:leading-10
          md:text-6xl md:leading-14
        "
      >
        {{ $frontmatter.title }}
      </h1>
      <p class="text-lg leading-7 text-gray-500">
        {{ $frontmatter.subtext }}
      </p>
    </div>

    <div>
      <template v-for="key in Object.keys($frontmatter.projects)" :key="key">
        <h4 class="mt-10 font-bold">
          {{ key }}
        </h4>
        <div class="project-grid py-2 -mx-3 gap-2">
          <a
            v-for="item, idx in $frontmatter.projects[key]"
            :key="idx"
            class="item relative flex items-center"
            :href="item.link"
            target="_blank"
            :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
          >
            <div v-if="item.icon" class="pt-2 pr-5">
              <Simple v-if="item.icon === 'simple'" class="text-4xl opacity-50" />
              <Unknown v-else class="text-4xl opacity-50" />
            </div>
            <div class="flex-auto">
              <div cla ss="text-normal">{{ item.name }}</div>
              <div class="desc text-sm opacity-50 font-normal" v-html="item.desc" />
            </div>
          </a>
        </div>
      </template>
    </div>

    <div>
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script setup>
import Simple from './icon/Simple.vue'
import Unknown from './icon/Unknown.vue'

</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.project-grid a.item {
  padding: 0.8em 1em;
  background: transparent;
  font-size: 1.1rem;
}
.project-grid a.item:hover {
  background: #88888808;
}
</style>
