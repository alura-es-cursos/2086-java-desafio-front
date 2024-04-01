import getDatos from "./getDatos.js";

const btnSortear = document.querySelector('.btn-sortear');
const fichaDescripcion = document.getElementById('ficha-descripcion');

function cargarInfoSerie() {
  getDatos(`/series/frases`)
      .then(data => {
        fichaDescripcion.innerHTML = `
              <img src="${data.poster}" alt="${data.titulo}" />
              <div>
                  <h2>${data.titulo}</h2>
                  <div class="descripcion-texto">
                      <p><i>"${data.frase}"</i></p>
                      <p><b>Citado por:</b> ${data.personaje}</p>
                  </div>
              </div>
          `;
      })
      .catch(error => {
          console.error('Error al obtener las informaciones de la serie:', error);
      });
}


window.onload = cargarInfoSerie();
btnSortear.addEventListener('click', cargarInfoSerie);