import { Router } from './router'
import * as mongoose from 'mongoose'


export abstract class ModelRouter<D extends mongoose.Document> extends Router {
  constructor(protected model: mongoose.Model<D>) {
    super()
  }

  findAll = (req, resp, next) => {
    this.model.find().then(this.render(resp, next)).catch(next)
  }

  findByID = (req, resp, next) => {
    this.model.findById(req.params.id).then(this.render(resp, next)).catch(next)
  }
}