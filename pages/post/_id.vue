<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img src="http://www.go2festival.com/wp-content/uploads/2016/04/berlin-4.jpg" alt="">
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eius voluptas tempore nostrum provident reprehenderit delectus totam ullam, accusamus cum recusandae asperiores labore blanditiis quisquam fugit soluta quasi! Labore, nam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iusto suscipit veritatis ex et perspiciatis error eum! Vel quas a, tempore totam odit reiciendis tenetur repellat illum asperiores explicabo blanditiis!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit labore quasi eaque facere aperiam ipsum, autem voluptate fuga nemo optio error, maiores iusto reprehenderit corrupti vero at beatae neque, itaque distinctio? Officiis, sed blanditiis quam at voluptatem dignissimos, voluptate fugit, pariatur perferendis iusto vero repellendus ipsa cumque consectetur facilis!</p>
    </main>
    <footer>
      <app-comment-form
        v-if="canAddComment"
        @created="createCommentHandler"
      />
      <div class="comments" v-if="true">
        <app-comment 
          v-for="comment in 4"
          :key="comment"
          :comment="comment"
        />
      </div>
      <div class="text-center" v-else>Комментариев нет</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'
export default {
  validate({params}) {
    return Boolean(params.id)
  },
  data() {
    return {
      canAddComment: true
    }
  },
  components: {
    AppComment, AppCommentForm
  },
  methods: {
    createCommentHandler() {
      this.canAddComment = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    max-width: 600px;
    margin: 0 auto;
  }
  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;   
  }
  .post-image {
    img {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }
  .post-header {
    margin-bottom: 1.5rem;
  }
  .post-content {
    margin-bottom: 2rem;

    p {
      margin-bottom: 0.5rem;
    }
  }
</style>


