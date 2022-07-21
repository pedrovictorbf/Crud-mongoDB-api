

let express = require('express');
let MaquinaController = require('../controllers/MaquinasController.js');


var router = express.Router();

router.get('/listarMaquinas' , MaquinaController.listarMaquinas);

router.get('/listarMaquinasPorID/:id' , MaquinaController.listarMaquinasPorID);

router.post('/cadastrarMaquina' , MaquinaController.cadastrarMaquina);

router.put('/mudarNomeMaquina' , MaquinaController.mudarNomeMaquina);

router.delete('/excluirMaquina' , MaquinaController.excluirMaquina);


module.exports = router;