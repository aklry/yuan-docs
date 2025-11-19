// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import './style.css'
import Teek from 'vitepress-theme-teek'
import 'vitepress-theme-teek/index.css'

export default {
	extends: Teek,
	enhanceApp({ app, router, siteData }) {
		// ...
	}
} satisfies Theme
