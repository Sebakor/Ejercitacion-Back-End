let alumnos = [
    {
    nombe: "Matias",
    apellido: "Lopez",
    dni: 45987467,
    año: 5,
    curso: "A",
    nota: 7
    },
    
    {
    nombe: "Lautaro",
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
    nombe: "Matias",
    apellido: "Gar",
    dni: 46802588,
    año: 4,
    curso: "A",
    nota: 8,
    },
    
    {
    nombe: "Jose",
    apellido: "Fer",
    dni: 47070879,
    año: 3,
    curso: "A",
    nota: 3,
    },
    
    {
    nombe: "Fernado",
    apellido: "Far",
    dni: 47090786,
    año: 3,
    curso: "A",
    nota: 9,
    },
    
    ]

const capitalizar = (string) => {
    newLetter = string[0].toUpperCase()
    newString = newLetter + string.substring(1, string.length)
    return newString
}

document.addEventListener("DOMContentLoaded", () => {
    console.log(capitalizar('hola'))

})