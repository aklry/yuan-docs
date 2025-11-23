import { defineConfig } from 'vitepress'
import nav from './nav/index.mjs'
import { defineTeekConfig } from 'vitepress-theme-teek/config'
// Teek 主题配置
const teekConfig = defineTeekConfig({
	wallpaper: {
		enabled: false, // 是否启用壁纸模式
		hideBanner: false, // 开启壁纸模式后，是否隐藏 Banner
		hideMask: false // 开启壁纸模式后，是否隐藏 Banner 或 bodyBgImage 的遮罩层，则确保 banner.mask 和 bodyBgImage.mask 为 true 才生效
	},
	banner: {
		enabled: true, // 是否启用 Banner
		name: '源空间', // Banner 标题，默认读取 vitepress 的 title 属性
		bgStyle: 'fullImg', // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
		pureBgColor: '#28282d', // Banner 背景色，bgStyle 为 pure 时生效
		imgInterval: 15000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
		imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
		imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
		mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
		maskBg: 'rgba(0, 0, 0, 0.4)', // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
		textColor: '#ffffff', // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
		titleFontSize: '3.2rem', // 标题字体大小
		descFontSize: '1.4rem', // 描述字体大小
		descStyle: 'types', // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
		description: [
			'故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt',
			'积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu'
		], // 描述信息
		switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
		switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
		typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
		typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
		typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
		typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
		imgSrc: ['/images/1.jpg', '/images/2.jpg', '/images/3.png', '/images/4.png'] // Banner 背景图片地址，字符串或字符串数组，当为数组时可设置 imgInterval 和 imgShuffle
	},
	post: {
		postStyle: 'list',
		coverImgMode: 'full', // 文章封面图显示模式，full 为全屏显示，contain 为完整显示
		emptyLabel: '暂无文章', // 文章列表为空时的标签
		showCapture: true, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
		splitSeparator: false, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
		transition: true, // 是否开启过渡动画
		transitionName: 'tk-slide-fade', // 自定义过渡动画名称
		listStyleTitleTagPosition: 'right', // 列表模式下的标题标签位置（postStyle 为 list）
		defaultCoverImg: [
			'/images/1.jpg',
			'/images/2.jpg',
			'/images/3.png',
			'/images/4.png',
			'/images/5.jpg',
			'/images/6.jpg'
		] // 默认封面图地址，如果不设置封面图则使用默认封面图地址
	},
	page: {
		pageSize: 10 // 每页文章数量
	},
	category: {
		enabled: false // 是否启用分类卡片
	},
	tag: {
		enabled: false
	},
	topArticle: {
		enabled: false
	},
	blogger: {
		name: 'aklry', // 博主名称
		slogan: '代码存档，思路开源',
		avatar: '/site.png', // 博主头像
		shape: 'circle',
		circleBgImg: '/images/bg.jpg'
	},
	sidebarTrigger: true
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
	extends: teekConfig,
	title: '源空间',
	description: '知识总结及工作总结',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav,
		socialLinks: [{ icon: 'github', link: 'https://github.com/aklry' }],
		footer: {
			copyright: 'Copyright © 2024-present aklry | <a href="http://beian.miit.gov.cn">粤ICP备2024244039号</a>'
		},
		// 页脚
		docFooter: {
			prev: '上一章',
			next: '下一章'
		},
		// 最后更改时间
		lastUpdated: {
			text: '最后更改时间',
			formatOptions: {
				dateStyle: 'full',
				timeStyle: 'short'
			}
		},
		// 搜索栏
		search: {
			provider: 'local'
		},
		outline: {
			label: '本页目录',
			level: [2, 3]
		}
	},
	head: [['link', { rel: 'icon', href: '/site.png' }]]
})
