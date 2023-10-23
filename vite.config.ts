import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'build'),
    assetsDir: 'static/images',
    minify: true,
    rollupOptions: {
      // Включите обработку TypeScript
      input: {
        main: './src/index.ts', // Замените на ваш файл точки входа
      },
    },
  },
  assetsInclude: '**/*.hbs',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/consts.scss";',
      },
    },
  },
});
