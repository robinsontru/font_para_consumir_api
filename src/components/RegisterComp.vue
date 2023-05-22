<template>
   <div>


   <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.104.2">
    <title>Signin Template · Bootstrap v5.2</title>

    

    

    

   <link href="css/bootstrap.min.css" rel="stylesheet">


    <!-- Custom styles for this template -->
    <link href="css/signin.css" rel="stylesheet">
   </head>
   <body class="text-center">
    
   <main class="form-signin w-100 m-auto text-center shadow-lg p-3 mb-5">
   <form id="formLogin" action="/login" method="post">
    <img class="mb-4" src="@/assets/images/Logo1.png" alt="" width="100" height="67">
    <h1 class="h3 mb-3 fw-normal">Registro</h1>


    <div class="form-floating">
      <input type="text" class="form-control" id="user"  name="user" placeholder="Nombres">
      <label for="floatingInput">Nombres</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="user"  name="user" placeholder="Apellidos">
      <label for="floatingInput">Apellidos</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="user"  name="user" placeholder="Cedula">
      <label for="floatingInput">Cedula</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="user"  name="user" placeholder="Ficha">
      <label for="floatingInput">Ficha</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="user"  name="user" placeholder="Usuario">
      <label for="floatingInput">Usurio</label>
     </div> 
    <div class="form-floating">
      <input type="password" class="form-control" id="pass"  name="pass" placeholder="Contraseña">
      <label for="floatingPassword">Contraseña</label>
    </div>

    
    
  </form>
  <br>
   <a href="button" class="w-100 btn btn-lg btn-bd-primary">Registrarse</a>
   <p class="mt-5 mb-3 text-muted">&copy; Sintapujos 2023</p>
</main>


    
  </body>
</html>

   </div>
        
    
</template>

<script>
export default {
    name:'RegisterComp'
}
</script>

<style scoped>
    .btn-bd-primary{
        font-weight: 600;
        color: #fff;
        background-color: #52b357;
        border-color: #20a754;
    }
    .btn-bd-primary:hover,.btn-bd-primary:active{
        color: #fff;
        background-color: #61428f;
        border-color: #61428f;
    }
    .btn-bd-primary:focus{
        box-shadow:0 0 0 3px rgba(121,82,179, 0.25)
    }


   .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

    

    
</style>