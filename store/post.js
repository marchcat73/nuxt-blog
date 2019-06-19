
export const actions = {
	async fetchAdmin({commit}) {
		try {
			return await this.$axios.$get('/api/post/admin')
		} catch (err) {
      commit('setError', err, {root: true})
      throw err
		}
	},

	async fetch({commit}) {
		try {
			return await this.$axios.$get('/api/post')
		} catch (err) {
      commit('setError', err, {root: true})
      throw err
		}
	},

	async remove({commit}, id) {
		try {
			return await this.$axios.$delete(`/api/post/admin/${id}`)
		} catch (err) {
      commit('setError', err, {root: true})
      throw err
		}
  },
  
	async update({commit}, {id, text}) {
		try {
			return await this.$axios.$put(`/api/post/admin/${id}`, {text})
		} catch (err) {
      commit('setError', err, {root: true})
      throw err
		}
  },
  
  async create({commit}, {title, text, image}) {
	  try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      return await this.$axios.$post('/api/post/admin', fd)

    } catch (err) {
      commit('setError', err, {root: true})
      throw err
    }

  },

	async fetchAdminById({commit}, id) {
		try {
			return await this.$axios.$get(`/api/post/admin/${id}`)
		} catch (err) {
      commit('setError', err, {root: true})
      throw err
		}
	},

	async fetchById({commit}, id) {
		try {
			return await this.$axios.$get(`/api/post/${id}`)
		} catch (err) {
      commit('setError', err, {root: true})
      throw err
		}
	},

	async addView({commit}, {views, _id}) {
		try {
			return await this.$axios.$put(`/api/post/add/view/${_id}`, {views})
		} catch (err) {
      commit('setError', err, {root: true})
      throw err
		}
	}

}