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
        <div v-show="redis.isConnected" class="redis_item_header_icon">
          <el-icon v-show="!redis.isOpen" @click="redis.isOpen = true"><arrow-right-bold /></el-icon>
          <el-icon v-show="redis.isOpen" @click="redis.isOpen = false"><arrow-down-bold /></el-icon>
        </div>
        <div @click="redisOpen(redis)">
          <el-icon><list /></el-icon>{{ redis.name }}
        </div>
      </div>
      <div class="redis_item_body" v-show="redis.isOpen">
        <div class="redis_item_db" v-for="(db, index) in redis.redisDatabases" :key="index">
          <div>
            <span v-show="db.isInit">
              <el-icon v-show="!db.isOpen" @click="db.isOpen = true"><arrow-right-bold /></el-icon>
              <el-icon v-show="db.isOpen" @click="db.isOpen = false"><arrow-down-bold /></el-icon>
            </span>
              <span @click="redisDatabaseClick(db)">
              <el-icon><coin /></el-icon><span>{{ db.index }}</span><span v-show="db.isInit">({{ db.keys.length }})</span>
            </span>
          </div>
          <div class="database_keys" v-show="db.isInit && db.isOpen">
            <div v-for="(key, index) in db.keys" :key="index">
              <div class="database_key" @click="handleKeyClick(redis.id, db.index, key)">
                <div>{{ key }}</div>
                <div class="icon"><el-icon><delete-filled /></el-icon></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CirclePlusFilled, UploadFilled, Download, List, ArrowRightBold, ArrowDownBold, Coin, DeleteFilled } from '@element-plus/icons-vue'
import Redis from '@/modules/Redis'
import RedisDatabase from "@/modules/RedisDatabase"
import { reactive } from 'vue'
import { useStore } from "vuex"
import { mutationTypes } from "@/store/store-type"
import { mockRedisList, mockKeyList } from "@/mock/MockData"

const store = useStore()
// 模拟数据
const initRedisDatabase = (database: number) => {
  const databases: RedisDatabase[] = reactive([])
  for (let i = 0; i < database; i++) {
    const redisDatabase = {
      index: i,
      isOpen: false,
      keys: [],
      isInit: false
    }
    databases.push(redisDatabase)
  }
  return databases
}
const redisList: Redis[] = reactive([])
// redisList.push(...mockRedisList)
// mockRedisList.forEach(db => {
//   db.redisDatabases = initRedisDatabase(db.databases)
//   redisList.push(db)
// })
for (let i = 0; i < mockRedisList.length; i++) {
  const db = mockRedisList[i]
  db.redisDatabases = initRedisDatabase(db.databases)
  redisList.push(db)
}

const redisOpen = (redis: Redis) => {
  if (!redis.isOpen) {
    redis.isOpen = true
    redis.isConnected = true
  }
}

const redisDatabaseClick = (database: RedisDatabase) => {
  if (!database.isInit) {
    // TODO get keys
    database.keys.push(...mockKeyList)
    database.isInit = true
  }
  database.isOpen = true
}

const handleKeyClick = (id: number, db: number, key: string) => {
  store.commit(
      mutationTypes.REDIS_KEY_CLICK,
      {
        id: id,
        dbIndex: db,
        key: key
      }
  )
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

.redis_item_header {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.redis_item_header_icon {
  /* TODO 让icon没有内容的时候也占据一定的宽度 */
}

.redis_item_db {
  margin-left: 15px;
  margin-bottom: 5px;
}

.redis_item_db span {
  cursor: pointer;
}

.database_keys {
  margin-left: 15px;
}

.database_key {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.database_key div {
  cursor: pointer;
}

</style>
