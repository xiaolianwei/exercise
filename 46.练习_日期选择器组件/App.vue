<template>
    <div id="app">
        <date-picker @choose-date="date = $event" :date="date" />
    </div>
</template>

<script>
import DatePicker from './DatePicker.vue'

export default {
    components: {
        DatePicker
    },
    data(){
        return {
           date: new Date()
        }
    }
}
</script>

<style scoped>
    
</style>