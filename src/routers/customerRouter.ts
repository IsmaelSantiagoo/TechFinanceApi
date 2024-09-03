// importando bibliotecas
import express from 'express'

// importando controllers
import customerController from '../controllers/customerController'

// instanciando roteamento
const router = express.Router()

// configurando rotas
router.get('/', customerController.getCustomers)
router.get('/:id', customerController.getCustomer)
router.post('/', customerController.postCustomer)
router.patch('/:id', customerController.patchCustomer)
router.delete('/:id', customerController.deleteCustomer)

// exportando rotas
export default router