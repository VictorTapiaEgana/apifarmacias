import farmaciasporlocalidad from "../functions/farmaciasporlocalidad.js";

async function fetchFarmaciasPorLocalidad(localidad) {

    return await farmaciasporlocalidad(localidad)
    
}

export default fetchFarmaciasPorLocalidad;