import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact()],
  output: {
    // 使用自定义域名 meaw.top，使用根路径
    // 如果不用自定义域名，改为：assetPrefix: '/FolioSpace/',
    assetPrefix: '/',
    publicPath: '/',
    distPath: {
      root: 'dist',
    },
    // 代码分割优化
    chunkStrategy: {
      splitChunk: {
        chunks: 'all',
        override: {
          chunks: {
            // 分离第三方库
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
            },
            // 分离 React
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              priority: 20,
            },
          },
        },
      },
    },
  },
  performance: {
    // 图片优化
    image: {
      limit: 8192, // 8KB 以下的图片转为 base64
    },
    // 资源压缩
    chunkSize: 200 * 1024, // 200KB
  },
  // 生产环境优化
  tools: {
    rspack: {
      optimization: {
        // 启用 Tree Shaking
        usedExports: true,
        sideEffects: false,
        // 代码压缩
        minimize: true,
      },
    },
  },
  server: {
    publicPath: '/',
  },
});
