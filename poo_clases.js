class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

function videoPlay(id){
    const urlSecreta = "https://ultrasecretomasquelanasa.com/"+id;
    console.log("Se esta reproduciendo en una url y se concatena en una url secreta: "+urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://ultrasecretomasquelanasa.com/"+id;
    console.log("Se esta pausando en una url y se concatena en una url secreta: "+urlSecreta);
}

class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }

}


class Course{
    constructor({
        name,
        classes=[],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombrecito){
        if(nuevoNombrecito === "Curso Malito de programacion basica"){
            console.error("Web... no");
        }else{
            this._name= nuevoNombrecito;
        }
    }
};

const cursoProgramacionBasica = new Course({
    name: "Curso Gratis de programación Basica",
    isFree: true
});


//devuelve el nombre

const cursoDefinitivoHTMLCSS = new Course({
    name: "Curso definitivo de HTML y CSS",
});

const cursoPracticoHTMLCSS = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english" , 
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

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
};

class FreeStudent extends Student {
    constructor(props){
        super(props)
    }

    approvedCoursess(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, "+this.name+", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Student {
    constructor(props){
        super(props)
    }

    approvedCoursess(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, "+this.name+", solo no puedes tomar cursos en ingles");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props){
        super(props)
    }

    approvedCoursess(newCourse){
        this.approvedCourses.push(newCourse);
    }
}
class teacherStudent extends Student {
    constructor(props){
        super(props)
    }

    approvedCoursess(newCourse){
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }

}

const Israel2 = new FreeStudent({
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


const miguelito1 = new BasicStudent({
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

const freddy = new teacherStudent({
    name: "freddy vega",
    username: "freddy@gasd",
    email: "fred@gmail.com",
    facebook: "fred_chido",

});