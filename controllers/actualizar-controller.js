import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]")

const imgFile = document.querySelector('#file')

const previewFile = () => {
  const preview = document.querySelector('#img__preview')
  const file = document.querySelector('#file').files[0]
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    preview.src = reader.result
  })
  
  if (file) {
    reader.readAsDataURL(file)
  }
}

imgFile.addEventListener('change', previewFile)

 
const obterInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        window.location.href = "/screens/error.html";
    }

    const imagen = document.querySelector("[data-img]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-producto]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    try{
        const productos = await productServices.detalleProducto(id);
    
            if( /*productos.imagen && */ productos.categoria && productos.nombre && productos.precio && productos.descripcion){ 
           /* imagen.value = productos.imagen; */
            categoria.value = productos.categoria;
            nombre.value = productos.nombre;
            precio.value = productos.precio;
            descripcion.value = productos.descripcion;
        }else {
            throw new Error();
        }
        

    }catch(error){
        window.location.href = "../screens/error.html"
    }  
};

obterInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

/*    const imagen = document.querySelector("[data-img]").value;  */
    const imagen = document.querySelector("#img__preview").getAttribute('src');
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productServices.actualizarProducto(imagen,categoria,nombre,precio,descripcion,id).then(() =>{
        window.location.href = "../screens/edicionConcluida.html"
    })
})

