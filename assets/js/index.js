let inptuCuartos =document.querySelector('#inptuCuartos');
let inputMin =document.querySelector('#inputMin');
let inputMax =document.querySelector('#inputMax');
const formulario = document.querySelector('#formulario');
let totalPropiedades =document.querySelector('#totalPropiedades')
let propiedades = document.querySelector('#propiedades')
const btnBuscar = document.querySelector('#btnBuscar')
const btnReset = document.querySelector('#btnReset')

const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      metros: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      metros: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      metros: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      metros: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      metros: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      metros: 500
    }
  ];
  
function render(array) {
  if (array.length ===0 ){
    alert('No Hay disponibilidad con sus especificaciones')
    propiedades.innerHTML = `<h3 class="d-flex justify-content-center"> No Hay disponibilidad con sus especificaciones</h3>`;
    totalPropiedades.innerHTML = `${array.length}`;
    return;
}
  propiedades.innerHTML = "";
  for (let propiedad of array) {
    propiedades.innerHTML += `
      <div class="propiedad">
          <div class="img" style="background-image: url('${propiedad.src}')" height: 150px>
          </div>
        <section>
          <h5>${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.metros}</p>
          </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info ">Ver más</button>
        </section>
      </div>
      `;
  }
  totalPropiedades.innerHTML = `${array.length}`
}

render(propiedadesJSON)

formulario.addEventListener("reset", () => render(propiedadesJSON));

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  let cantdCuartos = +inptuCuartos.value;
  let metrosMin = +inputMin.value;
  let metrosMax = +inputMax.value;
  let arrayFiltrado = []
  
  if (cantdCuartos <= 0 || metrosMin <= 0 || metrosMax < 0) {
    alert('Debes agregar un valor para tu busqueda');
    return
  } else {
    propiedades.innerHTML = "";
    for (let propie of propiedadesJSON) {
      if (propie.rooms === cantdCuartos && propie.metros >= metrosMin && propie.metros <= metrosMax) {
        arrayFiltrado.push(propie)
      }
    }
  }
  render(arrayFiltrado);
})