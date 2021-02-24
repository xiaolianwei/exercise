<template>
  <div class="demo">
    <input type="text" v-model="query" />
    <br />
    <transition-group tag="ul">
      <li v-for="item in computedLists" :key="item.name">{{ item.name }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      lists: [
        { name: "shanshan" },
        { name: "jicheng" },
        { name: "chensitong" },
        { name: "dengxuming" },
      ],
      query: '',
    };
  },
  computed: {
		computedLists() {
			return this.lists.filter( val => val.name.includes(this.query))
		},
		
  },
};
</script>

<style scoped>
li {
  height: 24px;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.v-enter-to,
.v-leave {
  opacity: 1;
}

</style>