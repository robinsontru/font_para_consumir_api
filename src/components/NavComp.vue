<template>
    <div>
        <header class="site-header" id="mificoencab">
        <div class="container">

            <div class="row">

                <div class="col-lg-8 col-12 d-flex flex-wrap">
                    <p class="d-flex me-4 mb-0">
                        <i class="bi-geo-alt me-2"></i>
                        <a href="https://goo.gl/maps/YDaNsaeH6fuv5xUi7"> Sena CTPI reginal cauca, Popayan.</a>
                    </p>

                    <p class="d-flex mb-0">
                        <i class="bi-envelope me-2"></i>

                        <a href="mailto:info@company.com">
                            SinTapujos@misena.edu.com
                        </a>
                    </p>
                </div>

                <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
                    <ul class="social-icon">

                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link bi-twitter"></a>
                        </li>

                        <li class="social-icon-item">
                            <a href="https://www.facebook.com/login" class="social-icon-link bi-facebook"></a>
                        </li>
                        <!--ESTAS REDES POR EL MOMENNTO NO HAY
                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link bi-instagram"></a>
                        </li>

                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link bi-youtube"></a>
                        </li>
                        -->
                        <li class="social-icon-item">
                            <a href="https://web.whatsapp.com" class="social-icon-link bi-whatsapp"></a>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
     </header>
        <nav class="navbar navbar-expand-lg bg-light shadow-lg mb-4 pb-0" >
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="../assets/images/Logo1.png" class="logo img-fluid" alt="Kind Heart Charity" id="logonav" >
                <span>

                    <small></small>
                </span>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        
                        <router-link to="/" class="nav-link click-scroll">Inicio</router-link>
                    </li>
                    
                    <li class="nav-item">
                       
                        <router-link to="/quienessomos" class="nav-link click-scroll">Quienes Somos</router-link>
                    </li >

                    <li class="nav-item">
                        
                        <router-link to="/conoceteycuidate" class="nav-link click-scroll">Conocete y cuidate</router-link>

                        <!-- CON ESTA ETIQUETA NAVEGO EN ESCROLL
                        <a class="nav-link click-scroll" href="#section_3">Conocete y cuidate</a>-->
                    </li>

                   <!-- <li class="nav-item">
                        <a class="nav-link " href="#section_aprender">Juegos</a>
                         CON ESTA ETIQUETA NAVEGO EN ESCROLL
                        <a class="nav-link click-scroll" href="#section_4">Juegos</a>
                    </li> -->

                    <li class="nav-item dropdown">
                        <!--class="nav-link click-scroll dropdown-toggle" EN ESTE CLASE QUITO dropdown-toggle PARA QUE NO DEPLIEGUE 
                        ADEMES -->

                        
                            <router-link to="/comentarios" class="nav-link click-scroll">Comentarios</router-link>
                        <!--ESTE DESPLEGABLE EN EL MOMEMNTO NO

                        <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                            <li><a class="dropdown-item" href="news.html">Comentarios</a></li>

                            <li><a class="dropdown-item" href="news-detail.html">News Detail</a></li>
                        </ul>
                        -->
                    </li>
                    

                    <li class="nav-item">
                        
                        <router-link to="/agendacita" class="nav-link click-scroll">Agenda tu cita</router-link>
                        <!-- <a class="nav-link click-scroll" href="#section_6">Agenda tu cita </a>-->
                    </li>
                </ul>
                   <!--BOTON INICIO DE SESION Y NODAL -->
                   <button type="button" class="btn btn-outline-success ms-1 btn-bd-primary    " data-bs-toggle="modal"
                            data-bs-target="#modalinicio">Inicio sesion</button>
                
                       
                    <!--BOTON INICIO DE Registro Y NODAL -->
                    <button type="button" class="btn btn-outline-success ms-4 btn-bd-primary " data-bs-toggle="modal"
                            data-bs-target="#modalregistro" >Registro</button>

                          
                     
                    
                   
                
            </div>
        </div>
    </nav>
    <div class="modal fade" id="modalregistro"  data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Unete a SinTapujos</h5>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
                </div>
                <!--INGRESO CODIGO DE REGISTRO EN ESTE DIV -->
                <div class="modal-body">
                    <RegisterComp></RegisterComp>
                </div>
                <!--TERMINA CODIGO DE REGISTRO-->

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <!-- <button type="button" class="btn btn-primary">Understood</button>-->
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalinicio"  data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Unete a SinTapujos</h5>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
                </div>
                <!--INGRESO CODIGO DE REGISTRO EN ESTE DIV -->
                <div class="modal-body">
                    <login-comp></login-comp>
                </div>
                <!--TERMINA CODIGO DE REGISTRO-->

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <!-- <button type="button" class="btn btn-primary">Understood</button>-->
                </div>
            </div>
        </div>
    </div>

    </div>

</template>
<script>
import LoginComp from './LoginComp.vue'
import RegisterComp from './RegisterComp.vue'

export default {
  components: { LoginComp, RegisterComp },
   name:'NavComp' 
}
</script>
<style scoped>
.btn-outline-success{
    border-radius: 20px;
}
.btn-bd-primary{
         font-weight: 600;
         color: #fff;
         background-color: #4BB5E7;
         border-color:#4BB5E7;
         
     }
     .btn-bd-primary:hover,.btn-bd-primary:active{
         color: #fff;
         background-color: #61428f;
         border-color: #61428f;
     }
     .btn-bd-primary:focus{
         box-shadow:0 0 0 3px rgba(179, 82, 174, 0.25)
     }
 

</style>