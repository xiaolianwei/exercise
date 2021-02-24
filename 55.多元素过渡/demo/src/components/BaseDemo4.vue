<template>
    <div class="demo">
        <button @click="handleClick">click</button>    
        <transition mode="out-in">
            <component :is="cmpName"></component>
        </transition>
    </div>    
</template>

<script>

import Demo1 from './BaseDemo4-1';
import Demo2 from './BaseDemo4-2';

export default {
    components:{
        Demo1,
        Demo2
    },
    data(){
        return {
            cmpName: 'demo1'
        }
    },
    methods:{
        handleClick(){
            this.cmpName = this.cmpName === 'demo1' ? 'demo2' : 'demo1';
        }
    }
}
</script>

<style scoped>
    .v-enter,.v-leave-to{
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition: all 2s;
    }
    .v-enter-to,.v-leave{
        opacity: 1;
    }
</style>