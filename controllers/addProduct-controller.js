import { productServices } from "../service/product-service.js";

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

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const imagen = document.querySelector("#img__preview").getAttribute('src') 
    const categoria = document.querySelector("[data-categoria]").value
    const nombre = document.querySelector("[data-producto]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value

    productServices.crearProducto(imagen, categoria, nombre, precio, descripcion).then(() => {
        window.location.href = "/screens/registroCompletado.html"
    }).catch(err => console.log(err));
});