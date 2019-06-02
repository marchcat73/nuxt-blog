<template>
  <el-menu
    router
    :default-active="$route.path"
    class="admin-menu"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit"></i>
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-s-custom"></i>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-d-arrow-left"></i>
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
  .admin-menu {
    height: 100%;
  }
</style>

