import {Schema, model, trusted} from "mongoose";
import { describe } from "node:test";

const reviewSchema = new Schema({
  idReview: {
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
  recurso:{
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  puntuacion:{
    type: Number,
    required: true,
  },
  contenido:{
    type: String,
  }
}, { 
    versionKey: false,
    timestamps: true
});

export default model('review', usuarioSchema)