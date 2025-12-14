/**
 * 图片配置 - 使用 jsDelivr CDN 加速图片加载
 * 
 * 使用方法：
 * 1. 创建一个专门的 GitHub 仓库存放图片（例如：zgmeaw/folio-images）
 * 2. 在仓库中创建 assets 文件夹，放入所有 GIF 和图片文件
 * 3. 修改下面的配置信息
 * 4. 使用 jsDelivr CDN URL 格式：
 *    https://cdn.jsdelivr.net/gh/用户名/仓库名@分支/文件路径
 * 
 * 示例：
 * - GitHub 仓库: https://github.com/zgmeaw/StaticResourceRepository
 * - 图片路径: https://github.com/zgmeaw/StaticResourceRepository/tree/main/images/gif
 * - CDN URL: https://cdn.jsdelivr.net/gh/zgmeaw/StaticResourceRepository@main/images/gif/awcreate.gif
 */

// ========== 配置你的图片仓库信息 ==========
const GITHUB_USER = 'zgmeaw';                    // 你的 GitHub 用户名
const IMAGE_REPO = 'StaticResourceRepository';   // 专门存放图片的仓库名
const GITHUB_BRANCH = 'main';                     // 分支名（main 或 master）
const ASSETS_PATH = 'images/gif';                 // 图片存放的文件夹路径（相对于仓库根目录）

// jsDelivr CDN 基础 URL
const CDN_BASE = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${IMAGE_REPO}@${GITHUB_BRANCH}/${ASSETS_PATH}`;

/**
 * 图片 CDN URL 映射
 * 所有图片都通过 CDN 加载，不依赖本地文件
 */
export const IMAGE_CDN_URLS = {
  awcreate: `${CDN_BASE}/awcreate.gif`,
  spjx: `${CDN_BASE}/spjx.gif`,
  goodluck: `${CDN_BASE}/goodluck.gif`,
  grzy: `${CDN_BASE}/grzy.gif`,
  wechat: `${CDN_BASE}/wechat.png`,
} as const;

/**
 * 获取图片 URL（统一接口）
 */
export const getImageUrl = (imageName: keyof typeof IMAGE_CDN_URLS): string => {
  return IMAGE_CDN_URLS[imageName];
};

