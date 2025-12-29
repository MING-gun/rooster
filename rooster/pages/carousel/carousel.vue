<template>
	<view :class="['carousel-container', { 'fade-in': isVisible }]">
		carousel
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const isVisible = ref(false)
onMounted(() => {
	// 小延迟以触发过渡
	setTimeout(() => {
		isVisible.value = true
	}, 50)
})
</script>

<style>
.carousel-container {
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#fff;
  opacity:0;
  transition: opacity 0.4s ease;
}
.carousel-container.fade-in {
  opacity:1;
}
</style>