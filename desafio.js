
let respuesta = "vamos a un bar"

if (respuesta =="si"){
    console.log("la respuesta es si")
} else if(respuesta == "no"){
    console.log("la respuesta es no")
} else{
    console.log("no tenemos respuesta")
}

//

let nombre = "Bebidas"
let cantidad = 4

let precioProducto 

if (nombre == "bebida"){
    precioProducto = 1
} else if (nombre == "cerveza"){
    precioProducto = 350
} else if(nombre == "papas fritas"){
    precioProducto = 200
}

let precioTotal = cantidad * precioProducto
console.log("paga" + precioTotal + "pesos")

// Ofertas para socios - condicional
let socios = false
let cupon = 350

if(socios){ //es socio
    if (cupon >= 25){
        cupon = cupon -1
    }
    if (cupon >= 50){
        cupon = cupon * 0.95
    }
    if (cupon >= 100){
        cupon = cupon -15
    }
} else { //no es socio

    if(cupon >= 100){
        cupon = cupon -5
    }
}

console.log ("el precio final a pagar es" +  cupon  + "pesos")


