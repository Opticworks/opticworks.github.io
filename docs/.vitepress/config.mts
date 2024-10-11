import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Opticworks",
  description: "The documentation page for Opticworks stuff",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'Getting started', link: '/getting-started' },
          { text: 'VisTools', link: '/vistools' },
          { text: 'ASSETone', link: '/assetone' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opticworks' },
      { icon: 'discord', link: 'https://discord.gg/TS8CXeV6FK'}
    ]
  }
})
