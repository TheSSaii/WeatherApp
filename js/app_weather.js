const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load",() => {
    formulario.addEventListener("submit" ,buscarClima)
});

function buscarClima(e){
    e.preventDefault();
    console.log(container)
    const ciudad = document.querySelector("#ciudad").value;
    const pais = document.querySelector("#pais").value;

    console.log(ciudad);
    console.log(pais);

    if(ciudad === '' || pais === ''){
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=dKEY&units=metric`);
    consultarAPI(url);
}

function mostrarError(mensaje){
    // Crear elemento
    const alerta = document.createElement('div');

    // Agregar clases Tailwind
    alerta.classList.add(
        'bg-red-500',
        'text-white',
        'text-center',
        'p-3',
        'mt-4',
        'rounded'
    );

    // Agregar texto
    alerta.textContent = mensaje;

    // Insertar en el HTML
    resultado.appendChild(alerta);

    // Eliminar después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000); 
}

function mostrarResultado(data){
    const nombre = data.name;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;

    resultado.innerHTML = '';

    resultado.innerHTML = `
    <h2>${nombre}</h2>
    <p>${temperatura}</p>
    <p>${descripcion}</p>
    `;
    
}

async function consultarAPI(url){
    try{
        const response = await fetch(url);

        const data = await response.json();

        if(data.cod === "401"){
            mostrarError("Error de autenticación con la api");
            return;
        }

        if(data.cod === "404"){
            mostrarError("Ciudad no encontrada");
            return;
        }

        console.log(data);
        mostrarResultado(data);
    }catch(error){
        mostrarError("Error de conexion");
        console.log(error);
    }
}


