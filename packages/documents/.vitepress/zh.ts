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
                    base: '/docs/core/',
                    items: [
                        { text: 'BaseThree 基础', link: 'BaseThree' },
                        { text: 'ThreeInstance 实例', link: 'ThreeInstance' },
                        { text: 'Resource 资源', link: 'Resource' },
                        { text: 'Size 尺寸', link: 'Size' },
                        { text: 'Time 时间', link: 'Time' },
                        { text: 'Mousemove 鼠标移动', link: 'Mousemove' },
                        { text: 'Raycaster 射线检测', link: 'Raycaster' },
                        { text: 'EventEmitter 发布订阅', link: 'EventEmitter' },
                    ]
                },
                {
                    text: '组件',
                    collapsed: false,
                    base: '/docs/components/',
                    items: [
                        { text: 'Animation 动画', link: 'Animation' },
                        { text: 'Cameras 相机', link: 'Cameras' },
                        { text: 'Charts 图表', link: 'Charts' },
                        { text: 'Lights 灯光', link: 'Lights' },
                        { text: 'Loading 加载器', link: 'Loading' },
                        { text: 'Postprocessing 后处理', link: 'Postprocessing' },
                        { text: 'Renderers 渲染器', link: 'Renderers' },
                        { text: 'Web 浏览器', link: 'Web' },
                    ]
                },
                {
                    text: '配置项',
                    collapsed: false,
                    base: '/docs/config',
                    items: [
                        { text: 'Default Config 默认配置', link: '/docs/default-config' },
                        { text: 'Loading Config 加载配置', link: 'loading-config' },
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