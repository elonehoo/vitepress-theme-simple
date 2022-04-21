<template>
  <div class="antialiased">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" :aria-label="Layout.iconTitle">
          <img
            class="inline-block mr-2"
            style="width: 36px; height: 31px"
            alt="logo"
            src="../../public/logo.svg"
          />
          <span v-if="isIndex === 'other'" class="hidden md:inline">{{Layout.homeTitle}}</span>
        </a>
        <div class="text-sm text-gray-500 leading-5">
          <a
            class="hover:text-gray-700"
            href="/"
            >me </a
          >
          <span class="mr-2 ml-2">·</span>
          <a class="hover:text-gray-700" href="/blog.html">blog</a>
          <span class="mr-2 ml-2">·</span>
          <a class="hover:text-gray-700" href="/projects.html">projects </a>
          <span class="mr-2 ml-2">·</span>
          <a
            class="hover:text-gray-700"
            :href="Layout.GitHubLink"
            target="_blank"
            rel="noopener"
            >GitHub →</a
          >
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Me v-if="isIndex === 'me'" />
      <Home v-else-if="isIndex === 'blog'" />
      <Projects v-else-if="isIndex === 'projects'" />
      <Article v-else />
    </main>
  </div>
</template>

<script setup>
import { computed,ref } from 'vue'
import { useRoute } from 'vitepress'
import {Layout} from '../../config.json'
import Me from "./Me.vue"
import Home from './Home.vue'
import Projects from "./Projects.vue"
import Article from './Article.vue'

const route = useRoute()
const isIndex = computed(() =>
  route.path.replace(/index.html$/, '')==='/' ? 'me' :
  route.path.replace(/index.html$/, '') === '/blog.html' ? 'blog' :
  route.path.replace(/index.html$/, '') === '/projects.html' ? 'projects' :
  'other'

)
</script>
