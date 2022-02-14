<template>
    <div class="header">
        <div class="left">
            <p>xxxx智慧平台</p>
        </div>
        <div class="right">
            <p>用户: {{userName}}</p>
            <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                 <el-avatar src="https://img1.baidu.com/it/u=3923367122,704358987&fm=26&fmt=auto&gp=0.jpg" fit="contain"></el-avatar>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item icon="el-icon-s-custom" @click="changeUser">修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-switch-button" @click="outLogin">退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
export default {
    setup() {
        let userName = ref('吴签')
        let router = useRouter()
        function changeUser () {
            router.push({path: '/account/changePassword'})
        }
        return { userName, changeUser }
    },

    methods: {
        outLogin () {
            this.$confirm('是否确定退出登陆?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    sessionStorage.clear()
                    this.$router.replace('/login')
                }).catch(() => {});
        }
    },
};
</script>

<style lang="scss" scoped>
.header {
    padding: 10px 20px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        font-size: 24px;
    }
    .right {
        display: flex;
        align-items: center;
        p {
            margin-right: 15px;
        }
    }
}
</style>