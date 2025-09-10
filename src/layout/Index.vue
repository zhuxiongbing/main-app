<template>
  <a-layout class="layout" style="min-height: 100vh">
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
      :trigger="null"
      width="200"
      style="background: #001529; color: white; "
    >
      <div class="slider">
        <div class="logo">
          <GithubOutlined />
          <span class="text" v-if="!collapsed">GG Bond</span>
        </div>
        <SiderMenu />

        <div class="setting">
          <a-button
            type="text"
            @click="collapsed = !collapsed"
            style="font-size: 16px; margin-right: 16px"
          >
            <menu-unfold-outlined v-if="!collapsed" />
            <menu-fold-outlined v-else />
          </a-button>
        </div>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 20px; border-bottom: 1px solid #e8e8e8;">
        <h2>{{getName()}}</h2>
      </a-layout-header>
      <a-layout-content
        style="margin: 16px; padding: 24px; background: #fff; min-height: 280px"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SiderMenu from "@/layout/components/SiderMenu.vue";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GithubOutlined,
} from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";

const collapsed = ref(false);
const router = useRouter();
const route = useRoute();

const getName = () => { 
    return router.getRoutes().find(r =>
    r.name === route.name // 只取根路由的子路由
  )?.meta.title;
}

</script>

<style scoped lang="scss">
.slider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .logo,
  .setting {
    width: 100%;
    height: 48px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      padding-left: 12px;
    }
  }

  .setting {
    height: 32px;
  }

  ul {
    flex: 1;
  }
}
</style>
