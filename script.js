
function multiplicarPorDos(){
    let x2 = prompt('Ingresa un número que quieras multiplicar por 2')
    alert(x2*2)
}

function multiplicar(){
    let numero1 = prompt('Ingresa el multiplo')
    let numero2 = prompt('Ingresa el multiplicador')
    alert(numero1*numero2)
}

function areaCirculo(){
    let radio = 5.3
    let pi = Math.PI
    let respuesta = pi*radio**2
    alert('El area de un círculo que tiene de radio 5.3cm es: ' + respuesta.toFixed(2) + 'cm^2')
}

function areaRombo(){
    let D = 8
    let d = 6
    alert('El área de un rombo con una daginal mayor de 8cm y una diagonal menor de 6cm es: ' + D*d/2 + 'cm^2')
}

