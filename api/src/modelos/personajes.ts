import {Schema, model, trusted} from "mongoose";
import { describe } from "node:test";

const personajeSchema = new Schema({
  idPersonaje: {
    type: String
  },
  numReviewP:{
    type: String
  },
  puntuacionReviewP:{
    type: String
  }
}, {versionKey: false,
  timestamps: true});

export default model('personaje', personajeSchema)