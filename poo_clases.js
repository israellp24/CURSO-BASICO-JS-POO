class Course{
    constructor({
        name,
        classes=[],
    }){
        this.name = name;
        this.classes = classes;
    }
};

const cursoProgramacionBasica = new Course({
    name: "Curso Gratis de programación Basica",
});
const cursoDefinitivoHTMLCSS = new Course({
    name: "Curso definitivo de HTML y CSS",
});
const cursoPracticoHTMLCSS = new Course({
    name: "Curso Práctico de HTML y CSS",
});
const cursoResponsiveDesing = new Course({
    name: "Curso de Responsive Desing",
});

class LearningPaths{
    constructor({
        name,
        courses=[],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const  escuelaDesarrolloWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgramacionBasica,
        cursoDefinitivoHTMLCSS,
        cursoPracticoHTMLCSS,
        cursoResponsiveDesing,
    ],
});

const  escuelaDesarrolloVideoJuegos = new LearningPaths({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgramacionBasica,
        "Curso Introduccion a la producción de Vgs",
        "Curso de Unreal Engine",
        "Curso de Unity 3D",
    ],
});

const  escuelaDataScience = new LearningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgramacionBasica,
        "Curso DataBusiness",
        "Curso DataViz",
        "Curso Tabela",
    ],
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
};

const Israel2 = new Student({
    name: "IsraelLP",
    username: "Israellp24",
    email: "israellp24@gmail.com",
    twitter: "@israellp",
    learningPaths: [
        escuelaDataScience,
        escuelaDesarrolloVideoJuegos,
        escuelaDesarrolloWeb,
    ]
});


const miguelito1 = new Student({
    name: "miguel",
    username: "miguelito24",
    email: "migue@gmail.com",
    facebook: "miguelito_chido",
    approvedCourses : [
        escuelaDesarrolloWeb,
    ],
    learningPaths: [
        escuelaDesarrolloVideoJuegos
    ]
});