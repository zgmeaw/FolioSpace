import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GITHUB_TOKEN } from '../../constants/userConfig';
import { GitHubRepoInfo, Link, Project } from '../../types/project';
import { isMobile } from '../../utils/imageLoader';
import { getImageUrl, getVideoUrl } from '../../constants/imageConfig';
import './ProjectCard.css';

const formatCount = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const GitHubStats = memo(
  ({
    repoInfo,
    loading,
  }: {
    repoInfo: GitHubRepoInfo | null;
    loading: boolean;
  }) => {
    return (
      <div className={`github-stats animate`}>
        {loading ? (
          <div className="loading-stats">
            <i className="fas fa-spinner fa-spin"></i>
            <span>Loading repository info...</span>
          </div>
        ) : repoInfo ? (
          <div className="repo-meta">
            {repoInfo.language && (
              <div className="meta-item cursor-target">
                <span>{repoInfo.language}</span>
              </div>
            )}
            <div className="meta-item cursor-target">
              <span>Created {formatDate(repoInfo.createdAt)}</span>
            </div>
          </div>
        ) : (
          <div className="no-repo-info">
            <i className="fas fa-info-circle"></i>
            <span>GitHub repository info unavailable</span>
          </div>
        )}
      </div>
    );
  },
);

GitHubStats.displayName = 'GitHubStats';

const ProjectLinks = memo(
  ({
    links,
    repoInfo,
    loading,
  }: {
    links: Link[];
    repoInfo: GitHubRepoInfo | null;
    loading: boolean;
  }) => (
    <div className={`project-links ${loading ? 'animate' : ''}`}>
      {links.map((link: Link, index: number) => (
        <a
          key={index}
          href={link.url}
          className={`project-link cursor-target ${link.type === 'demo' ? '' : 'secondary'}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            // 确保左键点击一定能打开链接
            e.preventDefault();
            e.stopPropagation();
            if (link.url) {
              window.open(link.url, '_blank', 'noopener,noreferrer');
            }
          }}
        >
          <i
            className={
              link.type === 'demo'
                ? 'fas fa-external-link-alt'
                : 'fab fa-github'
            }
          ></i>
          {link.text}
          {repoInfo && link.type === 'code' && (
            <span className="star-count">
              <i className="fas fa-star"></i>
              {formatCount(repoInfo.stars)}
            </span>
          )}
        </a>
      ))}
    </div>
  ),
);

ProjectLinks.displayName = 'ProjectLinks';

const ProjectCard = memo(({ project }: { project: Project }) => {
  const isReverse = project.layout === 'reverse';
  const [repoInfo, setRepoInfo] = useState<GitHubRepoInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 判断是否为视频项目（通过检查 preview URL 是否包含 .mp4）
  const isVideo = project.preview.endsWith('.mp4') || project.preview.endsWith('.webm');
  
  // 获取对应的图片 URL（用于占位符）
  // 项目 ID 直接对应图片名称（awcreate, spjx, goodluck, grzy）
  const getPlaceholderImageUrl = (): string => {
    if (!isVideo) return project.preview;
    
    // 使用项目 ID 来匹配图片（项目 ID 就是图片名称）
    const imageName = project.id as 'awcreate' | 'spjx' | 'goodluck' | 'grzy' | string;
    if (imageName === 'awcreate' || imageName === 'spjx' || imageName === 'goodluck' || imageName === 'grzy') {
      try {
        return getImageUrl(imageName as 'awcreate' | 'spjx' | 'goodluck' | 'grzy');
      } catch {
        return project.preview;
      }
    }
    return project.preview;
  };

  const placeholderImageUrl = getPlaceholderImageUrl();

  const githubRepo = project.links.find(
    (link) => link.type === 'code' && link.githubRepo,
  )?.githubRepo;

  useEffect(() => {
    (async () => {
      if (!githubRepo) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(
          `https://api.github.com/repos/${githubRepo}`,
          {
            headers: {
              Authorization: `bearer ${GITHUB_TOKEN.replaceAll("?", "")}`,
              Accept: 'application/json',
            },
          },
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setRepoInfo({
          stars: data.stargazers_count || 0,
          forks: data.forks_count || 0,
          issues: data.open_issues_count || 0,
          language: data.language || '',
          license: data.license?.name || null,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        });
      } catch (error) {
        console.error('Failed to fetch GitHub repo info:', error);
        setRepoInfo({
          stars: 0,
          forks: 0,
          issues: 0,
          language: '',
          license: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const techTags = useMemo(
    () => (
      <div className={`project-tech ${loading ? 'animate' : ''}`}>
        {project.tech.map((tech: string, index: number) => (
          <span key={index} className="tech-tag cursor-target">
            {tech}
          </span>
        ))}
      </div>
    ),
    [project.tech, loading],
  );

  const InfoSection = useCallback(
    () => (
      <div className="project-info">
        <h2 className={`cursor-target ${loading ? 'animate' : ''}`}>
          {project.title}
        </h2>
        <p className={`project-description ${loading ? 'animate' : ''}`}>
          {project.description}
        </p>
        {techTags}

        {githubRepo && <GitHubStats repoInfo={repoInfo} loading={loading} />}

        <ProjectLinks
          links={project.links}
          repoInfo={repoInfo}
          loading={loading}
        />
      </div>
    ),
    [
      project.title,
      project.description,
      techTags,
      repoInfo,
      loading,
      project.links,
    ],
  );

  // 先加载占位图片
  useEffect(() => {
    if (!imageLoaded) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(true); // 即使加载失败也显示，避免一直显示占位符
      img.src = placeholderImageUrl;
    }
  }, [placeholderImageUrl, imageLoaded]);

  // 如果是视频项目，在后台加载视频
  useEffect(() => {
    if (isVideo && imageLoaded && !videoReady) {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.muted = true;
      video.src = project.preview;
      
      // 当视频可以完整播放时（已缓冲足够的数据）
      video.addEventListener('canplaythrough', () => {
        setVideoReady(true);
      }, { once: true });
      
      // 错误处理
      video.addEventListener('error', () => {
        // 视频加载失败，保持显示图片
        console.warn('Video failed to load, keeping image placeholder');
      }, { once: true });
      
      // 开始加载视频
      video.load();
      
      return () => {
        video.removeEventListener('canplaythrough', () => {});
        video.removeEventListener('error', () => {});
      };
    }
  }, [isVideo, imageLoaded, videoReady, project.preview]);

  const PreviewSection = useCallback(
    () => (
      <div
        className={`project-preview cursor-target ${loading ? 'animate' : ''}`}
      >
        {imageLoaded ? (
          isVideo && videoReady ? (
            // 视频加载完成，显示视频
            <video
              ref={videoRef}
              className="project-image project-video"
              src={project.preview}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label={project.title}
              onLoadedData={() => {
                // 确保视频开始播放
                if (videoRef.current) {
                  videoRef.current.play().catch((err) => {
                    console.warn('Video autoplay failed:', err);
                  });
                }
              }}
            />
          ) : (
            // 显示占位图片（视频加载中或非视频项目）
            <img
              className="project-image"
              src={placeholderImageUrl}
              alt={project.title}
              loading="lazy"
              decoding="async"
            />
          )
        ) : (
          <div className="project-image-placeholder">
            <div className="placeholder-spinner"></div>
          </div>
        )}
      </div>
    ),
    [project.preview, project.title, imageLoaded, loading, isVideo, videoReady, placeholderImageUrl],
  );

  const cardClasses = `project-card ${isReverse ? 'reverse' : ''}`;

  return (
    <div className={cardClasses}>
      <InfoSection />
      <PreviewSection />
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
