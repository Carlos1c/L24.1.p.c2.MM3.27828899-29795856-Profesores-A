export default class Cl_profesor {
    constructor(nombre, bono, sueldo) {
        this.nombre = nombre;
        this.bono = bono;
        this.sueldo = sueldo;
    }

    ingresoTotal() {
        return this.bono + this.sueldo;
    }   
}