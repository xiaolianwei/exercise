<template>
    <p>
	    <button @click="handelClick">count:{{count}}</button>
    </p>
</template>

<script>
import { ref } from 'vue';
export default {
	setup(){
    console.log('setup会在created前运行');
		let count = ref(0);
    console.log(count);
    const handelClick = () => {
      count.value++;
    }
		return {
			count,
      handelClick
		}
	},
  created(){
    console.log(this.count);
  },
};
</script>
