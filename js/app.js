import { valida, validaMensaje } from "./validacion.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

const textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) => {
  textarea.addEventListener("blur", (textarea) => {
    validaMensaje(textarea.target);
  });
});
