
console.log("Hola mundo, bienvenido a mi calculadora de geometría de área y perimetro");

// Codigo del Cuadrado
console.group("CUADRADO");

function perimetroCuadrado(lado) {
    return lado * 4; 
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Codigo del Triangulo
console.group("TRIANGULO");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Codigo del Circulo
console.group("CIRCULO");

function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;

function perimetroCirculo(radio){
    return (radio * 2) * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();




