<template>
<div class='about-us'>
    <Menu/>
    <div class="container">
        <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius corporis ad eum enim esse dolorem repellendus sunt? Autem ea est inventore ducimus similique a cum unde aspernatur delectus non? Hic.</p>
    
    </div>
    

    </div>
</template>
<script>
import Menu from '@/components/menu'
export default {
    name:'about-us',
    components:{
        Menu
        
    }
    
}
</script>



<style lang='scss'
>
.about-us{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

     p{
         margin: 6%;
         font-size: 16px;
         font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;     
         width: 400px;}
         
    
}

</style>