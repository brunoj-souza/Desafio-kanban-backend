const { Router} = require('express')
const { realizarLogin } = require('../controllers/CardController')
const CardController = require('../controllers/CardController')

const router = Router()

router.get('/cards', CardController.verificaJWT ,CardController.listarCards)
router.post('/cards',CardController.verificaJWT ,CardController.criarCard)
router.put('/cards/:id', CardController.verificaJWT,CardController.atualizarCard)
router.delete('/cards/:id', CardController.verificaJWT, CardController.deletarCard)
router.post('/login', CardController.realizarLogin)

module.exports = router