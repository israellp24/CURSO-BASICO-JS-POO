/*OBJETO LITERAL */
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    },

};


/*PROTOTIPO */
function Student(name,age,cursosAprobados){
    this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;
}

/*Metodo del prototipo */
Student.prototype.aprobarCurso= function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

//Instacia de prototipo
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la Producción de VideoJuegos",
        "Curso de Creacion de personajes",
    ],
)