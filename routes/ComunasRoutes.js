import express from 'express'
import getListadoComunas from '../controllers/comunas/getListadoComunasController.js';

const router = express.Router()

router.get('/listado', getListadoComunas)


export default router;