<template>
    <div>
        <input type="file" @change="cargarImagen">
        <button @click="guardarImagen">Guardar</button>
        <div v-for="imagen in imagenes" :key="imagen.id">
          <img :src="`http://localhost:4000/uploads/${imagen.ruta}`" alt="Imagen">
        </div>
      </div>
  </template>
  <script>
  import axios from 'axios';
  
  export default {
    name: "HOLA",
    data() {
      return {
        imagenBuffer: null,
      urlImagen: '',
        eventos: [],
        newevento: { evento: " " }
      };
    },
    mounted() {
      this.getuser();
    },
  
    methods: {
  
      postcomentarios() {
        axios.post("http://localhost:4000/upload", this.newevento)
          .then(response => {
            console.log(response.data);
          })
      }
    },
  }
  
  
  
  
  
  </script>
  <style scoped>
  .container {
    display: flex;
  }
  
  .mb-4 {
    margin-left: 14vh;
    width: 40vh;
    text-align: left;
  }
  
  .mb-5 {
    margin-left: 30vh;
    width: 40vh;
    text-align: center;
  }
  
  .button {
    margin-top: 5vh;
    width: 22%;
    height: 5vh;
  }
  </style>
    