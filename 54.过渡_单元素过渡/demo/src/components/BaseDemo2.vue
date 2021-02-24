<template>
    <div class="demo">
        <button @click="show = !show">click</button>
        <transition name="box1">
            <div class="box" v-if="show">hello world</div>
        </transition>
        <transition name="box2">
            <div class="box" v-if="show">hello world</div>
        </transition>
    </div> 
</template>

<script>
export default {
    data(){
        return {
            show: true,
        }
    }
}
</script>

<style scoped>
    button{
        margin-bottom: 10px;
    }
    .box{
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border: 1px solid red;
        color: red;
    }
    .box2-enter,.box2-leave-to{
        opacity: 0;
    }
    .box2-enter-active,.box2-leave-active{
        transition: opacity 1s;
    }
    .box2-enter-to,.box2-leave{
        opacity: 1;
    }

    .box1-enter,.box1-leave-to{
        width: 500px;
    }
    .box1-enter-active,.box1-leave-active{
        transition: width 1s;
    }
    .box1-enter-to,.box1-leave{
        width: 100px;
    }
</style>