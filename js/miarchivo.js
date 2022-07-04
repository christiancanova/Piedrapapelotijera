 //Se consigna nombre
 const getValueInput = () =>{
    let nombre = document.getElementById("domTextElement").value; 
    document.getElementById("valueInput").innerHTML = nombre; 
} 
let nombreUsuario = "Tu"
//Valor aleatorio de piedra, papel o tijera
function generateRandom(min = 1, max = 4){
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}
//función para sumar para pc
var sumapc = parseInt(0);
function incrementarpc()
    {
    var n = 0; 
    var num;
    while (n < 1)
    {
    num = 1;
    sumapc = sumapc + num;
    n = n + 1;
    }
}
//función para sumar para usuario
var sumausuario = parseInt(0);
function incrementarusuario()
    {
    var n = 0;
    var num;
    while (n < 1)
    {
    num = 1;
    sumausuario = sumausuario + num;
    n = n + 1;
    }
}
//Si elección es piedra
function opcionPiedra(){
        var cambio = document.getElementById("resultado");
        let imagen1 = document.getElementById('imagen1');
        let opcionPc = (generateRandom())
        {
            if (opcionPc==1)
            {
            cambio.textContent ="Eligiste piedra, yo también, empatamos! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
            cambio.classList.add('animate__animated', "animate__bounceInLeft");
            cambio.addEventListener('animationend', () => {
            cambio.classList.remove('animate__animated', "animate__bounceInLeft")
  
            });
        }
            else if (opcionPc==2)  
            {
            incrementarpc()
            cambio.textContent = "Elegiste piedra, yo papel.. gané! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
            cambio.classList.add('animate__animated', "animate__bounceInLeft");
            cambio.addEventListener('animationend', () => {
            cambio.classList.remove('animate__animated', "animate__bounceInLeft")
  
            });
        }
            else
            {
            incrementarusuario()
            cambio.textContent = ("Elegiste piedra, yo tijera.. ganaste! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc);
            cambio.classList.add('animate__animated', "animate__bounceInLeft");
            cambio.addEventListener('animationend', () => {
            cambio.classList.remove('animate__animated', "animate__bounceInLeft")
  
            });
        }    
        }
        if((sumapc === parseInt(2)) || (sumausuario === parseInt (2))){
            var cambiofinal = document.getElementById("resultadofinal");
            const hoy = new Date
            let fecha = (hoy.toLocaleString())
            cambiofinal.textContent ="El resultado final es: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc+" ";
            cambiofinal.classList.add('animate__animated', "animate__flip");
            cambiofinal.addEventListener('animationend', () => {
            cambiofinal.classList.remove('animate__animated', "animate__flip")
            let fechas = JSON.stringify(fecha)
            let antecedente = JSON.stringify(nombreUsuario+": "+sumausuario+" "+"yo "+sumapc)
            if(sessionStorage.getItem(fechas,antecedente))
                { "none"}
                else{
                    sessionStorage.setItem(fechas,antecedente)
                    registros.push(nombreUsuario+": "+sumausuario+" "+"yo "+sumapc)
                    registros2.push(sumausuario)
                    registros3.push(sumausuario-sumapc)
                    sumapc = sumapc - sumapc
                    sumausuario = sumausuario - sumausuario
                }
            
            })
        }    
}
//Si la elección es papel
function opcionPapel(){
        var cambio = document.getElementById("resultado");
        let imagen2 = document.getElementById('imagen2');
        let opcionPc = (generateRandom())
        
        {
            if (opcionPc==1)
            {
                incrementarusuario()
                cambio.textContent = "Eligiste papel, yo piedra, ganaste! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
                cambio.classList.add('animate__animated', "animate__bounceInLeft");
                cambio.addEventListener('animationend', () => {
                cambio.classList.remove('animate__animated', "animate__bounceInLeft")
      
                });
            }
            else if (opcionPc==2)
            {cambio.textContent ="Elegiste papel, yo también, empatamos! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
            cambio.classList.add('animate__animated', "animate__bounceInLeft");
            cambio.addEventListener('animationend', () => {
            cambio.classList.remove('animate__animated', "animate__bounceInLeft")
  
            });
        }
            else
            {
                incrementarpc()
                cambio.textContent ="Elegiste papel, yo tijera.. gané! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
                cambio.classList.add('animate__animated', "animate__bounceInLeft");
                cambio.addEventListener('animationend', () => {
                cambio.classList.remove('animate__animated', "animate__bounceInLeft")
      
                });
            }
        }

        if((sumapc === parseInt(2)) || (sumausuario === parseInt (2))){
            var cambiofinal = document.getElementById("resultadofinal");
            const hoy = new Date
            let fecha = (hoy.toLocaleString())
            cambiofinal.textContent ="El resultado final es: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc+" ";
            cambiofinal.classList.add('animate__animated', "animate__flip");
            cambiofinal.addEventListener('animationend', () => {
            cambiofinal.classList.remove('animate__animated', "animate__flip")
            let fechas = JSON.stringify(fecha)
            let antecedente = JSON.stringify(nombreUsuario+": "+sumausuario+" "+"yo "+sumapc)
            if(sessionStorage.getItem(fechas,antecedente))
                { "none"}
                else{
                    sessionStorage.setItem(fechas,antecedente)
                    registros.push(nombreUsuario+": "+sumausuario+" "+"yo "+sumapc)
                    registros2.push(sumausuario)
                    registros3.push(sumausuario-sumapc)
                    sumapc = sumapc - sumapc
                    sumausuario = sumausuario - sumausuario
                }
            
            })
        }    
}
//Si la elección es tijera
function opcionTijera(){
        var cambio = document.getElementById("resultado");
        let imagen3 = document.getElementById('imagen3');
        let opcionPc = (generateRandom())
        {
            if (opcionPc==1)
                {
                    incrementarpc()
                    cambio.textContent = "Eligiste tijera, yo piedra, gané! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
                    cambio.classList.add('animate__animated', "animate__bounceInLeft");
                    cambio.addEventListener('animationend', () => {
                    cambio.classList.remove('animate__animated', "animate__bounceInLeft")
          
                    });
                }
                else if (opcionPc==2)
                {
                    incrementarusuario()
                    cambio.textContent ="Elegiste tijera, yo papel, ganaste! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
                    cambio.classList.add('animate__animated', "animate__bounceInLeft");
                    cambio.addEventListener('animationend', () => {
                    cambio.classList.remove('animate__animated', "animate__bounceInLeft")
          
                    });
                }
                else
                {cambio.textContent ="Elegiste tijera, yo también, empatamos! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
                cambio.classList.add('animate__animated', "animate__bounceInLeft");
                cambio.addEventListener('animationend', () => {
                cambio.classList.remove('animate__animated', "animate__bounceInLeft")
      
                });
            }
        }
  
        if((sumapc === parseInt(2)) || (sumausuario === parseInt (2))){
            var cambiofinal = document.getElementById("resultadofinal");
            const hoy = new Date
            let fecha = (hoy.toLocaleString())
            cambiofinal.textContent ="El resultado final es: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc+" ";
            cambiofinal.classList.add('animate__animated', "animate__flip");
            cambiofinal.addEventListener('animationend', () => {
            cambiofinal.classList.remove('animate__animated', "animate__flip")
            let fechas = JSON.stringify(fecha)
            let antecedente = JSON.stringify(nombreUsuario+": "+sumausuario+" "+"yo "+sumapc)
            
            if(sessionStorage.getItem(fechas,antecedente))
                { "none"}
                else{
                    sessionStorage.setItem(fechas,antecedente)
                    registros.push(nombreUsuario+": "+sumausuario+" "+"yo "+sumapc)
                    registros2.push(sumausuario)
                    registros3.push(sumausuario-sumapc)
                    sumapc = sumapc - sumapc
                    sumausuario = sumausuario - sumausuario
                }
            
            })
        } 
       
           
}
//Para mostar historial usamos el storage
function mostrar(){
    
    
    const datos = document.getElementById("datos");
    
    let tabla = document.createElement("table")
    
        for (let index= 0; index < sessionStorage.length; index++) {   
            let clave = sessionStorage.key(index)
            let fila = document.createElement("tr")
            fila.innerHTML =  `<td>${sessionStorage.getItem(clave)}</td> 
                                <td>, con fecha:<td>
                                <td>${clave}</td>`
            tabla.append(fila)
            datos.append(tabla)
        }         
} 
///Vaciar el storage
function vaciar(){
    sessionStorage.clear();
    location. reload()
}
//creamos el historial de diferenciales con un filtro     
//hacemos busqueda y damos estrella en caso de objetivo logrado .. objetivo = llegar a 5 puntos antes del segundo juego            
//para informar cantidad de juegos
let registros = [];
//para saber si gano antes del segundo juego
let registros2 = [];
//para saber los diferenciales de juego
let registros3 = [];
//se informa estadistica
function estadistica(){
let extract = registros3.filter(registros3 => registros3 = Math.max());
var cambio = document.getElementById("datos");
cambio.textContent = "Has realizado "+registros.length+" juegos y tus registros han sido: "+registros+". Las diferencias de games en cada juego que has obtenido es: "+extract
let indice = registros2.indexOf(2);
var cambio2 = document.getElementById("datos2");
//si el usuario gana en el primer juego, gana una estrella
if (((indice)+1)<=1 && ((indice)+1)>0)
{
cambio2.textContent ="Haz ganado en el primer juego. Obtuviste una estrella!";
}

}


           