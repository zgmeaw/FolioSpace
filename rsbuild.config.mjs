import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact()],
  output: {
    // GitHub Pages 部署时，如果是用户名.github.io 仓库，使用根路径
    // 如果是其他仓库名，需要设置为 /仓库名/
    // 这里先注释掉，根据你的仓库名在 GitHub Pages 设置后调整
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/FolioSpace/' : '/',
    distPath: {
      root: 'dist',
    },
  },
});
