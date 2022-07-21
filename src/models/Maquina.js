const mongoose = require('mongoose');


const maquinaSchema = new mongoose.Schema(
    {
        id : { type : String},
        Vendedor : { type : String},
        Marca : { type : String},
        Chassi : { type : String},
        UF : { type : String},
        Quantidade : { type : Number},
        Ano : { type : Number}
    },
    {
        versionKey : false
    }
)


const maquinas = mongoose.model('maquinas' , maquinaSchema)

module.exports = maquinas;