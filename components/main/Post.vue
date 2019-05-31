<template>
  <article class="post">
    <el-card
      shadow="hover"
      :body-style="{padding: 0}"
      class="post"
    >
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img src="http://www.go2festival.com/wp-content/uploads/2016/04/berlin-4.jpg" alt="" class="post-img">
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Open</el-button>
      <span>
        <i class="el-icon-message"></i>
        12
      </span>
    </footer>
    </el-card>
  </article>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 'test-id'
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 2rem;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }

  .post-body {
    
  }

  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
</style>


