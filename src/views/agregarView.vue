<template>
    <headercomentarios/>
     <!-- <footer-comp></footer-comp> -->
 <Agregarcomp/>

 </template>
 <script>
 
 
 import Headercomentarios from '@/components/headercomentarios.vue'

import Agregarcomp from '@/components/agregarcomp.vue';
 export default {
   components: { Headercomentarios, Agregarcomp },
     name:'ComentariosView'
 }
 </script>
 <style scoped>
 
 </style>