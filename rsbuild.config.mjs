import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact()],
  output: {
    // 使用自定义域名 meaw.xx.kg，使用根路径
    // 如果不用自定义域名，改为：assetPrefix: '/FolioSpace/',
    assetPrefix: '/',
    publicPath: '/',
    distPath: {
      root: 'dist',
    },
  },
  server: {
    publicPath: '/',
  },
});
