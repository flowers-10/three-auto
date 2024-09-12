import { defineConfig } from 'vitepress'
import { zh } from './zh'
import { en } from './en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ThreeAuto",
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  locales: {
    root: {
      label: '简体中文',
      ...zh
    },
    en: {
      label: 'English',
      ...en
    },
  },
  head: [
    ['link', { rel: 'icon',  href: '/three-auto.ico' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'quickly generate a Three.js scene' }],
    ['meta', { property: 'og:site_name', content: 'three-auto' }],
    ['meta', { property: 'og:url', content: '' }],
  ],

  themeConfig: {
    logo: { src: '/three-auto.png', width: 24, height: 24 },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/flowers-10/three-auto' }
    ]
  },
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  }
})
