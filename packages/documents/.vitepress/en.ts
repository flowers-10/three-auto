import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'
const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
    lang: 'en-Hans',
    description: "quickly generate a Three.js scene",
    themeConfig: {
        nav: [
            { text: 'Documents', link: '/en/docs/what-is-three-auto' },
            { text: 'options', link: '/docs/what-is-three-auto' },
            { text: 'Examples', link: '/en/examples/markdown-examples' },
            {
                text: pkg.version, items: [
                    { text: 'Changelog', link: 'https://github.com/flowers-10/three-auto/blob/main/README.md' },
                    { text: 'Contributing', link: 'https://github.com/flowers-10/three-auto/blob/main/README.md' },
                ]
            },
        ],

        sidebar: {
            '/en/docs/': [
                {
                    text: 'Introduction',
                    collapsed: false,
                    items: [
                        { text: 'What is three-auto?', link: '/en/docs/what-is-three-auto' },
                        { text: 'Getting Started', link: '/en/docs/getting-started' },
                    ]
                },
                {
                    text: 'Core',
                    collapsed: false,
                    items: [
                        { text: 'BaseThree', link: '/en/docs/docs' },
                        { text: 'ThreeInstance', link: '/docs/docs' },
                        { text: 'Resource', link: '/docs/docs' },
                        { text: 'Size', link: '/docs/docs' },
                        { text: 'Time', link: '/docs/docs' },
                        { text: 'Mousemove', link: '/docs/docs' },
                        { text: 'Raycaster', link: '/docs/docs' },
                        { text: 'EventEmitter', link: '/docs/docs' },
                    ]
                },
                {
                    text: 'Components',
                    collapsed: false,
                    items: [
                        { text: 'Animation', link: '/docs/docs' },
                        { text: 'Cameras', link: '/docs/docs' },
                        { text: 'Charts', link: '/docs/docs' },
                        { text: 'Lights', link: '/docs/docs' },
                        { text: 'Loading', link: '/docs/docs' },
                        { text: 'Postprocessing', link: '/docs/docs' },
                        { text: 'Renderers', link: '/docs/docs' },
                        { text: 'Web', link: '/docs/docs' },
                    ]
                },
                {
                    text: 'Config',
                    collapsed: false,
                    items: [
                        { text: 'Default Config', link: '/docs/docs' },
                        { text: 'loading Config', link: '/docs/docs' },
                    ]
                },
            ],
            '/en/examples/': [
                {
                    text: 'Examples',
                    items: [
                        { text: 'Markdown Examples', link: '/examples/markdown-examples' },
                        { text: 'Runtime API Examples', link: '/examples/api-examples' }
                    ]
                }
            ],

        },
        // footer: {
        //     message: '基于 MIT 许可发布',
        //     copyright: `版权所有 © 2019-${new Date().getFullYear()} Michela`
        // },
    },
})