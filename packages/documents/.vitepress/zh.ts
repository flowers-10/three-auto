import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'
const require = createRequire(import.meta.url)

const pkg = require('vitepress/package.json')

export const zh = defineConfig({
    lang: 'zh-Hans',
    description: "快速生成3D场景",
    themeConfig: {
        nav: [
            { text: '文档', link: '/docs/what-is-three-auto' },
            { text: '配置项', link: '/config/default' },
            { text: '案例', link: '/examples/markdown-examples' },
            {
                text: pkg.version, items: [
                    { text: '更新日志', link: 'https://github.com/flowers-10/three-auto/blob/main/README.md' },
                    { text: '参与贡献', link: 'https://github.com/flowers-10/three-auto/blob/main/README.md' },
                ]
            },
        ],

        sidebar: {
            '/docs/': [
                {
                    text: '介绍',
                    collapsed: false,
                    base: '/docs/',
                    items: [
                        { text: '什么是three-auto?', link: 'what-is-three-auto' },
                        { text: '快速开始', link: 'getting-started' },
                    ]
                },
                {
                    text: '核心',
                    collapsed: false,
                    base: '/docs/',
                    items: [
                        {
                            text: '常用属性', link: 'three-instance'
                        },
                        {
                            text: '通用方法', link: 'general-method'
                        }
                    ]
                },
                {
                    text: '组件',
                    collapsed: false,
                    base: '/docs/components/',
                    items: [
                        { text: 'Animation 动画', link: 'animation' },
                        {
                            text: 'Charts 图表', base: '/docs/components/charts-', items: [
                                { text: 'Series 系列', link: 'series' },
                                { text: 'Earth 地球', link: 'earth' },
                                { text: 'Pie 饼图', link: 'pie' },
                                { text: 'Map3D 地图', link: 'map3D' },
                                { text: 'Grid 网格', link: 'grid' },
                            ]
                        },
                        { text: 'Lights 灯光', link: 'lights' },
                        { text: 'Environment 环境贴图', link: 'environment' },
                        { text: 'Resource 资源和加载器', link: 'resource' },
                        {
                            text: 'Postprocessing 后处理', base: '/docs/components/postprocessing-', items: [
                                { text: 'MoebiusPass 手绘风格', link: 'moebius' },
                                { text: 'GTToneMap 卡通风格', link: 'gttoneMap' },
                                { text: 'Bloom 辉光风格', link: 'bloom' },

                            ]
                        },
                        {
                            text: 'Web 浏览器', base: '/docs/components/web-', items: [
                                { text: 'Tips 标签', link: 'tips' },
                                { text: 'Tooltip 提示框', link: 'tooltip' },
                            ]
                        },
                    ]
                },
            ],
            '/config/': [
                {
                    text: '配置项',
                    collapsed: false,
                    base: '/config/',
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
                            base: 'config/series/',
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
            '/examples/': [
                {
                    text: '案例',
                    base: '/examples',
                    items: [
                        { text: 'Markdown Examples', link: 'markdown-examples' },
                        { text: 'Runtime API Examples', link: 'api-examples' }
                    ]
                }
            ],
        },
        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2019-${new Date().getFullYear()} Michela`
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    },
})