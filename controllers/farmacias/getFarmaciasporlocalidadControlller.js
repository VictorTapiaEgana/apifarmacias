import fetchFarmaciasPorLocalidad from "../../services/fetchFarmaciasPorLocalidad.js";

async function getFarmaciasporlocalidad (req,res,next){

    try {
        const { localidad } = req.params

        const resp  = await fetchFarmaciasPorLocalidad(localidad)

        res.status(200).json({
            status:true,
            message:resp
        })
        
    } catch (error) {

        next ( error)
        
    }
}

export default getFarmaciasporlocalidad;