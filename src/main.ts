import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { registerMicroApps, start } from 'qiankun';
import { 
  DashboardOutlined, 
  AppstoreOutlined, 
  StockOutlined, 
  TransactionOutlined, 
  MenuUnfoldOutlined 
} from '@ant-design/icons-vue';

// 主应用 src/main.ts
registerMicroApps([
  {
    name: 'StrategyApp', // 必须与子应用 output.name 一致
    entry: '//localhost:3001', 
    container: '#micro-app-container', 
    activeRule: '/strategy', 
    props: { /* 传递给子应用的数据 */ }
  }
]);

// 启动qiankun
start({
  sandbox: {
    strictStyleIsolation: false, // 简化调试，生产可按需开启
  }
});

const app = createApp(App);

// 全局注册图标
app.component('DashboardOutlined', DashboardOutlined);
app.component('AppstoreOutlined', AppstoreOutlined);
app.component('StockOutlined', StockOutlined);
app.component('TransactionOutlined', TransactionOutlined);
app.component('MenuUnfoldOutlined', MenuUnfoldOutlined);

app.use(Antd);
app.use(router);
app.mount('#app');
