<template>
  <div class="strategy-stock-selection">
    <a-card title="选股策略列表">
      <a-table :columns="columns" :data-source="strategies" row-key="id">
        <template #action="record">
          <a-button type="primary" size="small" style="margin-right: 8px;">
            编辑
          </a-button>
          <a-button danger size="small">
            删除
          </a-button>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script setup lang="ts">
// 策略选股数据
const strategies = [
  {
    id: '1',
    name: '均线交叉选股',
    description: '基于5日与20日均线交叉的选股策略',
    createTime: '2023-06-01',
    status: '启用'
  },
  {
    id: '2',
    name: '价值投资选股',
    description: '基于市盈率、市净率等指标的价值投资选股',
    createTime: '2023-05-20',
    status: '启用'
  },
  {
    id: '3',
    name: '动量选股策略',
    description: '基于近期价格动量的选股策略',
    createTime: '2023-05-15',
    status: '禁用'
  }
]

// 表格列定义
const columns = [
  {
    title: '策略名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' }
  }
]
</script>

<style scoped>
</style>
    