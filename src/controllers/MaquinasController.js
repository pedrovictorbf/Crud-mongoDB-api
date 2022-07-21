let maquinas = require('../models/Maquina.js');


class MaquinasController {
    static listarMaquinas = (req , res) => {
        maquinas.find((err, maquinas) => {
            if(err) {
                res.status(500).send({message : ` ${err.message} - Erro de Servidor.`})
            } else {
                res.status(200).json(maquinas)
            }
        })
    }

    static listarMaquinaPorID = (req , res) => {
        const id = req.params.id
        maquinas.findById(id , (err , maquinas) => {    
            if(err) {
                res.status(404).send( { message : `${err.message} - ID da Máquina Inválido.`})
            } else {
                res.status(200).send(maquinas);
            }
        })
    }

    static cadastrarMaquina = (req , res) => {
        let maquina = new maquinas(req.body);

        maquinas.save((err) => {

            if(err) {
                res.status(400).send({message : `${err.message} - Falha ao Cadastrar Máquina.`})
            } else {
                res.status(201).send(maquina.toJSON())
            }
        })
    }

    static mudarNomeMaquina = (req, res) => {
        const id = req.params.id;
    
        maquinas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(err) {
            res.status(404).send({message : `${err.message} - Falha ao atualizar máquina , ID não encontrado.`})
          } else {
            res.status(200).send({ message : 'Máquina Alterada com Sucesso'})
          }
        })
      }



    static excluirMaquina = (req, res) => {
        const id = req.params.id;

        maquinas.findByIdAndDelete(id , (err) => {
            if(err) {
                res.status(404).send({message : `${err.message} - Falha ao Remover máquina, ID não encontrado.`})
            } else {
                res.status(200).send({ message : 'Máquina Removida com Sucesso.'})
            }
        })
    }
}


module.exports = MaquinasController;