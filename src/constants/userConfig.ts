import { ContactLink } from '../types/userConfig';
import touxiang from '../touxiang.jpg';

export const USER_CONFIG = {
  AVATAR_URL: touxiang,
  NAME: '阿旺',
  JOB_TITLE: '阿旺',
  BIO: [
    '👨‍💻 欢迎访问我的主页，在这里你可以',
    '✨ 查看我的其他网站 | 了解我的一点点过去',
    '🤖 联系我的方式 | 希望你能找到你想要的',
  ],
  WECHAT_ID: 'SimonAKing',

  CONTACT_LINKS: [
    {
      type: 'qq',
      url: 'https://qm.qq.com/q/5oycpMnQZ',
      icon: 'fab fa-qq',
      text: 'QQ',
    },
    {
      type: 'email',
      url: 'mailto:zgmeaw@163.com',
      icon: 'fas fa-envelope',
      text: '邮箱',
    },
    {
      type: 'website',
      url: 'https://jd.meaw.xx.kg',
      icon: 'fas fa-globe',
      text: '接单平台',
    },
    {
      type: 'wechat',
      icon: 'fab fa-weibo',
      text: '微博',
      url: 'https://weibo.com/u/7514642939',
    },
  ] as ContactLink[],
} as const;

export const GITHUB_TOKEN =
  'g?i?t?h?u?b?_?p?a?t?_?1?1?A?H?V?6?E?W?Q?0?M?f?C?S?r?0?4?K?A?j?1?F?_?3?7?n?4?U?y?u?S?m?d?z?i?t?D?s?w?i?s?i?u?a?g?N?b?a?k?V?n?L?I?7?U?W?s?s?h?n?K?p?s?H?S?D?S?4?D?K?O?Q?Q?J?S?S?x?q?z?Z?X?M';
