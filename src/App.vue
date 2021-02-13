<template>
 <button @click="download()" class="btn btn-primary download" >Download</button>
 
 

</template>

<script>
import axios from 'axios'
 

export default {
  name: 'App',

  data(){
    return{
   
    }

    
  },
  methods:{
     download(){
      axios({
         url:"https://picsum.photos/id/0/5616/3744",
         method:'GET',
         responseType:'blob'
       }).then((response)=>{
         var fileUrl=window.URL.createObjectURL(new Blob([response.data]))
         var fileLink=document.createElement('a')
         fileLink.href=fileUrl
         fileLink.setAttribute('download','image.jpg')
        document.body.appendChild(fileLink)
        fileLink.click()
       })
     }
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.download{
  text-align: center;
}

router-link{
  color:white
}
</style>
