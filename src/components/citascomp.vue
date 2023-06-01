<template>
  <!-- <div>
    <h2>Calendario</h2>
    <hr>

    <hr>

    <div class="date-picker">
      <label for="start-date">Fecha de cita:</label>
      <input type="date" id="start-date" v-model="tiempo_cita.fecha" @change="updateEndDate" />
      <input type="time" v-model="tiempo_cita.hora_id" />
    </div>
    <button @click="postcomentarios">Guardar</button>
  </div>

  <div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">fecha</th>
            <th scope="col">hora</th>

            <th scope="col">Eliminar cita</th>
            <th scope="col">Aceptar cita</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="imagen in imagenes" :key="imagen.id">
            <th>{{ imagen.cita_id }}</th>
            <td>{{ imagen.fecha }}</td>
            <td>{{ imagen.hora_id }}</td>
            <td>
              <input type="button" value="eliminar" class="btn btn-secondary" @click="eliminarcita(imagen.cita_id)">
            </td>
            <td>
              <input type="button" value="aceptar" class="btn btn-danger" @click="aprovarcita(imagen.cita_id)">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> -->
  <div>

  </div>
</template>
<script>
// import axios from "axios";
export default {
 name: "HOLA",
  // data() {
  //   return {
  //     tiempo_cita: {
  //       fecha: '',
  //       hora_id: ''
  //     },
  //     imagenes: '',
  //     horasAgendadas: []
  //   };
  // },
  // mounted() {
  //   this.getuser();
  // },
  // methods: {
  //   async getuser() {
  //     await this.axios
  //       .get("http://localhost:4000/citas/")
  //       .then((response) => {
  //         this.imagenes = response.data;
  //         console.log(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   },
  //   async eliminarcita(cita_id) {
  //     await axios.delete('http://localhost:4000/citas/' + cita_id)
  //       .then((response) => {
  //         console.log(response);
  //         this.$swal.fire({
  //           position: "top-center",
  //           icon: "success",
  //           title: "evento eliminado correctamente.",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       })
  //   },
  //   async aprovarcita(cita_id) {
  //     await axios.delete('http://localhost:4000/citas/' + cita_id)
  //       .then((response) => {
  //         console.log(response);
  //         this.$swal.fire({
  //           position: "top-center",
  //           icon: "success",
  //           title: "evento confirmado eliminado correctamente.",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       })
  //   },
  //   postcomentarios() {
  //     if (this.horasAgendadas.includes(this.tiempo_cita.hora_id)) {
  //       this.$swal.fire({
  //         icon: 'warning',
  //         title: 'Hora no disponible',
  //         text: 'La hora seleccionada ya está agendada. Por favor, elija otra hora.',
  //       });
  //       return;

    
  //     }
  //     axios
  //       .post('http://localhost:4000/citas1/', this.tiempo_cita)
  //       .then((response) => {
  //         console.log(response.data);
  //         console.log('Fecha de inicio:', this.tiempo_cita);
  //         this.horasAgendadas.push(this.tiempo_cita.hora_id);
  //         this.$swal.fire({
  //           position: 'top-center',
  //           icon: 'success',
  //           title: 'Comentario creado correctamente.',
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         this.$swal.fire({
  //           icon: 'error',
  //           title: 'Oops...',
  //           text: 'No se pudo crear la cita correctamente.',
  //         });
  //       });
  //   }, 
  // },


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

.date-picker {
  margin-bottom: 10px;
}
</style>