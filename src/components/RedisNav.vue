<template>
  <div class="app-contain">
    <div class="top_bar">
      <div class="top_bar_item"><div><el-icon><circle-plus-filled /></el-icon></div><div>添加一个链接</div></div>
      <div class="top_bar_item"><div><el-icon><upload-filled /></el-icon></div><div>导入</div></div>
      <div class="top_bar_item"><div><el-icon><download /></el-icon></div><div>导出</div></div>
    </div>
  </div>
  <div class="nav">
    <div class="redis_item" v-for="redis in redisList" :key="redis.id">
      <div class="redis_item_header">
        <div v-show="redis.isOpen">
          <el-icon v-show="redis.isAction"><arrow-right-bold /></el-icon>
          <el-icon v-show="!redis.isAction"><arrow-down-bold /></el-icon>
        </div>
        <div @click="redisOpen(redis)">
          <el-icon><list /></el-icon>{{ redis.name }}
        </div>
      </div>
      <div class="redis_item_body" v-show="redis.isAction">
        <div class="redis_item_db" v-for="index of redis.database" :key="index">
          <el-icon><coin /></el-icon>{{ index }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CirclePlusFilled, UploadFilled, Download, List, ArrowRightBold, ArrowDownBold, Coin } from '@element-plus/icons-vue'
import Redis from '@/models/Redis'

// 模拟数据 TODO 用 reactive 动态
const redisList: Redis[] = []
const mockRedis: Redis = {
  id: 1,
  createdTime: '',
  creator: 1,
  updatedTime: '',
  updater: 1,
  isDelete: 0,
  host: '',
  password: '',
  lastConnectionTime: new Date().getTime(),
  lastConnectionIp: '',
  name: '测试链接',
  database: 16,
  isAction: false,
  isOpen: false
}
redisList.push(mockRedis)
const redisOpen = (redis: Redis) => {
  if (!redis.isOpen) {
    redis.isOpen = true
    redis.isAction = true
  }
}
</script>

<style scoped>
.top_bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background-color: #dddddd;
  border: #dddddd solid 5px;
}

.top_bar div {
  cursor: pointer;
}

.top_bar_item {
  display: flex;
  flex-direction: row;
  align-content: center;
}
</style>
