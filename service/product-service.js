const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json()); 

const crearProducto = (imagen, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, categoria, nombre, precio, descripcion, id: uuid.v4()})
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    });
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
};

const actualizarProducto = (imagen, categoria, nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, categoria, nombre, precio, descripcion })
    }).then((respuesta) => respuesta).catch(err => console.log(err));
}

// Supongamos que el servicio productServices se ve así
const categorias = {
    getCategories: () => {
      // Esta función debe retornar un arreglo de categorías, por ejemplo:
      return ["Didacticos", "Libros", "Diversos"];
    }
  };

export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    categorias,
};
 


