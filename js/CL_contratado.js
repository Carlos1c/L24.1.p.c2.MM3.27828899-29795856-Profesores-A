import Cl_profesor from "./CL_profesor.js";
export default class Cl_contratado extends Cl_profesor {
    constructor(nombre, bono, sueldo, horas) {
        super(nombre, bono, sueldo);
        this.horas = horas;
    }
    
    sueldoContratado() {
        return this.horas * 10;
    }
}