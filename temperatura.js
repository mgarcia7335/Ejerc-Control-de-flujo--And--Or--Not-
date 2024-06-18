// Temperatura

let temperaturaIngresada = prompt("Ingrese temperatura")

if(temperaturaIngresada >= 30){
    console.log("Hace mucho calor")
}else if(temperaturaIngresada >= 20 && temperaturaIngresada <=30){
    console.log("Hace calor")
}else if(temperaturaIngresada >=10 && temperaturaIngresada <=20){
    console.log("Esta fresco")
}else {
    console.log("Hace frio")
}


