<template>
	<div>
  	<h1>Аналитика</h1>
		<app-analitycs-chart
			title="Количество просмотров"
			:labels="views.labels"
			:data="views.data"
		></app-analitycs-chart>
		<app-analitycs-chart
			title="Количество comments"
			:labels="comments.labels"
			:data="comments.data"
		></app-analitycs-chart>
	</div>
</template>

<script>
import AppAnalitycsChart from '@/components/admin/AnalitycChart'
export default {
  layout: 'admin',
	middleware: ['admin-auth'],
	async asyncData({store}) {
		try {
			const {views, comments} = await store.dispatch('post/getAnalitycs')
			return {views, comments}
		} catch (err) {
			console.log(err)
		}
	},
	components: {AppAnalitycsChart}
}
</script>

