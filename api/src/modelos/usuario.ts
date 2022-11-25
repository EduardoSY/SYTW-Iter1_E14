import {Schema, model, trusted} from "mongoose";
import { describe } from "node:test";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  nombrePersona:{
    type: String,
    required: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
    trim: true
  },
  email:{
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  edad:{
    type: Number,
    required: true,
    trim: true,
  },
  comicLeidos:[{
   id: String
  }],
  comicFav:[{
    id: String
   }],
   personajeFav:[{
    id: String
   }]
}, {versionKey: false,
  timestamps: true});

export default model('usuario', usuarioSchema)