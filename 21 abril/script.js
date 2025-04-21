const galeria = document.querySelector("#galeria");

for (let index = 1; index < 826; index++) {
  fetch("https://rickandmortyapi.com/api/character/" + index)

      const div = document.createElement("div");
      div.classList.add("character");

      const elemento = document.createElement("img");
      elemento.setAttribute("src", "https://rickandmortyapi.com/api/character/avatar/" + index + ".jpeg");
      div.append(elemento);

      const btnFavoritos = document.createElement("name");
      btnFavoritos.innerText = "Characater " + index;
      div.append(btnFavoritos);

      const btnFavorito = document.createElement("message");
      btnFavorito.innerText = "Esta es mi publicacion numero " + index +  ". Esta es una prueba de generacion de relleno por medio de funciones y ciclos.";
      div.append(btnFavorito);

      galeria.append(div);
    };

 
