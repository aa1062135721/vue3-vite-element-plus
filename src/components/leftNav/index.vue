<template>
    <div class="leftNav">
        <el-menu 
        class="el-menu-vertical-demo"
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse"
        background-color="rgb(77, 77, 77)"
        active-text-color="rgb(255, 255, 255)"
        text-color="rgb(255, 255, 255)"
        menu-trigger="click"
        :router="true"

        :collapse-transition="true"
        >
        <div class="title">
            <img :src="isCollapse ? 'src/images/leftArrow.png': 'src/images/rightArrow.png'" @click="isCollapse = !isCollapse">
        </div>
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <template #title>首页</template>
            </el-menu-item>
            <el-sub-menu index='/account'>
                <template #title>
                    <i class="el-icon-s-custom"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/account/changePassword">修改密码</el-menu-item>
                <el-menu-item index="/account/addUser">添加用户</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/about">
                <i class="el-icon-phone-outline"></i>
                <template #title>关于我们</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
setup() {
    const isCollapse = ref(true);
    const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
    };
    return {
        isCollapse,
        handleOpen,
        handleClose,
    };
},
});
</script>

<style lang="scss" scoped>
.leftNav {
    height: 100%;
    .title {
        text-align: right;
        padding-right: 20px;
        img {
            margin-top: 10px;
            width: 30px;
        }
    }
    .el-menu {
        height: 100%;
    }
    .el-menu--collapse {
        // width: 64px !important;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-sub-menu .el-menu-item {
        margin-left: -1px;
    }
}
</style>