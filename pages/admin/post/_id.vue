<template>
	<div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/admin/list">Список</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.params.id}}</el-breadcrumb-item>

    </el-breadcrumb>
	</div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>
