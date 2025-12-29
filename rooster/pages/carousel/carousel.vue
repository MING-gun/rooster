<template>
  <view class="carousel-wrapper">
    <view class="skip" @click.stop="goLogin">跳过</view>

    <swiper class="swiper" indicator-dots="true" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" autoplay="false" @change="onChange">
      <swiper-item v-for="(img, idx) in imgs" :key="idx">
        <image class="slide-image" :src="img" mode="aspectFill" />

        <view v-if="idx === imgs.length - 1" class="login-button" @click.stop="goLogin">点击登录</view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const imgs = ref(["/static/logo.png", "/static/logo.png", "/static/logo.png"])
const current = ref(0)

const onChange = (e) => {
  current.value = e.detail.current
}

const goLogin = () => {
  uni.navigateTo({ url: '/pages/login/login' })
}
</script>

<style>
.carousel-wrapper {
  position: relative;
  height: 100vh;
  background: #000;
}
.swiper {
  height: 100vh;
}
.slide-image {
  width: 100%;
  height: 100%;
  display: block;
}
.skip {
  position: absolute;
  top: 28px;
  right: 16px;
  z-index: 20;
  padding: 6px 10px;
  background: rgba(0,0,0,0.45);
  color: #fff;
  border-radius: 18px;
  font-size: 14px;
}
.login-button {
  position: absolute;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
  z-index: 20;
  padding: 12px 34px;
  background: #007AFF;
  color: #fff;
  border-radius: 24px;
  font-size: 16px;
  text-align: center;
}
</style>