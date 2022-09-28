import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'canvas-ui/Vue',
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/...' },
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
