<template>
  <div>
    <h2>Calendario</h2>
    <hr>
    <div class="date-picker">
      <label for="start-date">Fecha de cita:</label>
      <input type="date" id="start-date" v-model="tiempo_cita.fecha" @change="updateEndDate" />
      <input type="time" v-model="tiempo_cita.hora_id" />
      <input type="text" v-model="tiempo_cita.descripcion" />
    </div>
    <button @click="postComentarios">Guardar</button>
  </div>

  <div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">fecha</th>
            <th scope="col">hora</th>
            <th scope="col">descripcion</th>
            <th scope="col">Eliminar cita</th>
            <th scope="col">Aceptar cita</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="imagen in imagenes" :key="imagen.id">
            <th>{{ imagen.cita_id }}</th>
            <td>{{ imagen.fecha }}</td>
            <td>{{ imagen.hora_id }}</td>
            <td>{{ imagen.descripcion }}</td>
            <td>
              <input type="button" value="eliminar" class="btn btn-secondary" @click="eliminarCita(imagen.cita_id)">
            </td>
            <td>
              <button type="button" @click="openModal(imagen)" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                reseña
              </button>
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" :class='{ show: modal }'
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">{{ titleModal }}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div>
                        <label for="descripcion">
                          <input type="text" v-model="tiempo_cita.descripcion" />
                        </label>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button @click="closeModal()" type="button" class="btn btn-secondary"
                        data-bs-dismiss="modal">Cerrar</button>
                      <button @click="guardarResena(imagen.cita_id)" type="button" class="btn btn-primary">Guardar
                        reseña</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HOLA",
  data() {
    return {
      tiempo_cita: {
        fecha: "",
        hora_id: "",
        descripcion: "",
      },
      imagenes: [],
      horasAgendadas: [],
      titleModal: "",
      modal: false,
    };
  },
  mounted() {
    this.getuser();
  },
  methods: {
    async getuser() {
      try {
        const response = await axios.get("http://localhost:4000/citas/");
        this.imagenes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async eliminarCita(cita_id) {
      try {
        const response = await axios.delete(`http://localhost:4000/citas/${cita_id}`);
        if (response.status === 200) {
          this.$swal.fire({
            position: "top-center",
            icon: "success",
            title: "Evento eliminado correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
          this.getuser(); // Actualizar la lista de citas después de eliminar una
        }
      } catch (error) {
        console.error(error);
        this.$swal.fire({
          position: "top-center",
          icon: "error",
          title: "Error al eliminar el evento.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    async guardarResena(cita_id) {
      try {const response = await axios.put(`http://localhost:4000/citas/${cita_id}`, this.tiempo_cita);
        if (response.status === 200) {
          this.$swal.fire({
            position: "top-center",
            icon: "success",
            title: "Evento editado correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
          this.getuser();
          this.closeModal();
        }
      } catch (error) {
        console.error(error);
        this.$swal.fire({
          position: "top-center",
          icon: "error",
          title: "Error al editar el evento.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    openModal(imagen) {
      this.tiempo_cita.descripcion = imagen.descripcion;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    postComentarios() {
      if(this.horasAgendadas.includes(this.tiempo_cita.hora_id)) {
        this.$swal.fire({
          icon: 'warning',
          title: 'Hora no disponible',
          text: 'La hora seleccionada ya está agendada. Por favor, elija otra hora.',
        });
        return;
      }
      const limiteCitas = this.limiteCitas;
      if (this.imagenes.length >= limiteCitas) {
        this.$swal.fire({
          icon: 'warning',
          title: 'Límite de citas alcanzado',
          text: 'Se ha alcanzado el límite de citas permitidas.',
        });
        return;
      }
      axios.post('http://localhost:4000/citas/', this.tiempo_cita)
        .then((response) => {
          console.log(response.data);
          console.log('Fecha de inicio:', this.tiempo_cita);
          this.horasAgendadas.push(this.tiempo_cita.hora_id);
          this.$swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Comentario creado correctamente.',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getuser();
        })
        .catch((error) => {
          console.error(error);
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo crear la cita correctamente.',
          });
        });
       
    },
  },
};
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
