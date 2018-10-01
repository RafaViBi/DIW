//nombre, dirección, dni, teléfono,libro, título, autor, país, isbn;

 export class Cliente {
    constructor(nombre,direccion,dni,telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.dni = dni;
        this.telefono = telefono;
    }
    setnombre(a) {
        this.nombre = a;
    }
    setdireccion(a) {
        this.direccion = a;
    }
    setdni(a) {
        this.dni = a;
    }
    settelefono(a) {
        this.telefono = a;
    }
    
    getnombre() {
        return this.nombre;
    }
    getdireccion() {
        return this.direccion;
    }
    getdni() {
        return this.dni;
    }
    gettelefono() {
        return this.telefono;
    }
}

let clienteUno = new Cliente("Rafa","Calle Falsa","11111111Z","639852147");

import * as libroUno from '../JS/Ejercicio0.1';

document.write(clienteUno.getnombre());
document.write();

