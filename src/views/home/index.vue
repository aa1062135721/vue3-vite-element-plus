<template>
    <div class="home">
        <div class="head">
            <Vheader></Vheader>
        </div>
        <div class="content">
            <div class="left">
                <VleftNav></VleftNav>
            </div>
            <div class="main">
                <breadcrumb></breadcrumb>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// import header from '@/views/head/index.vue'
import VleftNav from '@/components/leftNav/index.vue'
import Vheader from '@/components/head/index.vue';
import breadcrumb from '@/components/breadcrumb/index.vue';
export default {
    name: 'WorkspaceJsonIndex',
    components: {
        Vheader,
        VleftNav,
        breadcrumb
    }
}
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    .content {
        display: flex;
        .main {
            flex: 1;
            padding: 0.5rem;
        }
    }
}
</style>