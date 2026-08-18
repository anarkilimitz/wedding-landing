import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		babel({ presets: [reactCompilerPreset()] }),
		tailwindcss(),

		ViteImageOptimizer({
			includePublic: true,

			exclude: ['public/og-image.jpg'], // исключил чтоб не сжималась!!!!

			png: {
				quality: 80,
			},

			jpeg: {
				quality: 70,
			},

			webp: {
				quality: 75,
			},

			avif: {
				quality: 60,
			},

			logStats: true,
		}),
	],

	server: {
		open: true,
	},
});
