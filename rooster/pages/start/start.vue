<template>
	<view :class="['start-container', { 'fade-out': isFading }]">
		<image src="/static/logo.png"></image>
	</view>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isFading = ref(false)
const fadeDuration = 400
let displayTimer = null
let navTimer = null

onMounted(() => {
	displayTimer = setTimeout(() => {
		// 开始淡出
		isFading.value = true
		// 等待淡出动画完成后再跳转
		navTimer = setTimeout(() => {
			uni.reLaunch({ url: '/pages/carousel/carousel' })
		}, fadeDuration)
	}, 2000)
})

onUnmounted(() => {
	if (displayTimer) clearTimeout(displayTimer)
	if (navTimer) clearTimeout(navTimer)
})
</script>

<style>
.start-container {
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
  background:#fff;
  transition: opacity 0.4s ease;
  opacity:1;
}
.start-container.fade-out {
  opacity:0;
}
.start-container image {
  width: 120px;
  height: 120px;
}
</style>
