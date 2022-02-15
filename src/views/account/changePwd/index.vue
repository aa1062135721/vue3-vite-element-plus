<template>
<div class="changePwd">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleFormRef" label-width="100px" class="demo-ruleForm" style="width: 500px">
    <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="checkForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
    </el-form-item>
    </el-form>
</div>
</template>

<script>
  import { reactive, getCurrentInstance } from 'vue'
  export default {
    setup(props) {
      const { proxy } = getCurrentInstance()  // 获取组件实例、上下文
      return {
        ...submitForm(proxy),
      }
    }
  }

  function submitForm (proxy) {
    // 表单验证方法
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 6 || value.length > 12) {
          callback(new Error("密码长度应在6到12位之间"))
      } else {
        if (ruleForm.checkPass !== '') {
          proxy.$refs.ruleFormRef.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    let ruleForm = reactive({
      pass: '',
      checkPass: ''
    })

    //  规则验证 
    const rules = reactive({
      pass: [
        { validator: validatePass, trigger: 'blur' }
      ],
      checkPass: [
        { validator: validatePass2, trigger: 'blur' }
      ]
    })

    // 提交表单
    function checkForm () {
      proxy.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          console.log(ruleForm)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }

    // 重置表单
    function resetForm () {
      proxy.$refs.ruleFormRef.resetFields()
    }

    return { ruleForm, rules, checkForm, resetForm }
  }
</script>

<style lang="scss" scoped>
.changePwd {
    padding-top: 2rem;
}
</style>
