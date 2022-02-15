<template>
  <div class="about">
    <div class="change">
      <el-button  l-button type="primary" @click="changeName">{{title}}</el-button>
    </div>
    <div v-html="content" class="content"></div>
  </div>
</template>

<script>
import { getCurrentInstance, ref, onMounted } from 'vue';
export default {
  name: "WorkspaceJsonIndex",
  setup() {
    let { proxy } = getCurrentInstance();
    return {
      ...clickBtn(proxy)
    }
  }
};

// 点击
function clickBtn (proxy) {
  let flag = ref(true)
  let title = ref('下一页')
  const content = ref(0)
  
  function getAboutUs () {
    title.value = '下一页'
    proxy.Api.get('aboutUs').then(res => {
      content.value = res.data.data.content
    })
  }

  function changeName () {
    flag = !flag
    if (!flag) {
      title.value = '上一页'
      proxy.Api.get('contactUs').then((res) => {
        if (res.data.code) {
          content.value = res.data.data.content
        }
      })
    } else {
      getAboutUs()
    }
  }

  getAboutUs ()
  return { content, title, changeName, getAboutUs}
}
</script>

<style lang="scss" scoped>
.about {
  .change {
    display: flex;
    justify-content: flex-end;
  }
  .content {
    width: 70%;
    text-indent: 2rem;
    line-height: 2rem;
  }
}
</style>