/*OBJETO LITERAL */
/*Los objetos literales se distinguen de los objetos de la POO porque no son instancias de un prototipo creado por el desarrollador.
.
Sin embargo los objetos literales son instancias del prototipo Object creado por defecto en JavaScript.*/

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
/*Un prototipo es una estructura de código a partir de la cual se crean objetos, ya que guarda los atributos y métodos que luego podrán ser heredados por sus instancias.
.
Podemos pensarlo como un “molde” de objetos.*/
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


//Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        name,
        age,
        cursosAprobados=[],
        email
    }){
        this.name=name;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
        this.email=email;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2({
    name: "Miguel",
    email: "miguelito@gmail.com",
    age: 28,
    }
);