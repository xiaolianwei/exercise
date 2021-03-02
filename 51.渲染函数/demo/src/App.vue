<template>
  <div id="app">
    <my-cmp :weight="1">标题1</my-cmp>
    <my-cmp :weight="2">标题2</my-cmp>
    <my-cmp :weight="3">标题3</my-cmp>
    <my-cmp :weight="4">标题4</my-cmp>
    <my-cmp :weight="5">标题5</my-cmp>
    <my-cmp :weight="6">标题6</my-cmp>
  </div>
</template>

<script>
import MyCmp from './components/MyCmp'
export default {
  name: 'App',
  components:{
    MyCmp,
  }
}
</script>

<style>

</style>
