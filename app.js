const primeMapping = {
    "accion": 2,
    "comedia": 3,
    "drama": 5,
    "terror": 7,
    "ciencia ficcion": 11,
    "fantasia": 13,
    "aventura": 17,
    "romance": 19
};

const peliculas = [
    { nombre: "Mad Max", generos: ["accion", "ciencia ficcion"] },
    { nombre: "Titanic", generos: ["drama", "romance"] },
    { nombre: "It", generos: ["terror", "drama"] },
    { nombre: "Avengers", generos: ["accion", "aventura", "fantasia"] },
    { nombre: "Inception", generos: ["ciencia ficcion", "accion", "drama"] }
];

let usuarioGeneros = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", agregarGenero);
    document.querySelector(".button-draw").addEventListener("click", resultadoPelicula);
});

function agregarGenero() {
    const input = document.getElementById("amigo");
    const genero = input.value.trim().toLowerCase();
    if (genero && primeMapping[genero] && !usuarioGeneros.includes(genero)) {
        usuarioGeneros.push(genero);
        actualizarListaGeneros();
    }
    input.value = "";
}

function actualizarListaGeneros() {
    const lista = document.getElementById("listaGeneros");
    lista.innerHTML = "";
    usuarioGeneros.forEach(genero => {
        const li = document.createElement("li");
        li.textContent = genero;
        lista.appendChild(li);
    });
}

function calcularID(generos) {
    return generos.reduce((prod, genero) => prod * primeMapping[genero], 1);
}

function resultadoPelicula() {
    if (usuarioGeneros.length === 0) return;
    const usuarioID = calcularID(usuarioGeneros);
    
    let recomendaciones = peliculas
        .map(pelicula => {
            const peliculaID = calcularID(pelicula.generos);
            const relevancia = gcd(usuarioID, peliculaID);
            return { nombre: pelicula.nombre, relevancia };
        })
        .filter(pelicula => pelicula.relevancia > 1) // Filtramos películas con MCD mayor que 1
        .sort((a, b) => b.relevancia - a.relevancia); // Ordenamos por relevancia

    mostrarRecomendaciones(recomendaciones);
}

function mostrarRecomendaciones(recomendaciones) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (recomendaciones.length === 0) {
        resultado.innerHTML = "<li>No se encontraron recomendaciones.</li>";
        return;
    }

    recomendaciones.forEach(rec => {
        const li = document.createElement("li");
        li.textContent = `${rec.nombre} (Relevancia: ${rec.relevancia})`;
        resultado.appendChild(li);
    });
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

