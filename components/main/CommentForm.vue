<template>
  <el-form 
    :model="controls" 
    :rules="rules" 
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h2>Добавить комментарий</h2>
    <el-form-item label="Имя" prop="name">
      <el-input v-model.trim="controls.name"></el-input>
    </el-form-item>
    <el-form-item label="Текст комментария" prop="text">
      <el-input
        type="textarea"
        v-model="controls.text"
        resize="none"
        :rows="2"
      >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button 
        type="primary" 
        native-type="submit"
        :loading="loading"
      >Create</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Введите текст', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          
          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: ''
          }

          try {
            setTimeout(() => {
              this.$message.success('Комментарий добавлен')
              this.$emit('created')
            }, 2000)

          } catch (e) {
            console.log(e)
            this.loading = false
          }

          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }


}
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: .5rem;
    font-size: 1rem;
  }
</style>


