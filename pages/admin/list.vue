<template>
  <el-table
    :data="posts"
    style="width: 100%"
  >
    <el-table-column
      prop="title"
      label="Название"
    >
	  </el-table-column>
    <el-table-column
      label="Дата"
      width="180">
      <template slot-scope="{row: {date}}">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(date).toLocaleDateString() }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Просмотры"
    >
      <template slot-scope="{row: {views}}">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>	
	  </el-table-column>
	  <el-table-column
		  label="Комментарии"
	  >
      <template slot-scope="{row: {comments}}">
        <i class="el-icon-tickets"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>	
	  </el-table-column>
    <el-table-column
      label="Действия">
      <template slot-scope="{row}">
        <el-button
          icon="el-icon-edit"
          type="primary"
          circle
          @click="open(row._id)"></el-button>
        <el-button
		      icon="el-icon-delete"
          type="danger"
		      circle
          @click="remove(row._id)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store}) {
	  const posts = await store.dispatch('post/fetchAdmin')
	  return {posts}
  },
  methods: {
	  open(id) {
		  console.log(id)
	  },
	  remove(id) {
		  console.log(id) 
	  }
  }
}
</script>

<style lang="scss" scoped>

</style>

