

$(document).ready(function(){
    $('#signIn').click(function(){

      // guardamos los datos introducidos en la sesion user.
          var user= {
            "email": $('#inputEmail3'), 
            "password": $('#inputPassword3')
          }
          
        // hacemos la llamada ajax
          $.ajax({
            type:"POST",
            url:"php/login.php",
            data:user,
            // esta funcion recibe 0 o 1 dependiendo de si en login.php coincide el usuario y contraseña o no. Si coincide redirige a home
            success:function(data){
              if(data==1){
                console.log("Logged In");
                window.location="php/home.php";
              }else{
                alert('El email o password es incorrecto, <a href="..index1.php">vuelva a intenarlo</a>.<br/>');
              }
            },
            error: function(data){
              console.log("Error Ajax");
            }
          });
    });	
  });