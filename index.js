// import express from 'express'
// import cors from 'cors'
// import totalFarmacias from './functions/totalFarmacias.js'
// import listadoComunas from './functions/listadoComunas.js'
// import totalRegiones from './functions/totalRegiones.js'
// import obtenerLocalidadesPorComuna from './functions/obtenerLocalidadesPorComuna.js'
// import farmaciasporlocalidad from './functions/farmaciasporlocalidad.js'

// const app = express()
// const PORT = process.env.PORT || 3010

// app.use(cors())

// app.get('/totalfarmacias', async (req,res)=>{

//     try {

//         const resp = await totalFarmacias()

//         res.status(200).json({
//             success: true,
//             data: {"Total_Farmacias":resp},
//         });
        
//     } catch (error) {
       
//         res.status(500).json({
//             success: false,
//             message: error,
//         });
//     }

// })

// app.get('/farmaciasporlocalidad/:localidad',async (req,res)=>{

//     const { localidad } = req.params

//     console.log(localidad)

//     try {

//         const resp  = await farmaciasporlocalidad(localidad)

//         console.log(resp)

//         res.status(200).json({
//             status:true,
//             message:resp
//         })
        
//     } catch (error) {

//         res.status(500).json({
//             status:false,
//             message:error
//         })    
        
//     }
// })

// app.get('/comunas', async (req,res)=>{

//     try {

//         const resp = await listadoComunas()

//         res.status(200).json({
//             success: true,
//             data:{"Total_Comunas": resp},
//         });
        
//     } catch (error) {
       
//         res.status(500).json({
//             success: false,
//             message: error,
//         });
//     }

// })











app.get('/localidades/:comuna', async (req,res)=>{

    const comuna = req.params.comuna    

    try {

        const resp = await obtenerLocalidadesPorComuna(comuna)

        res.status(200).json({
            status:true,
            message:resp
        })        
        
    } catch (error) {

        res.status(500).json({ 
            status:false,
            message:error            
        })
        
    }

})

// app.get('/*',(req,res)=>{

//     res.status(200).json({
//                          "success":"false", 
//                          "message":"Ruta no habilitada"}
//     )

// })

// app.listen(PORT ,()=>{
//     console.clear()
//     console.log(`Servidor corriendo en puerto ${PORT}`)
// })