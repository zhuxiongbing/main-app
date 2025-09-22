<template>
  <a-menu
    theme="dark"
    mode="inline"
    :selectedKeys="selectedKeys"
    :openKeys="openKeys"
    @openChange="onOpenChange"
    @select="handleMenuSelect"
    :inline-collapsed="collapsed"
    style="transition: all 0.3s ease"
  >
    <template v-for="route in routes" :key="route.path">
      <!-- 有子菜单的项 -->
      <template v-if="route.children && route.children.length > 0">
        <a-sub-menu :key="route.path">
          <template #title>
            <span>
              <component :is="getIconComponent(route?.meta?.icon)" v-if="route?.meta?.icon" />
              <span>{{ route.meta.title }}</span>
            </span>
          </template>
          <a-menu-item v-for="subRoute in route.children" :key="getPath(subRoute)">
            <span>
              <component :is="getIconComponent(subRoute?.meta?.icon)" v-if="subRoute?.meta?.icon" />
              <span>{{ subRoute?.meta.title }}</span>
            </span>
          </a-menu-item>
        </a-sub-menu>
      </template>
      <!-- 无子菜单的项 -->
      <template v-else>
        <a-menu-item :key="route.path">
          <span>
            <component :is="getIconComponent(route?.meta?.icon)" v-if="route?.meta?.icon" />
            <span>{{ route.meta.title }}</span>
          </span>
        </a-menu-item>
      </template>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  DashboardOutlined,
  AppstoreOutlined,
  StockOutlined,
  TransactionOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";

const props = defineProps<{
  collapsed: boolean;
}>();

const router = useRouter();
const route = useRoute();

// 获取所有需要在侧边栏显示的路由
const routes = computed(() => {
  return router.getRoutes().filter(r =>
    r.name && (r.path === '/' || r.children.length) // 只取根路由的子路由
  ) || [];
});

const getPath = (item) => { 
    return router.getRoutes().find(r =>
    r.name === item.name // 只取根路由的子路由
  )?.path ?? item.path;
}

// 选中的菜单项
const selectedKeys = ref<string[]>([route.path]);
// 展开的菜单项
const openKeys = ref<string[]>([]);

// 初始化菜单状态
const initMenuState = () => {
  const currentPath = router.currentRoute.value.path;
  selectedKeys.value = [currentPath];
  
  // 查找父级路由并展开
  const matched = router.currentRoute.value.matched;
  if (matched.length > 1) {
    openKeys.value = [matched[matched.length - 2].path];
  }
};

// 图标组件映射表
const iconComponents = {
  DashboardOutlined,
  AppstoreOutlined,
  StockOutlined,
  TransactionOutlined,
  MenuUnfoldOutlined,
};

// 获取图标组件（兼容erasableSyntaxOnly）
const getIconComponent = (iconName?: string) => {
  if (!iconName) return null;
  // 使用对象属性访问而非动态索引
  switch (iconName) {
    case "DashboardOutlined":
      return iconComponents.DashboardOutlined;
    case "AppstoreOutlined":
      return iconComponents.AppstoreOutlined;
    case "StockOutlined":
      return iconComponents.StockOutlined;
    case "TransactionOutlined":
      return iconComponents.TransactionOutlined;
    case "MenuUnfoldOutlined":
      return iconComponents.MenuUnfoldOutlined;
    default:
      return null;
  }
};

// 监听路由变化更新菜单状态
watch(
  () => router.currentRoute.value.path,
  () => {
    initMenuState();
  },
  { immediate: true }
);

// 处理菜单展开/收起
const onOpenChange = (keys: string[]) => {
  openKeys.value = keys;
};

// 处理菜单选择
const handleMenuSelect = ({ key }: { key: string }) => {
  router.push(key);
};
</script>
<style scoped>
:deep(.ant-menu-inline-collapsed) {
  transition: all 0.3s ease !important;
}

:deep(.ant-menu-item) {
  transition: all 0.3s ease !important;
}

:deep(.ant-menu-submenu-title) {
  transition: all 0.3s ease !important;
}
</style>
