<template>
  <div>
    <p>skfljslefj</p>
    <p>{{ msg }}</p>
    <son />
    <div v-for="num in 25" :key="num"></div>
  </div>
</template>

<script>
import Son from './son.vue'
export default {
    components:{
        Son 
    },
    data(){
 
        return {
            msg: 'abc'
        }
    }
}
</script>

<style>
p {
  background-color: #008c8c;
}
</style>