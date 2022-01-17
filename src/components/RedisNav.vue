<template>
  <div class="app-contain">
    <div class="top_bar">
      <div class="top_bar_item"><div><el-icon><circle-plus-filled /></el-icon></div><div>添加一个链接</div></div>
      <div class="top_bar_item"><div><el-icon><upload-filled /></el-icon></div><div>导入</div></div>
      <div class="top_bar_item"><div><el-icon><download /></el-icon></div><div>导出</div></div>
    </div>
  </div>
  <div class="nav">

  </div>
</template>

<script setup lang="ts">
import { CirclePlusFilled, UploadFilled, Download } from '@element-plus/icons-vue'
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
