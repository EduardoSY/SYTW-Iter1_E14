import {Schema, model, trusted} from "mongoose";
import { describe } from "node:test";

const comicSchema = new Schema({
  idComic: {
    type: String
  },
  numReviewC:{
    type: String
  },
  puntuacionReviewC:{
    type: String
  }
}, {versionKey: false,
  timestamps: true});

export default model('comic', comicSchema)