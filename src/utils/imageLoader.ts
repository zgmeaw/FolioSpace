/**
 * 图片懒加载工具
 * 在移动端使用更小的图片或延迟加载
 */

export const loadImage = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * 检查是否为移动设备
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * 延迟加载图片（用于非首屏内容）
 */
export const lazyLoadImage = (src: string, delay: number = 0): Promise<string> => {
  return new Promise((resolve) => {
    if (delay > 0) {
      setTimeout(() => {
        loadImage(src).then(resolve);
      }, delay);
    } else {
      loadImage(src).then(resolve);
    }
  });
};

