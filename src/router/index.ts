import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
import Workbench from '@/views/Workbench.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Workbench',
        component: Workbench,
        meta: { title: '工作台', icon: 'DashboardOutlined' }
      },
    ]
  },
  // 策略管理路由占位，添加 `component: { render: () => null }` 避免 Vue Router 警告
  {
    path: '/strategy',
    name: 'Strategy',
    meta: { title: '策略管理', icon: 'AppstoreOutlined' },
    component: Layout, // 空渲染函数，仅占位
    children: [
      {
        path: 'stock-selection',
        name: 'StrategyStockSelection',
        meta: { title: '策略选股' },
        component: () => import('@/views/strategy/stockselection/index.vue'), // 子路由同样占位
      },
      {
        path: 'trading',
        name: 'StrategyTrading',
        meta: { title: '策略交易' },
        component: () => import('@/views/strategy/trading/index.vue'), // 子路由同样占位
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;