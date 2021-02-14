<template>
    <ul>
        <li 
            v-for="(node,index) in data" 
            :key="node.label"
            class="tree-node"
        >
            <i 
                v-if="node.children"
                class="iconfont" 
                :class="{
                    'icon-down':!childrenShowList[index],
                    'icon-right':childrenShowList[index]
                    }"
            ></i>
            <span @click="changeShow(index)" class="node-label">{{ node.label }}</span>
            <keep-alive>
                <base-tree 
                    v-if="childrenShowList[index] && node.children" 
                    :data="node.children"
                ></base-tree>
            </keep-alive>
            
        </li>
    </ul>
</template>

<script>
export default {
    name: 'base-tree',
    props:{
        data: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            childrenShowList: []
        }
    },
    methods:{
        changeShow(index){
            let flag = !this.childrenShowList[index];
            this.$set(this.childrenShowList,index,flag)
        }
    }
}
</script>

<style scoped>
    @import url('./assets/font.css');
    ul{
        list-style: none;
        user-select: none;
    }
    .tree-node{
        cursor: pointer;
    }
    .tree-node .iconfont{
        color: #c0c4cc;
        font-size: 12px;
        margin-right: 5px;
        vertical-align: middle;
    }
    .node-label{
        font-size: 14px;
        color: #606266;
        vertical-align: middle;
    }
</style>