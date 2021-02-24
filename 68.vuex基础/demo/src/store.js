import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        count: 0,
        studentList: [],
    },
    getters:{
        studentJuveniles: state => state.studentList.filter(val => val.age < 18)
    },
    mutations:{
        studentListAdd(start,obj){
            start.studentList.push(obj)
        }
    }
})

