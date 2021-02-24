<template>
  <div id="app">
    <button @click="show = !show">按钮</button>
    <transition-single mode="out-in">
      <div key="world" v-if="show">holle world</div>
      <div key="dongdong" v-else>holle dongdong</div>
    </transition-single>
  </div>
</template>

<script>
import TransitionSingle from  './components/TransitionSingle'
export default {
  name: 'App',
  components: {
    TransitionSingle
  },
  data(){
    return {

      show: true,
    }
  }
}
</script>

<style>

</style>
