<template>
  <el-card
    shadow="always"
    :style="{width: '500px'}"
  >
    <el-form 
      :model="controls" 
      :rules="rules" 
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h2>Войдите в систему</h2>
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login"></el-input>
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input
          v-model.trim="controls.password"
          type="password"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button 
          class="mt"
          type="primary" 
          native-type="submit"
          :loading="loading"
        >Войти</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Введите логин', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Введите пароль', trigger: 'blur' },
          { min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur' }
        ]
      }
    }
  },

  mounted() {
    const {message} = this.$route.query

    switch (message) {
      case 'login':
        this.$message.warning('Для начала войдите в систему')
        break
      case 'logout':
        this.$message.info('Вы покинули систему')
        break
    }

  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }

            await this.$store.dispatch('auth/login', formData)
            this.$router.push('/admin')

          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

