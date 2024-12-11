import obtenerLocalidadesPorComuna from "../functions/obtenerLocalidadesPorComuna.js";

async function fetchLocalidadesPorComuna(comuna) {

    return await obtenerLocalidadesPorComuna(comuna)

}

export default fetchLocalidadesPorComuna;