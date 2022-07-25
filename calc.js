window.addEventListener('load', ()=> {
    //en estas dos constantes guardamos dos elementos 1) pantalla 2) un html collection con todos los botones
    const display = document.querySelector('#screen');
    const keypadButtons = document.getElementsByClassName('keypad-button');
    
    //creamos un array con todos los botones usando el html collection
    const keypadButtonsArray = Array.from(keypadButtons);

    //iteramos el array que hemos creado para agregarle un eventListener a cada elemento
    keypadButtonsArray.forEach( (button) => {
        //button corresponde la variable que va a iterar cada elemento del array 
        button.addEventListener('click', ()=> {
            calculadora(button, display);   
        })
    })
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        
        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display){
    /* aqui preguntamos por lo que tenemos en pantalla con display.innerHTML que esta dentro de la funcion eval
    la funcion eval evalua una cadena de caracteres  y comprueba si representa una expresión como ejemplo una expresion aritmetica */
    display.innerHTML = eval(display.innerHTML)
    
}

function actualizar(display, button){
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}