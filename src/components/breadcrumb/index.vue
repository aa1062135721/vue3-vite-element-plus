<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: item.path }" v-for="(item, index) in routeList" :key="index">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
   data () {
       return {
           routeList: []
       }
   },
   mounted() {
       this.getRouteList()
   },
   watch: {
       $route() {
           this.getRouteList()
       }
   },

   methods: {
        getRouteList () {
            this.routeList = JSON.parse(localStorage.getItem('routeList'))
            // console.log(this.routeList)
        }   
   }
};
</script>

<style lang="scss" scoped>
    .breadcrumb {
        .el-breadcrumb__item {
            font-size: 1rem;
            font-family:Verdana, Geneva, Tahoma, sans-serif;
            margin-bottom: 1rem;
        }
    }
</style>