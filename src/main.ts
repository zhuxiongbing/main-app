import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { DashboardOutlined, AppstoreOutlined, StockOutlined, TransactionOutlined } from '@ant-design/icons-vue';

const app = createApp(App);

// 全局注册图标
app.component('DashboardOutlined', DashboardOutlined);
app.component('AppstoreOutlined', AppstoreOutlined);
app.component('StockOutlined', StockOutlined);
app.component('TransactionOutlined', TransactionOutlined);

app.use(Antd);
app.use(router);
app.mount('#app');
    