<template>
  <view class="home">
    <!-- 顶部轮播图 -->
    <swiper class="carousel" indicator-dots="true" autoplay="true" interval="3000" circular="true">
      <swiper-item v-for="i in 3" :key="i">
        <image class="slide-img" mode="aspectFill" src="/static/logo.png" />
      </swiper-item>
    </swiper>

    <!-- 图标网格：两行三列 -->
    <view class="icons">
      <view class="icon-item" v-for="n in 6" :key="n" @click="onIconClick(n)">
        <image class="icon-img" src="/static/logo.png" mode="aspectFit" />
        <text class="icon-title">logo</text>
      </view>
    </view>

    <!-- 推文区域：占位样式，类似新闻头条 -->
    <view class="news-list">
      <text class="section-title">推文</text>
      <view class="news-item" v-for="i in 6" :key="'news-'+i" @click="onNewsClick(i)">
        <image class="news-thumb" src="/static/logo.png" mode="aspectFill" />
        <view class="news-body">
          <text class="news-title">测试新闻</text>
          <view class="news-footer">
            <text class="news-author">测试单位</text>
            <view class="news-icons">
              <view class="action-unit" v-for="a in 3" :key="'a-'+a">
                <image class="action-icon" src="/static/logo.png" mode="aspectFit" />
                <text class="action-count">27</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
// 占位点击处理：后续接入页面跳转
const onIconClick = (index) => {
  // TODO: 导航到对应页面，例如：uni.navigateTo({ url: '/pages/xxx/xxx' })
  console.log('icon clicked:', index)
}

// 推文占位点击处理
const onNewsClick = (index) => {
  // TODO: 跳转到推文详情页面
  console.log('news clicked:', index)
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
.carousel {
  width: 100%;
  height: 220px; /* 可根据需要调整高度 */
}
.slide-img {
  width: 100%;
  height: 100%;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  background: #fff;
}
.icon-item {
  width: 33.3333%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 12px 0;
}
.icon-img {
  width: 56px;
  height: 56px;
  margin-bottom: 8px;
}
.icon-title {
  font-size: 14px;
  color: #333;
}

.news-list {
  margin-top: 12px;
  background: #fff;
  padding: 12px 12px 18px 12px;
}
.section-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}
.news-item {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  min-height: 90px;
}
.news-thumb {
  width: 100px;
  height: 70px;
  border-radius: 6px;
  margin-right: 12px;
}
.news-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 110px; /* 给右侧绝对定位图标留空间 */
}
.news-title {
  font-size: 15px;
  color: #222;
  line-height: 20px;
}
.news-footer {
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.news-author {
  color: #999;
  font-size: 12px;
}
/* 将操作图标固定在每条推文的右下角 */
.news-icons {
  position: absolute;
  right: 12px;
  bottom: 10px;
  display: flex;
  align-items: center;
}
.action-unit {
  display: flex;
  align-items: center;
  margin-left: 8px;
}
.action-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.action-count {
  font-size: 12px;
  color: #999;
}

</style>
