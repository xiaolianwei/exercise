<template>
    <div class="demo">
        <button @click="show = !show">click</button>
        <transition name="box" :duration="10000" appear>
            <div class="box" v-show="show" >
                <transition name="span">
                    <span v-if="show">holle world</span>
                </transition>
            </div>
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
    }
    .box-enter,.box-leave-to{
        opacity: 0;
    }
    .box-enter-active,.box-leave-active{
        transition: all 3s;
    }
    .box-enter-to,.box-leave{
        opacity: 1;
    }

    .span-enter,.span-leave-to{
        color: red;
    }
    .span-enter-active,.span-leave-active{
        transition: color 10s;
    }
    .span-enter-to,.span-leave{
        color: black;
    }
</style>