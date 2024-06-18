// validador de acceso

const usuario = 'usuario1'
const contraseña = '123456'

const usuarioIngresado = prompt("Ingrese el Usuario: ")
const contraseñaIngresada = prompt("Ingrese la Contraseña: ")

//console.log(usuarioIngresado, contraseñaIngresada)

if(usuarioIngresado === usuario && contraseñaIngresada === contraseña){
    console.log("Acceso Concedido")
}else if(usuarioIngresado !== usuario && contraseñaIngresada === contraseña){
    console.log("Usuario Incorrecto")
}else if(usuarioIngresado === usuario && contraseñaIngresada !== contraseña){
    console.log("Contraseña Incorrecta")
}else{
    console.log("Acceso Denegado")
}

  

    
    
    
    
    
    

