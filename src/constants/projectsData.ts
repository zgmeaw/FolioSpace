import goodluckPreview from '../assets/goodluck.gif';
import awcreatePreview from '../assets/awcreate.gif';
import spjxPreview from '../assets/spjx.gif';
import grzyGif from '../assets/grzy.gif';
import thinkingPreview from '../assets/wechat.png';
import { Project } from '../types/project';
import { SLIDE_IDS } from './slideIds';
/* import folioSpacePreview from '../assets/folio_space.gif'; */
/* import italkingPreview from '../assets/italking.png';
import scrcpyGUIPreview from '../assets/scrcpy-gui.gif'; */


export const projectsData: Project[] = [
  {
    id: SLIDE_IDS.GWITTER,
    name: 'AW-Create',
    title: 'AW-Create',
    preview: awcreatePreview,
    position: { x: 1500, y: 0, z: 0, rotateY: 0 },
    description:
      '专业编码定制项目服务，毕设级全套服务，包括："开题报告范例定制、论文范例定制、毕设级项目定制、范文降重、远程环境部署、1V1解答难点、答辩辅导"',
    tech: ['C#', 'ASP.NET', 'Python', 'JAVA', '微信小程序', 'WEB', 'Django', 'SQL', 'Linux', 'Spring Boot'],
    links: [
      {
        type: 'demo',
        url: 'https://meaw.xx.kg',
        text: '访问',
      },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.HOMEPAGE,
    name: 'AW多平台视频解析器',
    title: 'AW多平台视频解析器',
    preview: spjxPreview,
    position: { x: 1200, y: 800, z: 200, rotateY: 30 },
    description:
      '支持多平台视频解析下载，包括抖音、快手、B站等',
    tech: ['视频解析', '抖音', '快手', 'B站'],
    links: [
      { type: 'demo', 
        url: 'https://jx.meaw.xx.kg',
        text: '访问',
      },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.GALLERY,
    name: '文昌帝君灵签',
    title: '文昌帝君灵签',
    preview: goodluckPreview,
    position: { x: 0, y: 1500, z: 400, rotateY: 90 },
    description: '抽签解签，找寻答案，不过仅供娱乐，杜绝迷信哈',
    tech: ['抽签', '解签'],
    links: [
      {
        type: 'demo',
        url: 'https://cq.meaw.xx.kg',
        text: '访问',
      },
    ],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.TERMFOLIO,
    name: '简约风个人主页',
    title: '简约风个人主页',
    preview: grzyGif,
    position: { x: -1060, y: 1060, z: 600, rotateY: 135 },
    description: '一个简约风个人主页，包括：个人介绍、学习经历、网站展示、联系方式等',
    tech: ['个人主页', '简约风', 'Web'],
    links: [
      { type: 'demo', url: 'https://awaw.meaw.xx.kg', text: '访问',},
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.THINKING,
    name: '思考的价值',
    title: '思考的价值',
    preview: thinkingPreview,
    position: { x: -1500, y: 0, z: 800, rotateY: 180 },
    description:
      ' ',
    tech: [' 每天都是现场直播，过去的回放有好有坏别去在意，未来的剧本尚且未知，所以好好把握当下，享受过程，珍惜眼前人'],
    links: [
      {
        type: 'demo',
        url: '#',
        text: '开心就好',
      },
    ],
    layout: 'standard',
  },
  /* {
    id: SLIDE_IDS.SCRCPY,
    name: 'Scrcpy-GUI',
    title: 'Scrcpy-GUI',
    preview: scrcpyGUIPreview,
    position: { x: -1060, y: -1060, z: 1000, rotateY: 225 },
    description: 'A simple & beautiful GUI application for scrcpy',
    tech: ['Electron', 'Scrcpy', 'Cross-platform'],
    links: [
      {
        type: 'demo',
        url: 'https://github.com/SimonAKing/scrcpy-gui/releases',
        text: 'Download',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/scrcpy-gui',
        text: 'Github',
        githubRepo: 'SimonAKing/scrcpy-gui',
      },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.ITALKING,
    name: 'ITalking',
    title: 'ITalking',
    preview: italkingPreview,
    position: { x: 0, y: -1500, z: 1200, rotateY: 270 },
    description:
      'A voice social platform that connects strangers to relieve loneliness and enable confident self-expression',
    tech: ['WebRTC', 'Fullstack', 'P2P'],
    links: [
      {
        type: 'demo',
        url: 'https://github.com/SimonAKing/ITalking/blob/master/CONTRIBUTING.md',
        text: 'Deploy & Try',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/ITalking',
        text: 'Github',
        githubRepo: 'SimonAKing/ITalking',
      },
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.PROJECTS,
    name: 'FolioSpace',
    title: 'FolioSpace',
    preview: folioSpacePreview,
    position: { x: 1060, y: -1060, z: 1400, rotateY: 315 },
    description:
      'A modern and elegant personal portfolio website with smooth animations and responsive design',
    tech: ['Blogging', 'Web', 'Portfolio'],
    links: [
      {
        type: 'demo',
        url: 'https://simonaking.com/projects',
        text: 'Live Demo',
      },
      {
        type: 'code',
        url: 'https://github.com/SimonAKing/FolioSpace',
        text: 'Github',
        githubRepo: 'SimonAKing/FolioSpace',
      },
    ],
    layout: 'standard',
  }, */
];

export const mapData = [
  {
    id: SLIDE_IDS.TITLE,
    name: '首页',
    icon: 'fas fa-home',
  },

  {
    id: SLIDE_IDS.GWITTER,
    name: 'AW-Create',
    icon: 'fab fa-twitter',
  },
  {
    id: SLIDE_IDS.HOMEPAGE,
    name: 'AW多平台视频解析器',
    icon: 'fas fa-video',
  },
  {
    id: SLIDE_IDS.GALLERY,
    name: '文昌帝君灵签',
    icon: 'fas fa-random',
  },
  {
    id: SLIDE_IDS.TERMFOLIO,
    name: '简约风个人主页',
    icon: 'fas fa-user',
  },
  {
    id: SLIDE_IDS.THINKING,
    name: '思考的价值',
    icon: 'fas fa-brain',
  },
  {
    id: SLIDE_IDS.OVERVIEW,
    name: 'Overview',
    icon: 'fas fa-th-large',
  },
];
