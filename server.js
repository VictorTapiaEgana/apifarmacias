import express from 'express'
import cors from 'cors'

import farmaciasRoutes  from './routes/FarmaciasRoutes.js'
import comunasRoutes from './routes/ComunasRoutes.js'
import localidadRoutes from './routes/LocalidadRouter.js'

import controlDeErrores from './middlewares/controlDeErrores.js'

const PORT = process.env.PORT || 3020

const app = express()
app.use(cors())

app.use('/api/farmacias',farmaciasRoutes)
app.use('/api/comunas',comunasRoutes)
app.use('/api/localidades',localidadRoutes)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Ruta no habilitada'
    })
})

app.use(controlDeErrores)

app.listen(PORT,()=>{

    console.clear()
    console.log(`servidor corriendo en PORT: ${PORT}`)    

})