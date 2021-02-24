<template>
    <transition :mode="mode">
      <slot></slot>
    </transition>
</template>

<script>
export default {
  props:['mode'],
  data(){
    return {
      // mode2: 'out-in'
    }
  },
  created(){
    console.log(this.mode);
  }
}
</script>

<style scoped>
  .v-enter,.v-leave-to{
    opacity: 0;
  }
  .v-enter-active,.v-leave-active{
    transition: opacity 1s;
  }
  .v-enter-to,.v-leave{
    opacity: 1;
  }
</style>