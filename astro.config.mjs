import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

export default defineConfig({
	integrations: [tailwind(), mdx()],
	site: 'https://你的域名.com', // 替换成你的网站域名
})
