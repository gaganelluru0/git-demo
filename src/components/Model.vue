<template>
    <h1>Child Template</h1>
<table border="1 px">
    <tr v-for="image in gallery" :key="image">
       <td>{{image.author}}</td>
       <td>{{image.url}}</td>
        <td width="500px" height="500px" ><img :src=image.download_url  /></td>
        <td><a :href=image.download_url >A</a></td>
       
    </tr>
  
</table>

    <slot></slot>
</template>
<script>
export default{
    data(){
        return{
        gallery:[]
        
    }
    },

    mounted(){
        fetch('https://picsum.photos/v2/list').then(res=> res.json()).then(data=> this.gallery=data);
    }
}
</script>
<style>

</style>