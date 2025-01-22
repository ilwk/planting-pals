import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Plating Pals',
  description: 'A document for plant enthusiasts to connect and share their experiences and knowledge.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/basis/planting-container' },
    ],

    sidebar: [
      {
        text: '前期准备',
        items: [
          { text: '容器选择', link: '/basis/planting-container' },
          { text: '种植术语', link: '/basis/planting-term' },
          { text: '肥料与农药', link: '/basis/fertilizers-and-pesticides' },
        ],
      },
      {
        text: '植物推荐',
        items: [
          { text: '新手推荐', link: '/recommend/noob-recommend-planting' },
          { text: '蓝莓', link: '/recommend/blueberry' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/ilwk/planting-pals' }],
  },
});
