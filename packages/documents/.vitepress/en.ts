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
            { text: 'Config', link: '/en/config/default' },
            { text: 'Examples', link: '/en/examples/markdown-examples' },
            {
                text: pkg.version, items: [
                    { text: 'Changelog', link: 'https://github.com/flowers-10/three-auto/releases' },
                    { text: 'Contributing', link: 'https://github.com/flowers-10/three-auto/graphs/contributors' },
                ]
            },
        ],

        sidebar: {
            '/en/docs/': [
                {
                    text: 'Introduction',
                    collapsed: false,
                    base: '/en/docs/',
                    items: [
                        { text: 'What is three-auto?', link: 'what-is-three-auto' },
                        { text: 'Getting Started', link: 'getting-started' },
                    ]
                },
                {
                    text: 'Core',
                    collapsed: false,
                    base: '/en/docs/',
                    items: [
                        {
                            text: 'Common Properties', link: 'three-instance'
                        },
                        {
                            text: 'General Methods', link: 'general-method'
                        }
                    ]
                },
                {
                    text: 'Components',
                    collapsed: false,
                    base: '/en/docs/components/',
                    items: [
                        { text: 'Animation', link: 'animation' },
                        {
                            text: 'Charts', base: '/en/docs/components/charts-', items: [
                                { text: 'Series', link: 'series' },
                                { text: 'Earth', link: 'earth' },
                                { text: 'Pie', link: 'pie' },
                                { text: 'Map3D', link: 'map3D' },
                                { text: 'Grid', link: 'grid' },
                            ]
                        },
                        { text: 'Lights', link: 'lights' },
                        { text: 'Environment', link: 'environment' },
                        { text: 'Resource', link: 'resource' },
                        {
                            text: 'Postprocessing', base: '/en/docs/components/postprocessing-', items: [
                                { text: 'MoebiusPass', link: 'moebius' },
                                { text: 'GTToneMap', link: 'gttoneMap' },
                                { text: 'Bloom', link: 'bloom' },

                            ]
                        },
                        {
                            text: 'Web', base: '/en/docs/components/web-', items: [
                                { text: 'Tips', link: 'tips' },
                                { text: 'Tooltip', link: 'tooltip' },
                            ]
                        },
                    ]
                },
            ],
            '/en/config/': [
                {
                    text: 'Config',
                    collapsed: false,
                    base: '/en/config/',
                    items: [
                        {
                            text: 'default', link: 'default'
                        },
                        {
                            text: 'size: {...}', link: 'size'
                        },
                        {
                            text: 'camera: {...}', link: 'camera'
                        },
                        {
                            text: 'renderer: {...}', link: 'renderer'
                        },
                        {
                            text: 'light: [{...}]', link: 'light'
                        },
                        {
                            text: 'shadow: {...}', link: 'shadow'
                        },
                        {
                            text: 'series: [{...}]',
                            collapsed: false,
                            base: 'en/config/series/',
                            items: [
                                {
                                    text: 'type:map', link: 'map'
                                },
                            ]
                        },
                        {
                            text: 'resource:[{...}]', link: 'resource'
                        },
                        {
                            text: 'postprocess: {...}', link: 'postprocess'
                        },
                    ]
                },
            ],
            '/en/examples/': [
                {
                    text: 'Examples',
                    base: '/en/examples',
                    items: [
                        { text: 'Markdown Examples', link: 'markdown-examples' },
                        { text: 'Runtime API Examples', link: 'api-examples' }
                    ]
                }
            ],

        },
        footer: {
            message: 'Released under the MIT License',
            copyright: `Copyright © 2019-${new Date().getFullYear()} Michela`
        },
        docFooter: {
            prev: 'Previous page',
            next: 'Next page'
        },
        outline: {
            label: 'Page navigation'
        },

        lastUpdated: {
            text: 'Last updated at',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        langMenuLabel: 'Multilingual',
        returnToTopLabel: 'Back to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle: 'Switch to dark mode'
    },
})