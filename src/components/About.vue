<template>
    <h1>About page in vue</h1>
    <h1>{{product.name}}</h1>
    <h1>{{productChanged.cost}}</h1>
</template>
<script>
export default {
    computed:{

        product(){
            return this.$store.state.product;
        },
        productChanged(){
            return this.$store.getters.changePrice;
        }
    }
}
</script>