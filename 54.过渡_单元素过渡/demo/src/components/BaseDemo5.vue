<template>
    <div class="demo">
        <button @click="show = !show">click</button>
        <transition
            type="animation"
            enter-active-class="animate__animated animate__backInRight enter-active"
            leave-active-class="animate__animated animate__bounceOutDown leave-active"
        >
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
    .enter,.leave-to{
        opacity: 0;
    }
    .enter-active,.leave-active{
        transition: all 10s;
    }
    .enter-to,.leave{
        opacity: 1;
    }
</style>