export const state = () => ({

})

export const actions = {
	async fetchAdmin({}) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve([
					{title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: Math.random()},
					{title: 'Post 2', date: new Date(), views: 15, comments: [1, 2], _id: Math.random()}
				])
			}, 1000)
		})
	},

	async remove({}, id) {
		
	}
}