<template>
    <div class="loginPage">
        <div class="content">
            <p class="title">xxxx智慧管理平台</p>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm" style="width: 500px" label-position="left">
                <el-form-item label="用户名" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" @keydown.native.enter="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="btn">
                        <div>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        </div>
                        <div>
                            <el-button @click="resetForm('ruleForm')" class="reset">重置</el-button>
                        </div>
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        ruleForm: {
          pass: '',
          checkPass: '',
        },
        rules: {
            pass: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 2, max: 12, message: '长度在 2 到 8 个字符', trigger: 'blur' }
                ],
            checkPass: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            let result = ''
            for (var i = 0; i < 24; i++) {
                result += str[Math.floor(Math.random() * str.length)]
            }
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    sessionStorage.setItem('token', result)
                    this.$router.replace({path: '/'})
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style lang="scss" scoped>
.loginPage {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background: url('@/images/login_bg.jpg') no-repeat;
    background-size: cover;
    .content {
        width: 80%;
        margin-top: 20vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            font-size: 3.5rem;
            color: #ffffff;
        }
        .el-form {
            margin-top: 2.5rem;
        }
        ::v-deep .el-form-item__label {
            color: #ffffff;
            font-size: 1.2rem;
        }
        .btn {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            font-size: 0;
            div {
                width: 100%;
                button {
                    width: 100%;
                    margin-bottom: 1rem;
                }
            }
        }
    }
}
</style>