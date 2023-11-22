import { productServices } from "../service/product-service.js";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const crearNuevaLinea = (imagen, nombre, precio, id) => {
  const linea = document.createElement("div");
  linea.className = "galeriaProductos__container__caja";
  const contenido = `
                    <img class="galeriaProductos__container__caja-img" src="${imagen}">
                    <p class="galeriaProductos__container__caja-titulo">${nombre}</p>
                    <p class="galeriaProductos__container__caja-precio">${precio}</p>
                    <p class="galeriaProductos__container__caja-producto"><a href="../screens/verProducto.html?id=${id}">Ver producto</a></p>
                </div>`;
  linea.innerHTML = contenido;
  return linea;
};

const productosDidacticos = document.querySelector("[data-didacticos]");

let didacticosVisible = false;
const button = document.getElementById("mostrarDidacticos");

button.addEventListener("click", function () {
  const parentDiv = document.querySelector("[data-didacticos]");
  const childDivs = parentDiv.querySelectorAll("div");
  
  for (let i = 5; i < childDivs.length; i++) {
    childDivs[i].style.display = didacticosVisible ? "none" : "block";
  }
  
  didacticosVisible = !didacticosVisible;

  // Cambia el texto del botón según el estado actual
  if (didacticosVisible) {
    button.textContent = "Ocultar";
  } else {
    button.textContent = "Mostrar +";
  }
});


productServices
  .listaProductos()
  .then((data) => {
    shuffleArray(data);
    data.forEach(({ imagen, nombre, precio, categoria, id }) => {
      const nuevaLiena = crearNuevaLinea(imagen, nombre, precio, id);
      if (categoria === "Didacticos") {
        const nuevaLiena = crearNuevaLinea(imagen, nombre, precio, id);
        productosDidacticos.appendChild(nuevaLiena);
        const parentDiv = document.querySelector("[data-didacticos]");
        const childDivs = parentDiv.querySelectorAll("div");
        const maxChildDivs = 5;
        for (let i = 0; i < childDivs.length; i++) {
          if (i >= maxChildDivs) {
            childDivs[i].style.display = "none";
          }
        }
      }
    });
  })
  .catch((error) => alert("Ocurrió un error"));
