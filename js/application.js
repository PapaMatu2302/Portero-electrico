let contador = 0;
const ingresar =(numero)=>{
    let visorPiso = document.getElementById("visorPiso");
    let visorDepto = document.getElementById("visorDepto");
    
    contador++;
    if (contador<=2){
        visorPiso.value= visorPiso.value+numero;
    }else if (contador == 3){
        visorDepto.value=numero.toString()
    }
}

const llamar = () =>{
  let piso = visorPiso.value;
  let depto = visorDepto.value;
  let mensaje = document.getElementById("mensaje");

  if (piso >=42 ){
    mensaje.value = `Pisos solo del 0 al 42`
  }else if (depto > 8 ){
    mensaje.value = `Departamentos del 1 al 8 solamente`
  }else{
    mensaje.value = `Llamando al piso ${piso}, departamento ${depto}`;}
  
}

const borrar = () =>{

  visorPiso.value = "";
  visorDepto.value = "";
  mensaje.value = "";
 
}
