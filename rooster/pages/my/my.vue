<template>
  <view class="profile">
    <!-- header -->
    <view class="header">
      <image class="avatar" src="/static/logo.png" mode="aspectFill" />
      <view class="user-info">
        <text class="username">测试项目</text>
        <text class="userid">测试项目</text>
      </view>
    </view>

    <!-- 快捷统计（视觉占位） -->
    <view class="stats">
      <view class="stat" v-for="i in 3" :key="i" @click="onEntryClick('测试项目')">
        <text class="stat-label">测试项目</text>
        <text class="stat-value">27</text>
      </view>
    </view>

    <!-- 功能列表：每项右侧统一显示“跳转入口” -->
    <view class="menu">
      <view class="menu-item" v-for="i in 5" :key="i" @click="onEntryClick('测试项目')">
        <view class="menu-left">
          <image class="menu-icon" src="/static/logo.png" mode="aspectFill" />
        </view>
        <text class="menu-title">测试项目</text>
        <view class="menu-action">
          <text class="entry">跳转入口</text>
          <text class="arrow">›</text>
        </view>
      </view>
    </view>

  </view>
</template>

<script setup>
import { reactive } from 'vue'
const onEntryClick = (key) => {
  // TODO: 替换为实际跳转，例如：uni.navigateTo({ url: '/pages/xxx/xxx' })
  console.log('跳转入口 点击：', key)
}
</script>

<style scoped>
.profile {
  padding: 18px;
  background: #f3f9ff; /* 浅蓝背景 */
  min-height: 100vh;
}
.header {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 14px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(47,149,255,0.06);
}
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50px;
  margin-right: 12px;
}
.user-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.username {
  font-size: 18px;
  color: #000;
  font-weight: 700;
}
.userid {
  font-size: 12px;
  color: #000;
  opacity: 0.7;
  margin-top: 6px;
}

.stats {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
}
.stat {
  background: #fff;
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(47,149,255,0.04);
}
.stat:last-child { margin-right: 0; }
.stat-value { font-size: 16px; color: #000; font-weight: 700; }
.stat-label { font-size: 12px; color: #000; margin-top: 6px; opacity: 0.85; }

.menu {
  margin-top: 14px;
}
.menu-item {
  background: #fff;
  padding: 12px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  border: 1px solid rgba(47,149,255,0.06);
}
.menu-left { margin-right: 12px; }
.menu-icon { width: 36px; height: 36px; border-radius: 6px; }
.menu-title { font-size: 15px; color: #000; flex: 1; margin-left: 6px; }
.menu-action { display: flex; align-items: center; }
.entry { font-size: 13px; color: #000; margin-right: 8px; font-weight: 600 }
.arrow { color: #000; font-size: 18px; opacity: 0.5; }

/* 小屏微调 */
@media (max-width: 360px) {
  .avatar { width: 56px; height: 56px; }
  .username { font-size: 16px }
  .menu-icon { width: 30px; height: 30px }
}
</style>
