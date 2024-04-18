import { defineConfig } from 'vitepress'
import nav from './nav.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "源文档",
  description: "知识总结及工作总结",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aklry' }
    ]
  }
})
