import { defineConfig } from 'vitepress'
import { zh } from './zh'
import { en } from './en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ThreeAuto",
  rewrites: {
    'zh/:rest*': ':rest*'
  },
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
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/flowers-10/three-auto' }
    ]
  }
})
