<template>
  <ul>
    <router-link 
      v-for="question in questionList" 
      :key="question.id"
      tag="li"
      :to="{name:'question',params:{id:question.id}}"
    >
      {{ question.title }}
    </router-link>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      questionList:[]
    }
  },
  created(){
    this.axios('/question').then( res => {
      this.questionList = res;
    })
  }
}
</script>

<style scoped>
  li{
    margin-bottom: 15px;
    cursor: pointer;
  }

  li:hover{
    text-decoration: underline;
    color: #3385ff;
  }

</style>