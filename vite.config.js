// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': '/src',
			'@pages': '/src/pages'
		}
	},
	build: {
		modulePreload: true,
		rollupOptions: {
			output: {
				manualChunks: {
					chunks: ['src/router/index.js'],
					vue: ['vue'],
					'vue-router': ['vue-router'],
					json5: ['json5']
				}
			}
		}
	}
});
