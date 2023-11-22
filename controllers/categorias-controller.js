import { productServices } from "../service/product-service.js";

const crearNuevaLinea = (imagen, nombre, precio, id) => {
  const linea = document.createElement("div");
  linea.className = "galeriaProductos__container__caja";
  const contenido = `
                    <img class="galeriaProductos__container__caja-img" src="${imagen}">
                    <p class="galeriaProductos__container__caja-titulo">${nombre}</p>
                    <p class="galeriaProductos__container__caja-precio">${precio}</p>
                    <p class="galeriaProductos__container__caja-producto"><a href="../screens/verProducto.html?id=${id}">Ver producto</a></p>
                `;
  linea.innerHTML = contenido;
  return linea;
};

const productosDidacticos = document.querySelector("[data-didacticos]");
const productosLibros = document.querySelector("[data-libros]");
const productosDiversos = document.querySelector("[data-diversos]");


productServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ imagen, nombre, precio, categoria, id }) => {
      if (categoria === "Didacticos") {
        const nuevaLiena = crearNuevaLinea(imagen, nombre, precio, id);
        productosDidacticos.appendChild(nuevaLiena);
        const parentDiv = document.querySelector("[data-didacticos]");
        const childDivs = parentDiv.querySelectorAll("div");
        let maxChildDivs = 6;
        if (window.innerWidth <= 425) {
          maxChildDivs = 3; // Si el ancho de la pantalla es 425px o menos, establece maxChildDivs en 4
        }
        for (let i = 0; i < childDivs.length; i++) {
          if (i >= maxChildDivs) {
            childDivs[i].style.display = "none";
          }
        }
      } else if (categoria === "Libros") {
        const nuevaLiena = crearNuevaLinea(imagen, nombre, precio, id);
        productosLibros.appendChild(nuevaLiena);
        const parentDiv = document.querySelector("[data-libros]");
        const childDivs = parentDiv.querySelectorAll("div");
        let maxChildDivs = 6;
        if (window.innerWidth <= 425) {
          maxChildDivs = 3;
        }
        for (let i = 0; i < childDivs.length; i++) {
          if (i >= maxChildDivs) {
            childDivs[i].style.display = "none";
          }
        }
      } else if (categoria === "Diversos") {
        const nuevaLiena = crearNuevaLinea(imagen, nombre, precio, id);
        productosDiversos.appendChild(nuevaLiena);
        const parentDiv = document.querySelector("[data-diversos]");
        const childDivs = parentDiv.querySelectorAll("div");
        let maxChildDivs = 6;
        if (window.innerWidth <= 425) {
          maxChildDivs = 3;
        }
        for (let i = 0; i < childDivs.length; i++) {
          if (i >= maxChildDivs) {
            childDivs[i].style.display = "none";
          }
        }
      }
    });
  })
  .catch((error) => alert("Ocurrió un error"));
