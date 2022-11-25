import {Schema, model, trusted} from "mongoose";
import { timeStamp } from "node:console";
import { describe } from "node:test";

const entradaForoSchema = new Schema({
  idEntrada: {
    type: String
  },
  nombreUsuario: {
    type: String,
    required: true 
  },
  fecha: {
    type: Date
  },
  idRecurso:{
    type: String
  },
  contenido:{
    type: String
  }
}, {versionKey: false,
  timestamps: true});

export default model('entradaForo', entradaForoSchema)