<template>
  <div class="workbench">
    <a-card title="策略看板">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-statistic title="总策略数" value="24" />
        </a-col>
        <a-col :span="8">
          <a-statistic title="运行中策略" value="16" />
        </a-col>
        <a-col :span="8">
          <a-statistic title="持仓策略" value="20" />
        </a-col>
      </a-row>
    </a-card>

    <a-card title="交易看板" style="margin-top: 16px">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-statistic title="港股交易数量" value="1521" />
        </a-col>
        <a-col :span="8">
          <a-statistic title="美股交易数量" value="265" />
        </a-col>
        <a-col :span="8">
          <a-statistic title="今日交易" value="23" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup lang="ts">
// 工作台页面逻辑
</script>

<style scoped></style>
