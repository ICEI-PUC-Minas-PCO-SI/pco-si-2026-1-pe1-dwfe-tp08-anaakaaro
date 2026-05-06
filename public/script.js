//Definição dos dados (JSON)

const catalogo = [
    {
        "id": 1,
        "titulo": "Game of Thrones",
        "tipo": "serie",
        "ano": 2011,
        "generos": ["ação"],
        "nota": 10,
        "assistido": true
    },
    {
        "id": 2,
        "titulo": "A Ilha do Medo",
        "tipo": "filme",
        "ano": 2010,
        "generos": ["terror", "suspense"],
        "nota": 10,
        "assistido": true
    },
    {
        "id": 3,
        "titulo": "O Mentalista",
        "tipo": "série",
        "ano":2008,
        "generos": ["suspense", "investigação"],
        "nota": 8,
        "assistido": false
    },
    {
        "id": 4,
        "titulo": "The 100",
        "tipo": "série",
        "ano":2014,
        "generos": ["ficção científica"],
        "nota": 7,
        "assistido": true
    },
    {
        "id": 5,
        "titulo": "O Agente Sereto",
        "tipo": "filme",
        "ano":2025,
        "generos": ["crime"],
        "nota": 8,
        "assistido": false
    },
    {
        "id": 6,
        "titulo": "A Empregada",
        "tipo": "filme",
        "ano":2025,
        "generos": ["mistério"],
        "nota": 9,
        "assistido": true
    },
]

//Acesso e leitura dos dados
console.log(catalogo);
console.log(catalogo[0].titulo);
console.log(catalogo[5].ano);
if(catalogo[2].generos.length == 1){
    console.log("O filme possui apenas um gênero");
} else {
    console.log(catalogo[2].generos[1]);
}


//Iterações com iterators (tarefas)

//Listagem com forEach
catalogo.forEach(titulo => {
    console.log(`[${titulo.tipo}] ${titulo.titulo} (${titulo.ano})`)
});

//Transformação com map
const titulosEmCaixaAlta = catalogo(titulo => {
    return titulo.toUpperCase();
})
console.log(titulosEmCaixaAlta);

