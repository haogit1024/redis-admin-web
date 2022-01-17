<template>
  <div class="app-contain">
    <div class="left-contain">
      <redis-nav />
    </div>
    <div class="right-contain">

    </div>
  </div>
</template>

<script setup lang="ts">
import RedisNav from '@/components/RedisNav.vue'

</script>
<style>
.app-contain {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.left-contain {
  width: 400px;
}
.right-contain {
  width: 100%;
}
</style>
