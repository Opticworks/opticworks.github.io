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
          { text: 'VisTools', items: [
            {text: 'Setting up', link: '/vistools/setting-up'},
            {text: 'Interior culling', link: '/vistools/interior-culling'},
            {text: 'Particle culling', link: '/vistools/particle-culling'},
            {text: 'LODs', link: '/vistools/lods'},
            {text: 'Distance fading', link: '/vistools/distance-fading'},
            {text: 'Tree LODs', link: '/vistools/tree-lods'},
            {text: "Do's and Don'ts", link: '/vistools/dos-and-donts'}
          ]},
          { text: 'DevTools', items: [
            {text: 'Setting up', link: '/devtools/setting-up'},
            {text: 'Functions', link: '/devtools/functions'},
            {text: 'Customizing', link: '/devtools/customizing'},
            {text: 'Errors & Warns', link: '/devtools/errors-and-warns'}
          ]},
          { text: 'ASSETone', link: '/assetone' },
          { text: 'Credits & Special Thanks', link: '/credits'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opticworks' },
      { icon: 'discord', link: 'https://discord.gg/TS8CXeV6FK'}
    ],

    search: {
      provider: 'local'
    }
  }
})
