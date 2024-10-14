import system from './system.mts'
export default [
    { text: '首页', link: '/' },
    // system,
    {
        text: 'JavaScript',
        items: [
            {
                text: '高级',
                link: '/前端体系/JavaScript/JavaScript高级/01.函数中的this指向.md'
            }
        ]
    },
    {
        text: '前端工程化',
        items: [
            {
                text: 'webpack',
                link: '/前端体系/前端工程化/webpack/01.基本配置.md'
            },
            {
                text: '包管理器',
                link: '/前端体系/前端工程化/包管理器/01.包配置.md'
            }
        ]
    },
    {
        text: 'Vue',
        link: '/前端体系/Vue/01.自定义指令结合IntersetionObserver API实现上拉加载.md'
    },
    {
        text: 'React',
        items: [
            {
                text: 'css',
                link: '/前端体系/React/css/01.react中使用css的5种方式'
            },
            {
                text: 'redux',
                link: '/前端体系/React/redux/01.redux的使用'
            }
        ]
    },
    { text: '工作知识碎片', link: '/工作知识碎片/01.switch_if分支转换为map映射' },
    { text: '个人介绍', link: '/个人介绍' }
]
