<template>
    <headercomentarios/>
     <!-- <footer-comp></footer-comp> -->
 <Eventoscomp/>
 </template>
 <script>
 
 
 import Headercomentarios from '@/components/headercomentarios.vue'
import Eventoscomp from '@/components/Eventoscomp.vue';
 export default {
   components: { Headercomentarios, Eventoscomp },
     name:'EventosView'
 }
 </script>
 <style scoped>
 
 </style>