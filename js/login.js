
const btnEnviar = document.querySelector("#btn-login");
btnEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    loginUsuario();
})

const loginUsuario = () => {
  const correoIngresado = document.querySelector("[data-form-usuario]").value;
  const contraseñaIngresada = document.querySelector("[data-form-contraseña]").value;
  console.log(correoIngresado);
  console.log(contraseñaIngresada);
  var user = "prodidac452@gmail.com";
  var pass = "Prodidac01#"; 

  if( correoIngresado === user && contraseñaIngresada === pass ){

      Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Login Exitoso',
      showConfirmButton: false,
      timer: 1500
    })

    setTimeout(function(){
        window.location.href = "../screens/productos.html";
      }, 1000);
    
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email o Contraseña incorrectos',
    })
  }
}
