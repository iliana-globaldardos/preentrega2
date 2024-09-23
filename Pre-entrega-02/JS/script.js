/*let pelicula1 = 'Barbie';
let pelicula2 = 'Oppenheimer';


let funcion = prompt('¿Qué pelicula quieres ver? Para Barbie ingresa 1, para ver Oppenheimer ingresa 2');
let peliculaelegida = '';*/
let container = document.getElementById('elegirpelicula');
container.innerHTML = "<div id='Pelicula'><h1>Seleccione la pelicula que desea ver:</h1></div><button id='boton1'>Barbie</button><button id='boton2'>Oppenheimmer</button>"

function Preguntarentradas(peliculaelegida){
    let container2 = document.getElementById('CantidadEntradas');
    container2.innerHTML = "<h2>Ingrese la cantidad de entradas:</h2><input id='cantidaddeentradas'></input><button id='confirmarcantidad'>Ok</button>";
    let boton3 = document.getElementById('confirmarcantidad');
    boton3.onclick = function() {
    let container3 = document.getElementById('Total');
    let cantidaddeentradasinput = document.getElementById('cantidaddeentradas').value;
    let PrecioFinal = cantidaddeentradasinput * 500;
    container3.innerHTML = "<h2>Reservaste "+cantidaddeentradasinput+" entradas para ver "+ peliculaelegida +". El total es de: $"+PrecioFinal+".</h2>";
    localStorage.setItem("Peliculaseleccinada", peliculaelegida);
    localStorage.setItem("cantidaddeentradascompradas", cantidaddeentradasinput);

}
}

let peliculaelegida;

let boton1 = document.getElementById('boton1');
boton1.onclick = function() {
    Preguntarentradas("Barbie");  

}

let boton2 = document.getElementById('boton2');
boton2.onclick = function() {
    Preguntarentradas("Oppenheimer");    
   
}






/*if(funcion=='1'){
    peliculaelegida=pelicula1;
    alert('Has seleccionado ' + pelicula1 + ' a las 12hs');
}else if(funcion=='2'){
    peliculaelegida=pelicula2;
    alert('Has seleccionado ' + pelicula2 + ' a las 14hs');
}else{
    alert('No encontramos la funcion que buscas');
}*/

/*let entradas = document.getElementById('entradas')
entradas.onchange = function calcularvalorentradas (){
    let container3 = document.getElementById('resultado');
    container3.innerHTML = "<p>El total a abonar es de:</p>" 
}*/

/*let entradas = prompt('Ingresa la cantidad de entradas a adquirir:');
let precio = 500;
let Total = entradas * precio;
if(entradas=='0'){
    alert('No has seleccionado la cantidad de entradas');
}else{
    alert('Has seleccionado ' + entradas + ' entrada/s');
}*/

/*const asientos = [
    {id: 1, fila: 'A', nro: '1' },
    {id: 2, fila: 'A', nro: '2' },
    {id: 3, fila: 'A', nro: '3' },
    {id: 4, fila: 'A', nro: '1' },
    {id: 5, fila: 'A', nro: '2' },
    {id: 6, fila: 'A', nro: '3' },
    {id: 7, fila: 'A', nro: '1' },
    {id: 8, fila: 'A', nro: '2' },
    {id: 9, fila: 'A', nro: '3' },
]*/

/*function calcularvalorentradas () {
    
    alert('El total a abonar es: ' + Total);
}
*/
/*const butacas = [];

const seleccionarbutaca = () => {
    for (let i=0; i<entradas; i++){
    const fila = prompt('Elige la fila A, B o C: ');
    const nro = prompt('Elige el asiento 1, 2 o 3: ');
    butacas[i]={ "fila": fila, "nro":nro };
    }    

}*/

/*seleccionarbutaca();


let final = 'Completaste tu compra para ver ' + peliculaelegida + '. El total de tu compra es de $' + Total;

alert(final);*/









