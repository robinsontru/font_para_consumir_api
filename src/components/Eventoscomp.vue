<template>
  <div>
    <input type="file" @change="subirImagen">
    <button @click="obtenerImagenes">Obtener Imágenes</button>
  </div>
  <div>
    <h1>Imágenes</h1>

    <div class="container">

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Img</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="imagen in imagenes" :key="imagen.id">
            <th>{{ imagen.idEvento }}</th>
            <td>{{ imagen.nombre }}</td>
            <th> <img :src="imagenUrl(imagen)" alt="" width="70" height="70"> </th>
            <td>
              <input type="button" value="eliminar" class="btn btn-secondary" @click="eliminarImagen(imagen.idEvento)">
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
      imagenes: []
    };
  },
  methods: {
    async subirImagen(event) {
      const file = event.target.files[0];

      // Verificar si se seleccionó un archivo y si es una imagen
      if (file && file.type.startsWith('image/')) {
        const formData = new FormData();
        formData.append('imagen', file);

        try {
          const response = await fetch('http://localhost:4000/imagen', {
            method: 'POST',
            body: formData
          });

          if (response.ok) {
            // Procesar la respuesta si es necesario
            // Por ejemplo, mostrar un mensaje de éxito y actualizar la lista de imágenes llamando a obtenerImagenes()


          } else {
            console.error('Error al subir la imagen');

          }
        } catch (error) {
          console.error(error);
        }
      }
    },
    async obtenerImagenes() {
      try {
        const response = await fetch('http://localhost:4000/imagenes');
        if (response.ok) {
          const data = await response.json();
          this.imagenes = data;
       
        }
      } catch (error) {
        console.error(error);
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    async eliminarImagen(idEvento) {

      await axios.delete('http://localhost:4000/evento/' + idEvento)
        .then((response) => {
          console.log(response);
          this.$swal.fire({
            position: "top-center",
            icon: "success",
            title: "evento eliminado correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
        })


    },
    imagenUrl(imagen) {
      if (imagen && imagen.imagen && imagen.imagen.data) {
        const imageBuffer = new Uint8Array(imagen.imagen.data);
        const base64Image = btoa(String.fromCharCode.apply(null, imageBuffer));
        return `data:image/jpg;base64,${base64Image}`;
      }
      return ''; // Devuelve una cadena vacía si no hay imagen o datos de imagen válidos
    }
  },
  mounted() {
    this.obtenerImagenes();
  }
};
</script>
<!-- <template>
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
      try {
        const response = await axios.put(`http://localhost:4000/citas/${cita_id}`, this.tiempo_cita);
        if (response.status === 200) {
          this.$swal.fire({
            position: "top-center",
            icon: "success",
            title: "Evento editado correctamente.",
            showConfirmButton: false,
            timer: 1500,
          });
          this.closeModal();
          this.getuser(); // Actualizar la lista de citas después de editar una
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
      // Tu código para guardar comentarios
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
</style> -->
