import { defineConfig } from 'vitepress'

export default defineConfig({
  base:'/',
  title: 'Simple',
  description: "vitepress theme simple",
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/logo.svg'
      }
    ]
  ],
  vite: {
    build: {
      minify: 'terser'
    }
  }
})
