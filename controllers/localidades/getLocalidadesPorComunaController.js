import fetchLocalidadesPorComuna from "../../services/fetchLocalidadesPorComuna.js";

async function getLocalidadesPorComuna(req,res,next){
    
    try {

        const { comuna } = req.params        

        const resp = await fetchLocalidadesPorComuna(comuna)

        res.status(200).json({
                status:true,
                message:resp
        })
        
        
    } catch (error) {
        
        next (error)

    }

} 

export default getLocalidadesPorComuna;