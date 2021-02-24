<template>
  <div class="demo">
    <button @click="show = !show">click</button>
    <transition-group>
      <div key="world" v-if="show">holle world</div>
      <div key="dongdong" v-if="show">holle dongdong</div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
    .v-enter,.v-leave-to{
        opacity: 0;
    }
    .v-enter-active,.v-leave-active{
        transition: all .3s;
    }
    .v-enter-to,.v-leave{
        opacity: 1;
    }
</style>