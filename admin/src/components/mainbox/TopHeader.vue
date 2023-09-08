<template>
    <el-header>
        Header
        <button @click="handeleCollapsed">
            点击
        </button>
    </el-header>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()

const handeleCollapsed = () =>{
    store.commit("changeCollapsed")
}
</script>