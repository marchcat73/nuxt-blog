export const actions = {
	async create({commit}, data) {
		try {
			return await this.$axios.$post('/api/comment', data)
		} catch (err) {
      commit('setError', err, {root: true})
      throw err
		}
	}
}