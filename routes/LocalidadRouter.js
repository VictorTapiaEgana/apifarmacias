import express from "express";
import getLocalidadesPorComuna from "../controllers/localidades/getLocalidadesPorComunaController.js";

const router = express.Router()

router.get('/:comuna', getLocalidadesPorComuna)

export default router;