import express from 'express'
import getTotalFarmacias from '../controllers/farmacias/getTotalFarmaciasController.js'
import getFarmaciasporlocalidad from '../controllers/farmacias/getFarmaciasporlocalidadControlller.js'

const router = express.Router()

router.get('/total',getTotalFarmacias)
router.get('/:localidad',getFarmaciasporlocalidad)

export default router