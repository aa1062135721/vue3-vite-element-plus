<template>
    <router-view></router-view>
</template>

<script>
    export default {
        created() {
            console.log(import.meta.env)
        },
    }
</script>

<style>
</style>
