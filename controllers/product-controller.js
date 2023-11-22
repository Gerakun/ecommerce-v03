import { productServices } from "../service/product-service.js";

const crearNuevaLinea = (nombre, precio, imagen, descripcion, id) => {
  const linea = document.createElement("div");


  const descripcionCorta = descripcion.length > 30 ? descripcion.slice(0, 30) + "..." : descripcion;

  const contenido = `<div class="productos__container__caja">
            <img class="productos__container__caja-img" src="${imagen}">
            <div class="productos__container__caja-iconos">
                <i id="${id}" class="fa-solid fa-trash"></i>
                <a href="../screens/editarProducto.html?id=${id}"><i id="editar" class="fa-solid fa-pen-to-square"></i></a>  
            </div> 
            <p class="productos__container__caja-producto">${nombre}</p>
            <p class="productos__container__caja-precio">${precio}</p>
            <p class="productos__container__caja-serie">${descripcionCorta}</p>
        </div>`;

  linea.innerHTML = contenido;
  const eliminar = linea.querySelector("i");
  eliminar.addEventListener("click", () => {
    // Mostrar un cuadro de diálogo de confirmación al usuario para saber si en realidad desea eliminar el producto
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este elemento?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
      cancelButtonText: "¡No borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("!Eliminado!", "Su archivo ha sido borrado.", "success").then(
          () => {
            const id = eliminar.id;
            productServices
              .eliminarProducto(id)
              .then((respuesta) => {
                console.log(respuesta);
              })
              .catch((err) => alert("Ocurrió un error"));
          }
        );
      }
    });
  });

  return linea;
};

const caja = document.querySelector("[data-caja]");

productServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ nombre, precio, imagen, descripcion, id }) => {
      const nuevaLinea = crearNuevaLinea(
        nombre,
        precio,
        imagen,
        descripcion,
        id
      );
      caja.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocirrió un error"));
