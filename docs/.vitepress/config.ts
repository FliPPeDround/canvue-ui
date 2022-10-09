import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'canvas-ui/Vue',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
    ],
    socialLinks: [
      { icon: 'github', link: '/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
    ],
  },
})
