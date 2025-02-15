import { Router } from 'express'
import controller from '../controllers/operations.js'

const router = Router()

router.get('/suma', controller.suma)

router.get('/resta', controller.resta)

router.get('/multiplicacion', controller.multiplicacion)

router.get('/division', controller.division)

router.get('/listar', controller.listar)

export default router