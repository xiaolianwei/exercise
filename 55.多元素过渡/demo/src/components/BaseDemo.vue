<template>
    <div class="demo">
        <button @click="show = !show">click</button>    
        <transition>
            <div v-if="show" key="world">holle world</div>
            <div v-else key="dongdong">holle dongdong</div>
        </transition>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            show:true
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