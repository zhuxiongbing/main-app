import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
import Workbench from '@/views/Workbench.vue';
import StrategyStockSelection from '@/views/StrategyStockSelection.vue';
import StrategyTrading from '@/views/StrategyTrading.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Workbench',
        component: Workbench,
        meta: { 
          title: '工作台', 
          icon: 'DashboardOutlined',
          key: 'workbench'
        }
      },
      {
        path: 'strategy',
        name: 'Strategy',
        meta: { 
          title: '策略管理', 
          icon: 'AppstoreOutlined',
          key: 'strategy'
        },
        children: [
          {
            path: 'stock-selection',
            name: 'StrategyStockSelection',
            component: StrategyStockSelection,
            meta: { 
              title: '策略选股', 
              icon: 'StockOutlined',
              key: 'strategy-stock-selection'
            }
          },
          {
            path: 'trading',
            name: 'StrategyTrading',
            component: StrategyTrading,
            meta: { 
              title: '策略交易', 
              icon: 'TransactionOutlined',
              key: 'strategy-trading'
            }
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
    