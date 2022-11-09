let datos = [], inicio = !0, contenedorProductos = document.getElementById("contenedorProductos"); contenedorProductos && (inicio = !1); let indicadores = document.getElementById("indicadores"), galeria = document.getElementById("galeria"); const ajax = async () => { try { if (inicio) { let a = await fetch("./data/productos.json"), b = await a.json(); datos = b } else { let a = await fetch("../data/productos.json"), b = await a.json(); datos = b } dibujarDatos() } catch (a) { console.log(a) } }; ajax(); function dibujarDatos() {
    0 < datos.length && datos.forEach((a, b) => {
        let { nombre: c, precio: d, moneda: e, imagen: f, descripcion: g } = a; inicio ? (0 === b && (indicadores.innerHTML += `
                    <button type="button" data-bs-target="#carouselGaleria" data-bs-slide-to="${b}" class="active"
                            aria-current="true" aria-label="Slide ${b + 1}"></button>
                `), 0 < b && (indicadores.innerHTML += `
                    <button type="button" data-bs-target="#carouselGaleria" data-bs-slide-to="${b}" aria-label="Slide ${b + 1}"></button>
                `), galeria.innerHTML += `
                    <div class="carousel-item ${0 === b && "active"} ">
                        <img src="${f}" class="d-block w-100 rounded" alt="Foto de ${c}" style="height: 300px;">
                        <div class="carousel-caption bg-light bg-opacity-25 rounded text-dark">
                            <h5>${c}</h5>
                            <p>${g}</p>
                        </div>
                    </div>
                `) : contenedorProductos.innerHTML += `
                    <div class="card col-12 col-md-4 mb-2" style="width: 18rem;">
                        <img src="${f}" class="card-img-top" alt="Foto de ${c}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${c}</h5>
                            <p class="card-text"><b>Precio: </b>${d}${e}</p>
                            <a href="comprar.html" class="btn btn-success">Comprar</a>
                        </div>
                    </div>   
                `})
}