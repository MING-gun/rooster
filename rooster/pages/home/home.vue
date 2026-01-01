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
  </view>
</template>

<script setup>
// 占位点击处理：后续接入页面跳转
const onIconClick = (index) => {
  // TODO: 导航到对应页面，例如：uni.navigateTo({ url: '/pages/xxx/xxx' })
  console.log('icon clicked:', index)
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

</style>
