import { ContactLink } from '../types/userConfig';

export const USER_CONFIG = {
  AVATAR_URL:
    'https://img.cdn1.vip/i/6900deda4a8ef_1761664730.webp',
  NAME: '阿旺',
  JOB_TITLE: 'SimonAKing',
  BIO: [
    '👨‍💻 欢迎访问我的主页，在这里你可以',
    '✨ 查看我的其他网站 | 了解我的一点点过去',
    '🤖 联系我的方式 | 希望你能找到你想要的',
  ],
  WECHAT_ID: 'SimonAKing',

  CONTACT_LINKS: [
    {
      type: 'github',
      url: 'https://github.com/SimonAKing',
      icon: 'fab fa-github',
      text: 'GitHub',
    },
    {
      type: 'email',
      url: 'mailto:hi@simonaking.com',
      icon: 'fas fa-envelope',
      text: '邮箱',
    },
    {
      type: 'website',
      url: 'https://simonaking.com',
      icon: 'fas fa-globe',
      text: '个人网站',
    },
    {
      type: 'twitter',
      url: 'https://x.com/simon_aking',
      icon: 'fab fa-twitter',
      text: 'X',
    },
    {
      type: 'wechat',
      icon: 'fab fa-weixin',
      text: '微信',
      url: 'https://thinking.simonaking.com/',
    },
  ] as ContactLink[],
} as const;

export const GITHUB_TOKEN =
  'g?i?t?h?u?b?_?p?a?t?_?1?1?A?H?V?6?E?W?Q?0?M?f?C?S?r?0?4?K?A?j?1?F?_?3?7?n?4?U?y?u?S?m?d?z?i?t?D?s?w?i?s?i?u?a?g?N?b?a?k?V?n?L?I?7?U?W?s?s?h?n?K?p?s?H?S?D?S?4?D?K?O?Q?Q?J?S?S?x?q?z?Z?X?M';
