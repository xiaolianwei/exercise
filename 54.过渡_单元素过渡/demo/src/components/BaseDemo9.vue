<template>
    <div class="demo">
        <button @click="show = !show">click</button>
        <transition 
            name="box"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"
        >
            <div class="box" v-show="show" >holle world</div>
        </transition>
    </div> 
</template>

<script>
export default {
    data(){
        return {
            show: true,
            x: 200
        }
    },
    methods:{
        beforeEnter(e){
            e.style.transform = 'translateX(200px)';
        },
        enter(e,done){
            done.canceled = true;
            let timer = setInterval(() => {
                this.x -= 2;
                e.style.transform = `translate(${this.x}px)`;
                if(this.x <= 0){
                    clearInterval(timer);
                    done()
                }
            },16)
        },
        afterEnter(){
            this.x = 200;
            console.log('after-enter');
        },
        enterCancelled(){
            console.log('enterCancelled');
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
    
</style>