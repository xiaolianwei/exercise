

<script>
export default {
    props: {
        weight:Number
    },
    render(createElement){
        return createElement('h'+this.weight,this.$slots.default)
    }
}
</script>