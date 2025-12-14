/**
 * 资源配置 - 使用 jsDelivr CDN 加速资源加载
 * 
 * 视频文件存放在：StaticResourceRepository/viodes/
 * 图片文件存放在：StaticResourceRepository/images/gif/
 * 
 * CDN URL 格式：
 * https://cdn.jsdelivr.net/gh/用户名/仓库名@分支/文件路径
 */

// ========== 配置你的资源仓库信息 ==========
const GITHUB_USER = 'zgmeaw';                    // 你的 GitHub 用户名
const IMAGE_REPO = 'StaticResourceRepository';   // 专门存放资源的仓库名
const GITHUB_BRANCH = 'main';                     // 分支名（main 或 master）

// 视频文件路径
const VIDEO_PATH = 'viodes';
const VIDEO_CDN_BASE = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${IMAGE_REPO}@${GITHUB_BRANCH}/${VIDEO_PATH}`;

// 图片文件路径
const IMAGE_PATH = 'images/gif';
const IMAGE_CDN_BASE = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${IMAGE_REPO}@${GITHUB_BRANCH}/${IMAGE_PATH}`;

/**
 * 视频 CDN URL 映射（MP4 格式，替代 GIF）
 * 所有视频都通过 CDN 加载，自动播放、循环、静音
 */
export const VIDEO_CDN_URLS = {
  awcreate: `${VIDEO_CDN_BASE}/awcreate.mp4`,
  spjx: `${VIDEO_CDN_BASE}/spjx.mp4`,
  goodluck: `${VIDEO_CDN_BASE}/goodluck.mp4`,
  grzy: `${VIDEO_CDN_BASE}/grzy.mp4`,
} as const;

/**
 * 图片 CDN URL 映射（静态图片）
 */
export const IMAGE_CDN_URLS = {
  wechat: `${IMAGE_CDN_BASE}/wechat.png`,
} as const;

/**
 * 获取视频 URL
 */
export const getVideoUrl = (videoName: keyof typeof VIDEO_CDN_URLS): string => {
  return VIDEO_CDN_URLS[videoName];
};

/**
 * 获取图片 URL
 */
export const getImageUrl = (imageName: keyof typeof IMAGE_CDN_URLS): string => {
  return IMAGE_CDN_URLS[imageName];
};

