const mapa = document.querySelector("#mapa").addEventListener("click", (e) => {
  e.preventDefault(
    Swal.fire({
      title: "Didacti Rivers",
      imageUrl: "../Imagenes/GoogleMaps.jpg",
      html:
        "Encuentranos en: <b>Av. Fco. Sarabia #197 sur Col. Centro Lerdo - Dgo.</b>, " +
        '<a href="https://maps.app.goo.gl/9XmVcipR8VyPhqXw5">Ir al mapa</a> ' +
        "(se abrira Google Maps y saldras de nuestra página)",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Dirección en google maps",
    })
  );
});

const eventos = document
  .querySelector("#eventos")
  .addEventListener("click", (e) => {
    e.preventDefault(
      Swal.fire({
        title:
          '<h1 style="color:#716add">Este mes de SEPTIEMBRE 2023 estaremos en:<br><br><br></h1><ul><li>23 y 24: Dentro de Paseo Gómez Palacio Blvd Ejercito mexicano s/n</li><br><br><li>30 Y 1 de Octubre: ############</li></li><br><br><li>00 y 00 : ########</li></ul>',
        width: 600,
        padding: "3em",
        background: "#fff url(/images/trees.png)",
        backdrop: `
    rgba(0,0,123,0.4)
    left top
    no-repeat
  `,
      })
    );
  });

const contacto = document
  .querySelector("#contacto")
  .addEventListener("click", (e) => {
    e.preventDefault(
      Swal.fire({
        title:
          "Por favor deja tus datos en la sección de Contacto (Hable con nosotros)",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      })
    );
  });
