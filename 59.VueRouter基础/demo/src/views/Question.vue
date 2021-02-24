<template>
  <div class="question" v-if="question">
    <div class="main">问题：{{ question.title }} {{ id }}</div>
    <div class="other">
      <div
        v-for="other in otherQuestionList"
        :key="other.id"
        :class="other.type"
        :title="other.title"
        @click="handleClick(other.id)"
      >
        {{ other.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    id:{
      type: [String,Number]
    }
  },
  data() {
    return {
      question: null,
    };
  },
  computed: {
    otherQuestionList() {
      let arr = [];
      if (this.question.next) {
        arr.push({
          type: "next",
          title: this.question.next,
          id: this.question.nextId,
        });
      }
      if (this.question.prev) {
        arr.push({
          type: "prev",
          title: this.question.prev,
          id: this.question.prevId,
        });
      }
      return arr;
    },
    
  },
  methods: {
    handleClick(id) {
      this.$router.push({
        name: "question",
        params: { id },
      });
      //console.log(this.id);
    },
    getData(id = this.id) {
      // const { id } = this.$route.params;
      // const { id } = this;
      // console.log(id);
      this.axios.get(`/question/${id}`).then((res) => {
        this.question = res;
      });
    },
  },
  created(){
    this.getData();
  },
  // watch:{
  //     '$route':{
  //         handler(){
  //             this.getData()
  //         },
  //         immediate:true
  //     }
  // },
  beforeRouteUpdate(to,from,next){
      const id = to.params.id;
    next();
    this.getData(id);
  }
};
</script>

<style scoped>
.main {
  margin-bottom: 200px;
}

.prev {
  float: left;
}

.next {
  float: right;
}

.prev,
.next {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3385ff;
  text-decoration: underline;
  cursor: pointer;
}
</style>