/**
 * 图片配置 - 使用 jsDelivr CDN 加速图片加载
 * 
 * 使用方法：
 * 1. 将 GIF 文件上传到 GitHub 仓库（例如：zgmeaw/FolioSpace）
 * 2. 在仓库中创建 assets 文件夹，放入 GIF 文件
 * 3. 使用 jsDelivr CDN URL 格式：
 *    https://cdn.jsdelivr.net/gh/用户名/仓库名@分支/文件路径
 * 
 * 示例：
 * - GitHub: https://github.com/zgmeaw/FolioSpace/tree/main/src/assets
 * - CDN URL: https://cdn.jsdelivr.net/gh/zgmeaw/FolioSpace@main/src/assets/awcreate.gif
 */

// 配置你的 GitHub 信息
const GITHUB_USER = 'zgmeaw';
const GITHUB_REPO = 'FolioSpace';
const GITHUB_BRANCH = 'main'; // 或 'master'，根据你的仓库分支名
const ASSETS_PATH = 'src/assets'; // 图片存放的文件夹路径（相对于仓库根目录）

// jsDelivr CDN 基础 URL
const CDN_BASE = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${GITHUB_REPO}@${GITHUB_BRANCH}/${ASSETS_PATH}`;

/**
 * 是否启用 CDN
 * 设置为 true 使用 CDN，false 使用本地文件
 */
export const USE_CDN = process.env.NODE_ENV === 'production';

/**
 * 图片 CDN URL 映射
 */
export const IMAGE_CDN_URLS = {
  awcreate: `${CDN_BASE}/awcreate.gif`,
  spjx: `${CDN_BASE}/spjx.gif`,
  goodluck: `${CDN_BASE}/goodluck.gif`,
  grzy: `${CDN_BASE}/grzy.gif`,
  wechat: `${CDN_BASE}/wechat.png`,
} as const;

