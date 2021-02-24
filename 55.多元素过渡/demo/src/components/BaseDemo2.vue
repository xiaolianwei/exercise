<template>
    <div class="demo">
        <button @click="handleClick">click</button>    
        <transition>
            <div :key="keyName">{{ keyName }}</div>
            <!-- <div v-else key="dongdong">holle dongdong</div> -->
        </transition>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            show:true,
            keyName: 'world'
        }
    },
    methods:{
        handleClick(){
            this.keyName = this.keyName === 'world' ? 'dongdong' : 'world';
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