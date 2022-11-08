let datos = [];

let inicio = true;

let contenedorProductos = document.getElementById('contenedorProductos');

contenedorProductos && (inicio = false);

// Galería de Imágenes
let indicadores = document.getElementById('indicadores');
let galeria = document.getElementById('galeria');

// Llamado de información
const ajax = async () => {
    try {

        if (inicio) {
            let response = await fetch('./data/productos.json');
            let data = await response.json();
            datos = data;
        } else {

            let response = await fetch('../data/productos.json');
            let data = await response.json();
            datos = data;
        }

        dibujarDatos();
    } catch (error) {
        console.log(error);
    }
}

ajax();

function dibujarDatos() {
    if (datos.length > 0) {

        datos.forEach((dato, index) => {
            let { nombre, precio, moneda, imagen, descripcion } = dato;

            if (inicio) {
                // Galería
                index === 0 && (indicadores.innerHTML += `
                    <button type="button" data-bs-target="#carouselGaleria" data-bs-slide-to="${index}" class="active"
                            aria-current="true" aria-label="Slide ${index + 1}"></button>
                `)

                index > 0 && (indicadores.innerHTML += `
                    <button type="button" data-bs-target="#carouselGaleria" data-bs-slide-to="${index}" aria-label="Slide ${index + 1}"></button>
                `)

                galeria.innerHTML += `
                    <div class="carousel-item ${index === 0 && 'active'} ">
                        <img src="${imagen}" class="d-block w-100 rounded" alt="Foto de ${nombre}" style="height: 300px;">
                        <div class="carousel-caption bg-light bg-opacity-25 rounded text-dark">
                            <h5>${nombre}</h5>
                            <p>${descripcion}</p>
                        </div>
                    </div>
                `
            } else {
                // Productos
                contenedorProductos.innerHTML += `
                    <div class="card col-12 col-md-4 mb-2" style="width: 18rem;">
                        <img src="${imagen}" class="card-img-top" alt="Foto de ${nombre}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text"><b>Precio: </b>${precio}${moneda}</p>
                            <a href="comprar.html" class="btn btn-success">Comprar</a>
                        </div>
                    </div>   
                `
            }
        })
    }
}