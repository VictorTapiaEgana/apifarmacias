import fetchLitadoComunas from "../../services/fetchListadoComunas.js";

async function getListadoComunas (req,res,next)  {

    try {

        const resp = await fetchLitadoComunas()

        res.status(200).json({
                status:true,
                message:resp
        })
        
    } catch (error) {
        
        next (error)
    }
    
}

export default getListadoComunas;