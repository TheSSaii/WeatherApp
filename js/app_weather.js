const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load",() => {
    formulario.addEventListener("Submit" ,buscarClima)
});

function buscarClima(e){
    e.preventDefault();
    console.log(container)
    const ciudad = document.querySelector("#ciudad");
    const pais = document.querySelector("#pais");

    console.log(ciudad);
    console.log(pais);

    if(ciudad === '' && pais === ''){
        mostarError('Ambos campos son obligatorios');
    }
}

function mostrarError(mensaje){
    console.log(mensaje);
}

ale