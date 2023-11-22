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

const productosLibros = document.querySelector("[data-libros]");

let librosVisible = false;
const button2 = document.getElementById("mostrarLibros");

button2.addEventListener("click", function (){
  const parentDiv = document.querySelector("[data-libros]");
  const childDivs = parentDiv.querySelectorAll("div");

  for (let i = 5; i < childDivs.length; i++){
    childDivs[i].style.display = librosVisible ? "none" : "block";
  }

  librosVisible = !librosVisible;

  if (librosVisible) {
    button2.textContent = "Ocultar";
  } else {
    button2.textContent = "Mostrar"
  }
});

productServices
  .listaProductos()
  .then((data) => {
    shuffleArray(data);
    data.forEach(({ imagen, nombre, precio, categoria, id }) => {
      const nuevaLiena = crearNuevaLinea(imagen, nombre, precio, id);
       if (categoria === "Libros") {
        const nuevaLiena = crearNuevaLinea(imagen, nombre, precio, id);
        productosLibros.appendChild(nuevaLiena);
        const parentDiv = document.querySelector("[data-libros]");
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
