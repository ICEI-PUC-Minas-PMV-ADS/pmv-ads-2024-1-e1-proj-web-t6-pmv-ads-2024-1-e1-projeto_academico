import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [],
	build: {
		chunkSizeWarningLimit: 1024 * 6,
	},
	server: {
		port: 8080,
		host: true,
		open: true,
		fs: {
			strict: false,
		},
	},
	resolve: {
		alias: { '@': resolve(__dirname, './src') },
	},
});
