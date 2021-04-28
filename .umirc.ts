import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  dva: {},
  dynamicImport: {},
  // layout: {
  //   name: '管理后台',
  //   locale: true,
  //   layout: 'side',
  // },
  // routes: [
  //   {
  //     path: '/home',
  //     component: '@/pages/index',
  //   },
  //   {
  //     path: '/',
  //     // component: '@/pages/index',
  //     name: '菜单一',
  //     icon: '',
  //     routes: [
  //       {
  //         path: '/demo', // 会拼接上 parentPath 'test'
  //         component: '@/pages/demo/index',
  //         name: '示例 1',
  //       },
  //     ],
  //   },
  //   {
  //     path: '/class',
  //     // component: '@/pages/class/comonent-old.js',
  //     name: '生命周期',
  //     icon: '',
  //     routes: [
  //       {
  //         path: 'comonent-old', // 会拼接上 parentPath 'test'
  //         component: '@/pages/class/comonent-old',
  //         name: '旧生命周期',
  //       },
  //     ],
  //   },
  // ],
  fastRefresh: {},
});
