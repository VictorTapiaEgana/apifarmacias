import listadoComunas from '../functions/listadoComunas.js'

async function fetchLitadoComunas() {
    
    return await listadoComunas()
}

export default fetchLitadoComunas;