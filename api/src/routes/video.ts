import {Schema, model, trusted} from "mongoose";
import { describe } from "node:test";

const videoschema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description:{
    type: String,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});

export default model('video', videoschema)