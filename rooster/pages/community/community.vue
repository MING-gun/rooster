<template>
  <view class="community">
    <!-- 标题 -->
    <view class="header">
      <text class="title">社区测试</text>
    </view>

    <!-- 列表占位 -->
    <view class="post-list">
      <view class="post-item" v-for="i in 6" :key="'post-'+i" @click="onPostClick(i)">
        <image class="post-thumb" src="/static/logo.png" mode="aspectFill" />
        <view class="post-content">
          <text class="post-title">社区测试</text>
          <text class="post-desc">社区测试</text>
        </view>

        <view class="post-actions">
          <view class="action" v-for="a in 3" :key="'act-'+a" @click.stop="onActionClick(a,i)">
            <image class="act-icon" src="/static/logo.png" mode="aspectFit" />
            <text class="act-text">27</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部占位：加载更多 -->
    <view class="load-more">更多 · 社区测试</view>
  </view>
</template>

<script setup>
// 占位点击处理
const onPostClick = (index) => {
  // TODO: 跳转到帖子详情
  console.log('post clicked:', index)
}

const onActionClick = (action, index) => {
  // action: 1/2/3 对应点赞/评论/分享（占位）
  console.log('action', action, 'on post', index)
}
</script>

<style scoped>
.community {
  padding: 14px;
  background: #f3f8fc; /* 轻微蓝灰背景，增强层次 */
  min-height: 100vh;
}
.header {
  padding: 14px 8px;
  text-align: center;
  background: transparent;
}
.title {
  font-size: 18px;
  color: #0b1a2b;
  font-weight: 700;
  padding: 8px 0;
}
.post-list { margin-top: 12px; }
.post-item {
  display: flex;
  align-items: flex-start;
  padding: 14px;
  border-radius: 12px;
  background: #fff;
  margin-bottom: 12px;
  position: relative;
  box-shadow: 0 6px 18px rgba(16,78,158,0.06);
  transition: box-shadow 0.18s ease, transform 0.12s ease;
  overflow: hidden;
}

.post-thumb {
  width: 96px;
  height: 68px;
  border-radius: 8px;
  margin-right: 14px;
  flex-shrink: 0;
  background: #eee;
}
.post-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 130px; /* 给动作区留出空间 */
}
.post-title {
  font-size: 16px;
  color: #000;
  font-weight: 700;
  line-height: 20px;
}
.post-desc {
  font-size: 13px;
  color: #444;
  margin-top: 6px;
  line-height: 18px;
}
.post-meta {
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  gap: 10px;
}
.post-actions {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
}
.action {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
}
.act-icon { width: 18px; height: 18px; margin-right: 6px; opacity: 0.95; }
.act-text {
  font-size: 12px;
  color: #000;
  padding: 0;
  border-radius: 0;
  font-weight: 600;
  opacity: 0.85;
}
.load-more {
  text-align: center;
  color: #000;
  opacity: 0.9;
  margin: 18px 0;
}

/* 小屏优化 */
@media (max-width: 360px) {
  .post-thumb { width: 72px; height: 52px }
  .title { font-size: 16px }
  .post-item { padding: 12px; border-radius: 10px; }
  .post-content { padding-right: 100px; }
  .action { padding: 3px 4px }
  .act-text { padding: 0; font-size: 11px; }
}
</style>
