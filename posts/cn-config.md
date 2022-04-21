---
title: 自定义配置
date: 2022-04-15
author: Simple Blog
twitter: '@huchengye'
---

基于 [Vitepress](https://vitepress.docschina.org/) 的简单主题博客模板。

使用了最简单的主题样式，完成功能较为齐全的博客模板，

- 拥有自定义的 About 页面
- 拥有简单的 Blog 页面
- 拥有简单的 Project 页面

---

## 介绍

使用 [Vitepress](https://vitepress.docschina.org/) 的简单主题博客模板。

## 实例

[个人实例](https://elonehoo.xyz)

你现在所看到的就是这个博客的样子。如果你喜欢可以继续阅读该文档。将这个主题配置成为你的博客。

## 源码

- [GitHub](https://github.com/elonehoo/vitepress-theme-simple)

## 下载项目 & 安装依赖

```bash
# 安装
git clone git@github.com:elonehoo/vitepress-theme-simple.git

# 进入项目目录
cd vitepress-theme-simple

# 安装依赖
pnpm install
```

## 修改配置

### 修改`config.ts`

```ts
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
```

#### base

如果你需要将这个项目放到 `username.github.io` 这个仓库下，则不需要更改。

如果需要将这个项目放到另外的仓库，则需要将 `base` 选项修改成仓库的名称即可。

#### title

网站的标题。所有页面的标题都会有这个后缀。

#### description

站点的描述。这将在 HTML 页面中呈现为 <meta> 标记。

### 修改logo

Lgoo 尽量选择使用SVG作为 Logo 的文件类型，`logo.svg` 存放在 public 文件下，修改这个文件就可以修改该博客的图标。

### 修改 About 页面

```markdown
---
englishName: your english name
organizeLink: your github organize link
organizeName: your github organize name
githubLink: your github link
speakLanguage: your speak language
languageName: your language name
languagePronunciation: you language name pronunciation
title: About
---
```

如果有更好的设计或者更好的模板供你选择，可以直接修改 `.vitepress/theme/Me.vue` 文件的代码。

### 修改 Projects 页面

这个是我比较满意的页面之一，所以提前说明，如果有更好的想法，可以直接修改 `.vitepress/theme/Projects.vue` 文件的代码。

#### 添加项目

可以在 `projects.md` 中添加属于你的项目，例如

```markdown
projects:
  project groups name:
    - name: 'your project name'
      link: 'your project link'
      desc: 'your project description'
      icon: 'your project icon'
```

#### 添加项目图标

在 `.vitepress/theme/icon/` 下增加一个图标的 `*.vue` 文件，实例如下

```vue
<template>
<svg t="1649992137654" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3794" width="48" height="48"><path d="M554.666667 725.333333v-85.333333h-85.333334v85.333333h85.333334zM532.48 366.037333a64 64 0 0 0-83.114667 47.445334l-83.498666-17.578667A149.333333 149.333333 0 1 1 554.666667 569.770667V597.333333h-85.333334v-64a42.666667 42.666667 0 0 1 42.666667-42.666666 64 64 0 0 0 20.48-124.629334z" p-id="3795"></path><path d="M682.666667 85.333333l213.333333 213.333334v597.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h512zM213.333333 853.333333h597.333334V341.333333h-170.666667V170.666667H213.333333v682.666666z" p-id="3796"></path></svg>
</template>
```

然后在 `.vitepress/theme/projects.vue` 中增加图标

1. 首先在 `<script setup></script>` 中引入图标 `import Simple from './icon/Simple.vue' `

2. 然后在第37行增加一行代码 ` <IconName v-else-if="item.icon === 'your project icon'" class="text-4xl opacity-50" /> `

即可完成引入新的图标。

### 增加博客

#### 修改博客样式

如果你有这个需求，那么可以直接修改 `.vitepress/theme/Article.vue` 文件修改样式

要是需要修改类似作者和时间的样式可以直接修改 `.vitepress/theme/Author.vue` 和 `.vitepress/theme/Date.vue`。

#### 添加博客

在 `posts` 目录下增加一个 `md` 文件，切记命名不可以是中文。

在 `md` 文件的开头，例如

```markdown
---
title: this blog title
date: this blog date
author: this blog author
twitter: 'this blog author twitter'
---

this blog description

---

content
```

便会渲染成为

![set1.png](../public/cn-config/set1.png)

内容便会渲染成为

![set2.png](../public/cn-config/set2.png)

### 细节

现在只需要修改`config.json`的内容即可完成某些细节的处理。

如果有其他的细节没有修改到，可以提出 [`issue`](https://github.com/elonehoo/vitepress-theme-simple/issues)

## 部署

在GitHub上部署，在这个项目已经成为了各位完全不用考虑的事情, 在 `.github/workflows/build.yml` 中修改一行代码，在第 30 行 将 `simple.elonehoo.xyz` 改成你的域名就可以了。
