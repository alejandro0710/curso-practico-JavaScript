
console.log("Hola mundo, bienvenido a mi calculadora de geometría de área y perimetro (cuadrado,triangulo y circulo)");

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

//Funciones conectadas con HTML

//CUADRADO
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valorUsuario = input.value;

    const Perimetro = perimetroCuadrado(valorUsuario)
    alert("El perimetro de tu Cuadrado es: " + Perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valorUsuario = input.value;

    const area = areaCuadrado(valorUsuario)
    alert("El area de tu Cuadrado es: " + area);
}

//TRIANGULO
function CalcularPerimetroTriangulo(){
    const Lado1 = document.getElementById("inputLado1");
    const Lado2 = document.getElementById("inputLado2");
    const Base = document.getElementById("inputBase");
    
    const valorUsuarioLado1 = Number(Lado1.value);
    const valorUsuarioLado2 = Number(Lado2.value);
    const valorUsuarioBase = Number(Base.value);

    const perimetro = perimetroTriangulo(valorUsuarioLado1, valorUsuarioLado2, valorUsuarioBase)
    alert("El perimetro de tu Triangulo es: " + perimetro);
}

function CalcularAreaTriangulo(){
    const Lado1 = document.getElementById("inputLado1");
    const Lado2 = document.getElementById("inputLado2");
    const Base = document.getElementById("inputBase");
    
    const valorUsuarioLado1 = Number(Lado1.value);
    const valorUsuarioLado2 = Number(Lado2.value);
    const valorUsuarioBase = Number(Base.value);

    const perimetro = perimetroTriangulo(valorUsuarioLado1, valorUsuarioLado2, valorUsuarioBase)
    const Sperimetro = perimetro / 2;
    const area = Math.sqrt(Sperimetro * (Sperimetro - valorUsuarioLado1) * (Sperimetro - valorUsuarioLado2) * (Sperimetro - valorUsuarioBase));

    alert("El area de tu Triangulo es: " + area);
}

//CIRCULO
function CalcularPerimetroCirculo(){
    const radio = document.getElementById("inputRadio");
    const valorUsuarioRadio = radio.value;

    const perimetro = perimetroCirculo(valorUsuarioRadio);
    alert("Este es el perimetro de tu Circulo: " + perimetro);
}

function CalcularAreaCirculo(){
    const radio = document.getElementById("inputRadio");
    const valorUsuarioRadio = radio.value;

    const area = areaCirculo(valorUsuarioRadio);
    alert("Este es el area de tu Circulo: " + area);
}