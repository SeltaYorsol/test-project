<template>
  <div class="home">
    <Menu/>
    
    <h1>Приветствуем в нашем приложении!</h1>
  
  </div>
</template>

<script>
import Menu from '@/components/menu'
export default {
    name:'home',
    components:{
        Menu
      
        
    }   
}
</script>


<style lang="scss">
h1{
  margin: 6%;
  
}

</style>
