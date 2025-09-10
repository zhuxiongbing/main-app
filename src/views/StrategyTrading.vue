<template>
  <div class="strategy-trading">
    <a-card title="交易记录">
      <a-table :columns="columns" :data-source="trades" row-key="id">
        <template #status="record">
          <a-tag 
            :color="record.status === '成功' ? 'green' : 
                   record.status === '失败' ? 'red' : 'orange'">
            {{ record.status }}
          </a-tag>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script setup lang="ts">
// 交易记录数据
const trades = [
  {
    id: '1',
    strategyName: '均线交叉策略',
    stockCode: '600000',
    stockName: '浦发银行',
    action: '买入',
    price: '8.56',
    quantity: '1000',
    time: '2023-06-20 09:35:22',
    status: '成功'
  },
  {
    id: '2',
    strategyName: '动量策略',
    stockCode: '000001',
    stockName: '平安银行',
    action: '卖出',
    price: '12.32',
    quantity: '500',
    time: '2023-06-20 14:22:15',
    status: '成功'
  },
  {
    id: '3',
    strategyName: '价值投资策略',
    stockCode: '601318',
    stockName: '中国平安',
    action: '买入',
    price: '45.67',
    quantity: '200',
    time: '2023-06-19 10:15:33',
    status: '失败'
  }
]

// 表格列定义
const columns = [
  {
    title: '策略名称',
    dataIndex: 'strategyName',
    key: 'strategyName'
  },
  {
    title: '股票代码',
    dataIndex: 'stockCode',
    key: 'stockCode'
  },
  {
    title: '股票名称',
    dataIndex: 'stockName',
    key: 'stockName'
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    key: 'quantity'
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: '状态',
    key: 'status',
    slots: { customRender: 'status' }
  }
]
</script>
    