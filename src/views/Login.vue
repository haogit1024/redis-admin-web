<template>
  <div class="app-contain">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="请输入密码" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" >登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const form = reactive({
  username: '',
  password: ''
})
</script>

<style scoped>
.app-contain {
  width: 400px;
  margin: 0 auto;
  padding: 100px 0;
}
</style>
