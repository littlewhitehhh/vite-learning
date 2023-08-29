<script lang="ts" setup>
import pkg from '../../../package.json'
import style from './index.module.scss'
console.log('pkg', pkg)
</script>
<template>
	<div class="header">This is windi-Header</div>
	<div :class="style.header">This is Header</div>
	<div class="p-20px text-center text-cyan-400">
		vite version: {{ pkg.devDependencies.vite }}
	</div>
	<button
		bg="blue-4400 hover:blue-500 dark:blue-600 dark:hover:blue-600"
		text="sm white"
		font="mono light"
		p="y-2 x-4"
		border="2 rounded blue-200"
	>
		测试
	</button>

	<div class="flex-c">flex布局</div>
	<div class="flexDiv">scss flex布局</div>
</template>

<style scoped lang="scss">
@import './index.scss';
// .header {
//   color: $theme-color;
// }
</style>
