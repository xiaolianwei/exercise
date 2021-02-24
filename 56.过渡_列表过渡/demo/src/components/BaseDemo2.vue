<template>
  <div class="demo">
    <button @click="handleAdd">添加</button>
    <button @click="handleRemove">移除</button>
    <button @click="handleShuffle">洗牌</button>
    <br />
    <transition-group tag="ul">
      <li v-for="num in list" :key="num">{{ num }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      list: [1,2,3,4,5,6,7,8,9,10],
      nextNum: 11,
    };
  },
  methods:{
    handleAdd(){
      let randomIndex = Math.floor(Math.random() * this.list.length);
      this.list.splice(randomIndex,0,this.nextNum);
      this.nextNum ++;
    },
    handleRemove(){
      let randomIndex = Math.floor(Math.random() * this.list.length);
      this.list.splice(randomIndex,1);
    },
    handleShuffle(){
      this.list.sort( () => Math.random() - 0.5);
    }
  }
};
</script>

<style scoped>
  button{
    margin-bottom: 10px;
    margin-right: 10px;
  }
  ul,li{
    padding: 0;
    margin: 0;
  }
  li{
    list-style: none;
    display: inline-block;
    margin-right: 10px;
  }
  .v-enter,.v-leave-to{
      opacity: 0;
      transform: translateY(30px);
  }
  .v-enter-active,.v-leave-active{
      transition: all .3s;
  }
  .v-enter-to,.v-leave{
      opacity: 1;
      transform: translateY(0px);
  }
  .v-move{
    transition: transform .3s;
  }
</style>