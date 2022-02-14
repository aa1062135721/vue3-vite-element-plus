<template>
  <div class="about">
    <div v-html="content" class="content"></div>
    <div>
      <p>用户名： {{userInfo.userName}}</p>
      <p>密码： {{userInfo.passWord}}</p>
    </div>
    <el-button type="primary" @click="changeName">点击</el-button>
  </div>
</template>

<script>
import { getCurrentInstance, ref, reactive, toRefs } from 'vue';
export default {
  name: "WorkspaceJsonIndex",
  setup() {
    let { proxy } = getCurrentInstance();
    let content = ref(0)
    let { userInfo, changeName } = clickBtn()
    return {
      userInfo,
      changeName,
      ...getAboutUs(proxy, content),
    }
  }
};

// 获取关于我们
function getAboutUs (http, content) {
  http.Api.get('aboutUs').then(res => {
    content.value = res.data.data.content
  })
  return { content }
}

// 点击
function clickBtn (item) {
  let flag = ref(true)
  let userInfo = reactive({
    userName: 'admin',
    passWord: '123456'
  })
  function changeName () {
    flag = !flag
    flag ? (userInfo.userName = 'admin', userInfo.passWord = '123456') : (userInfo.userName = '李四', userInfo.passWord = '147258')
  }
  return { userInfo, changeName }
}
</script>

<style lang="scss" scoped>
.about {
  .content {
    width: 50%;
    text-indent: 2rem;
    line-height: 2rem;
  }
}
</style>