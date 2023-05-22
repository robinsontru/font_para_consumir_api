import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./assets/css/template.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

// import axios
import axios from "axios";
import VueAxios from "vue-axios";
//import sweetalert 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router).use(VueAxios,axios).use(VueSweetalert2).mount('#app')