<template>
<div class="page-wrap">
  <el-form 
    :model="controls" 
    :rules="rules" 
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h2 class="mb">Создание поста</h2>
    <el-form-item label="Введите название поста" prop="title">
      <el-input
        v-model.trim="controls.title"
      ></el-input>
    </el-form-item>
    <el-form-item label="Текст в формате .md или .html" prop="text">
      <el-input
        type="textarea"
        v-model.trim="controls.text"
        resize="none"
        :rows="10"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button 
        class="mt"
        type="primary" 
        native-type="submit"
        :loading="loading"
      >Создать</el-button>
    </el-form-item>
  </el-form>
</div>

</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      loading: false,
      controls: {
        title: '',
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
        ],
        title: [
          { required: true, message: 'Поле не должно быть пустым', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            title: this.controls.title,
            text: this.controls.text
          }

          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.title = ''
            this.controls.text = ''
            this.$message.success('Пост создан')
          } catch (err) {
            console.error(err)
          } finally {
            this.loading = false
          }

        }
      })
    }
  }
}
</script>


