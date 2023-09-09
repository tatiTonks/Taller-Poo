class Persona {
    nombre;
    edad;
    profesion
    constructor(nombre, edad, profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
}

let Tatiana = new Persona("tatiana",5,"nada");
let melissa = new Persona("melissa", 4, "estudiante")

console.log(Tatiana, melissa)
//  ----- Aquí el punto dos

class Vehiculo {
    marca 
    modelo
    constructor (marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }
    arrancar() {
        return "arrancan mis pesadillas"
    }
    detener() {
        return "me detengo en mis sueños"
    }
}
class Coche extends Vehiculo {
    constructor (marca, modelo){
        super(marca,modelo)

    }
    acelerar (){
    return "aceleraste mc queen";
}
}
let carrito = new Coche ('renault', 'logan')

console.log(carrito.acelerar());

//Aqui el 3


class cuentaBancaria {
    saldoUsuario
    nombre
    constructor(saldoInicial,nombre){
        this.saldoUsuario = saldoInicial
        this.nombre = nombre
    }
    depositar(value){
        this.saldoUsuario += value
    }
    retirar(value){
        this.saldoUsuario -= value
    }
}
let aiuda = new cuentaBancaria (200,"jeje")

//Aquí 4
class Figura {
    constructor(){

    }
    calcularArea(){
    function area (base, altura){
        let calculate = (base * altura)
        return area
    }

}
}
class circulo extends Figura{
    constructor(){
        super()
    }
    calcularArea(radio){
            let areaCirculo =math.pi*Math.pow(radio)
            return areaCirculo
    }
}

class triangulo extends Figura {
    constructor(){
        super()
    }
    calcularArea(base,altura){
            let areatriangulo = (base * altura)/2
            return areatriangulo
        }
    }

    class rectangulo extends Figura {
        constructor(){
            super()
        }
        calcularArea(base,altura){
                let areaRectangulo = (base * altura)
                return areaRectangulo
            }
        }


        //Punto 5

class Direccion {
    calle
    ciudad
    codigoPostal

    constructor(calle,ciudad,codigoPostal){
    this.calle= calle
    this.ciudad= ciudad
    this.codigoPostal = codigoPostal
}
}
class Personita {

    constructor(nombrePerson,direccionPerson ){
    this.nombrePerson = nombrePerson
    this.direccionPerson = direccionPerson
}
}
let bogota = new Direccion ("cll 77b","bogotá", "111031")
let jazmin = new Personita ("jazmin", bogota )
console.log(bogota);
console.log(jazmin);

//Punto 7
//clase anumal que despues perro y gato hereda
class Perro{
    constructor()

}



