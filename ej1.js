// ej 1
let alumnos = [
    {
    nombre: "Matias",
    apellido: "Lopez",
    dni: 45987467,
    año: 5,
    curso: "A",
    nota: 7
    },
    
    {
    nombre: "Lautaro",
    apellido: "Perez",
    dni: 45689231,
    año: 5,
    curso: "A",
    nota: 5,
    },
    
    {
    nombe: "Jose",
    apellido: "God",
    dni: 46398777,
    año: 4,
    curso: "A",
    nota: 4,
    },
    {
    nombre: "Matias",
    apellido: "Gar",
    dni: 46802588,
    año: 4,
    curso: "A",
    nota: 8,
    },
    
    {
    nombre: "Jose",
    apellido: "Fer",
    dni: 47070879,
    año: 3,
    curso: "A",
    nota: 3,
    },
    
    {
    nombre: "Fernado",
    apellido: "Far",
    dni: 47090786,
    año: 3,
    curso: "A",
    nota: 9,
    },
    
    {
    nombre: "Tomas",
    apellido: "Eari",
    dni: 47090786,
    año: 4,
    curso: "B",
    nota: 9,
    },

    {
    nombre: "Nicolas",
    apellido: "Eara",
    dni: 47090786,
    año: 4,
    curso: "B",
    nota: 9,
    }    
]

    // ej 2

    const capitalizar = (string) => {
    newLetter = string[0].toUpperCase()
    newString = newLetter + string.substring(1, string.length)
    return newString
}

    document.addEventListener("DOMContentLoaded", () => {
    console.log(capitalizar('hola'))

})



    // ej 3

    const mostrarAlumno = (alumno) => {
        console.log("DNI:"+ alumno.dni);
        console.log("Nombre: " +alumno.nombre+ " "+alumno.apellido);
        console.log("Curso y año :" +alumno.año +alumno.curso);
        console.log("Nota: "+alumno.nota);
    }
    let num = 0;
    mostrarAlumno(alumnos[0])
    
    
    // ej 4

    let alumnosCapitalizados = alumnos.map(alumno => {
        return {
            nombre: capitalizar(alumno.nombre),
            apellido: capitalizar(alumno.apellido),
        }
    })
        console.log(alumnosCapitalizados);
    
