<template>
 <!-- HTML -->   

    <div>
        
        <h1>O que é o v-text?</h1>
        <p v-text="texto"></p>
    </div>
</template>

<script>
// JavaScript 
export default{
    name: 'novoComponente',
    props: {
        texto : String,
}
}
</script>

<style scoped> /* scoped = sinaliza que as mudaças de estilo vão ocorrer somente aq */
/* CSS */
h1 {
  color: #ff0404;  
  
}
</style>
 