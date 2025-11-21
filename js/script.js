import peliculas from './peliculas.js'

const contenedorAccion = document.getElementById("genero-28");
const peliculasAccion = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
peliculasAccion.forEach(pelicula => {
   
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pelicula");

  
    const img = document.createElement("img");
    img.src = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;

   
    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.title;

   
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);

    
    contenedorAccion.appendChild(tarjeta);
});

const contenedorTriller = document.getElementById("genero-53");
const peliculasTriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
peliculasTriller.forEach(pelicula => {
    
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pelicula");

    const img = document.createElement("img");
    img.src = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.title;
    
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);

    contenedorTriller.appendChild(tarjeta);
})

const contenedorAventura = document.getElementById("genero-12");
const peliculasDeAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));
 peliculasDeAventura.forEach(pelicula => {
    
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pelicula");

    const img = document.createElement("img");
    img.src = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.title;
    
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);

    contenedorAventura.appendChild(tarjeta);
})








  