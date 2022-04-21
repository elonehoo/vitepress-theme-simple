---
englishName: Simple Blog
organizeLink: https://github.com/elonehoo
organizeName: Elone Hoo
githubLink: https://github.com/elonehoo
speakLanguage: Chinese
languageName: 简单博客
languagePronunciation: Jiǎn dān bó kè
title: About
---

  <h1>Hello.</h1>
  <p style="font-weight: 500; font-size: 2.2em">My name is {{$frontmatter.englishName}}.</p>
  <p>
    I am an student programmer and the founder of
    <a :href="$frontmatter.organizeLink" target="_blank">{{$frontmatter.organizeName}}</a>  Open Source Community. Most of my work is open source and publicly available on
    <a :href="$frontmatter.githubLink" target="_blank">GitHub</a>.
  </p>
  <p>
    If you happen to speak {{$frontmatter.speakLanguage}}, my {{$frontmatter.speakLanguage}} name is {{$frontmatter.languageName}} ({{$frontmatter.languagePronunciation}}).
  </p>
  <p>
    Outside of programming and finish school and get a job, I enjoy video games.
  </p>


<style scoped>
  h1 {
        font-size: 4.5em;
        font-weight: 500;
        margin-bottom: 0;
  }
  p {
        font-size: 1.6em;
        font-weight: 300;
        line-height: 1.4;
        max-width: 28em;
  }
  a {
        text-decoration: none;
        color: #121314;
        position: relative;
  }
  a:after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 60%;
        left: -0.1em;
        right: -0.1em;
        bottom: 0;
        transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
        background-color: rgba(79, 192, 141, 0.5);
  }
  a:hover:after {
        top: 0%;
  }
</style>
