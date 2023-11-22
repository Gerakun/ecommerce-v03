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

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    console.log("Hubo error al momento de buscar el producto");
  }

  try {
    const producto = await productServices.detalleProducto(id);

    if (
      producto.imagen &&
      producto.nombre &&
      producto.precio &&
      producto.descripcion
    ) {
      const seleccionado = document.querySelector("[data-producto]");

      const contenido = `<div class="verProducto__container-verProducto">
            <img class="verProducto__img"  src="${producto.imagen}">
            <span class="verProducto__span">
            <p class="verProducto__titulo">${producto.nombre}</p>
            <p class="verProducto__precio">${producto.precio}</p>
            <p class="verProducto__descripcion">${producto.descripcion}</p>
            </span>
            </div>`;

      seleccionado.innerHTML = contenido;

      const categoriaSolicitada = producto.categoria;
      const idProductoVisto = producto.id;

      const productosSimilares = document.querySelector(
        "[data-productos-similares]"
      );

      //Iniciar con solo 4 elementos y btn cargar mas
      let elementosMostrados = 5; // Número inicial de elementos mostrados
      const elementosPorCarga = 5; // Número de elementos por cada carga adicional

      // Agrega un evento de clic al botón "Cargar más elementos"
      const botonCargarMas = document.getElementById("cargarMasElementos");
      botonCargarMas.addEventListener("click", () => {
        const elementos = document.querySelectorAll(
          "[data-productos-similares] div"
        );

        // Itera a través de los elementos ocultos y muéstralos de 4 en 4
        for (
          let i = elementosMostrados;
          i < elementosMostrados + elementosPorCarga;
          i++
        ) {
          if (elementos[i]) {
            elementos[i].style.display = "block";
          }
        }

        // Actualiza el contador de elementos mostrados
        elementosMostrados += elementosPorCarga;

        // Oculta el botón si no quedan más elementos por mostrar
        if (elementosMostrados >= elementos.length) {
          botonCargarMas.style.display = "none";
        }
      });

      //fin Iniciar con solo 4 ele...

      productServices
        .listaProductos()
        .then((data) => {
          data.forEach(({ imagen, nombre, precio, id, categoria }) => {
            if (
              categoria === "Didacticos" &&
              categoriaSolicitada === "Didacticos" &&
              idProductoVisto != id
            ) {
              const nuevaLiena = crearNuevaLinea(imagen, nombre, precio, id);
              productosSimilares.appendChild(nuevaLiena);
              //lineas extra (agregar solo cierto numero de elememtos)
              const childDivs = productosSimilares.querySelectorAll("div");
              const maxChildDivs = 5;
              for (let i = 0; i < childDivs.length; i++) {
                if (i >= maxChildDivs) {
                  childDivs[i].style.display = "none";
                }
              } //fin de las lineas
            } else if (
              categoria === "Libros" &&
              categoriaSolicitada === "Libros" &&
              idProductoVisto != id
            ) {
              const nuevaLiena = crearNuevaLinea(imagen, nombre, precio, id);
              productosSimilares.appendChild(nuevaLiena);
              const childDivs = productosSimilares.querySelectorAll("div");
              const maxChildDivs = 5;
              for (let i = 0; i < childDivs.length; i++) {
                if (i >= maxChildDivs) {
                  childDivs[i].style.display = "none";
                }
              }
            } else if (
              categoria === "Diversos" &&
              categoriaSolicitada === "Diversos" &&
              idProductoVisto != id
            ) {
              const nuevaLiena = crearNuevaLinea(imagen, nombre, precio, id);
              productosSimilares.appendChild(nuevaLiena);
              const childDivs = productosSimilares.querySelectorAll("div");
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
    } else {
      throw new error();
    }
  } catch (error) {
    console.log("catch error", error);
  }
};
obtenerInformacion();