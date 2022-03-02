<template>
    <div>
        <div class="block">
            <span class="demonstration">Default</span>
            <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="Select date and time"
                value-format="YYYY/MM/DD hh"
                format="YYYY/MM/DD hh"
                class="date"
            >
            </el-date-picker>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: ''
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>
    .el-scrollbar:last-child {
       display: none !important;
   }
</style>