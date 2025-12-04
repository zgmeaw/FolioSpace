import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact()],
  output: {
    // GitHub Pages 部署：仓库名是 FolioSpace，所以使用 /FolioSpace/ 作为基础路径
    assetPrefix: isProduction ? '/FolioSpace/' : '/',
    publicPath: isProduction ? '/FolioSpace/' : '/',
    distPath: {
      root: 'dist',
    },
  },
  server: {
    // 开发服务器配置
    publicPath: '/',
  },
});
