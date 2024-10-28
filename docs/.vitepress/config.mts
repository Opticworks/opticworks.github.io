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
          { text: 'Luatri', items: [
            {text: 'Before You Buy', link: '/luatri/before-you-buy'},
            {text: 'Setting up', link: '/luatri/setting-up'},
            {text: 'Interior culling', link: '/luatri/interior-culling'},
            {text: 'Particle culling', link: '/luatri/particle-culling'},
            {text: 'LODs', link: '/luatri/lods'},
            {text: 'Distance fading', link: '/luatri/distance-fading'},
            {text: 'Tree LODs', link: '/luatri/tree-lods'},
            {text: "Do's and Don'ts", link: '/luatri/dos-and-donts'}
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
