<template>
	<view>
		<text @click="goHome">login</text>
	</view>
</template>

<script setup>
const goHome = () => {
	uni.switchTab({
		url: '/pages/home/home',
		success: () => {
			console.log('欢迎登录')
		},
		fail: (e) => {
			console.error('跳转失败', e)
		}
	})
}
</script>

<style>

</style>
