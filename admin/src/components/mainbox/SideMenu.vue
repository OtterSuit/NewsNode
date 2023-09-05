<template>
    <el-aside width="200px">
        <el-menu>
        <el-menu-item index="/index">
          <el-icon>
            <icon-menu />
        </el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/center">
          <el-icon>
            <icon-menu />
        </el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-sub-menu index="/user-manage">
          <template #title>
            <el-icon><location /></el-icon>
            <span>用户管理</span>
          </template>
            <el-menu-item index="/user-manage/adduser">添加用户</el-menu-item>
            <el-menu-item index="/user-manage/userlist">用户列表</el-menu-item>
        </el-sub-menu>
        </el-menu>
        Aside</el-aside>
</template>

<style lang="scss" scoped>
.el-aside{
    height: 100vh;
}
</style>