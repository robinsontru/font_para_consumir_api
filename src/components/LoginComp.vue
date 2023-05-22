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
     <h1 class="h3 mb-3 fw-normal">Ingresar</h1>
 
     <div class="form-floating">
       <input type="text" class="form-control" id="user"  name="user" placeholder="Usuario">
       <label for="floatingInput">Usurio</label>
     </div>
     <div class="form-floating">
       <input type="password" class="form-control" id="pass"  name="pass" placeholder="Contraseña">
       <label for="floatingPassword">Contraseña</label>
     </div>
 
     <div class="checkbox mb-3">
         
     </div>
     <button class="w-100 btn btn-lg btn-bd-primary" type="submit">Login</button>
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
     name:'LoginComp'
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
 
 
     
 </style>