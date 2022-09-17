const datos_personales = {Nombre: "Ivan", Apellido: "Alvaretto", Edad: 30, Altura: 1.74, isDeveloper: true}

const edad = "Edad";
//console.log(datos_personales[edad])

const datos_amigos =  [
    {Nombre: "Gaston", Apellido: "Lucero", Edad: 29, Altura: 1.76, isDeveloper: true},
    {Nombre: "Ignacio", Apellido: "Majo", Edad: 31, Altura: 1.75, isDeveloper: false},
]

const lista_datos = [datos_personales, ...datos_amigos ];
//console.log(lista_datos)

lista_datos.sort((a, b) => b.Edad - a.Edad)
console.log(lista_datos)

