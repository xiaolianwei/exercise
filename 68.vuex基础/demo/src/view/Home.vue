<template>
    <div class="home">
        首页
        <div>
            <button @click="handleClick">按钮</button>{{ stateCount }}
        </div>
        <!-- {{ a+b+c }} -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {
            count: 200
        }
    },
    methods: {
        handleClick(){
            this.$store.state.count ++;
            // this.$store.state.a += 1;
            // this.$store.state.b += 1;
            // this.$store.state.c += 1;
        }
    },
    computed:{
        // ...mapState(['count','a','b','c'])
        ...mapState({
            stateCount: state => state.count+10,
            // stateCount: 'count'
        })
    }
}
</script>