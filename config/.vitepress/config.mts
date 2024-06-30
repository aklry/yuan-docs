import { defineConfig } from 'vitepress'
import nav from './nav/index.mjs'
import sidebar from "./sidebar/index.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "源文档",
  description: "知识总结及工作总结",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aklry' }
    ],
    footer: {
      copyright: 'Copyright © 2024-present aklry | <a href="http://beian.miit.gov.cn">粤ICP备2024244039号</a>',
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/site.png' } ]
  ]
})
