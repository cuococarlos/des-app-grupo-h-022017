import mongoose from 'mongoose'

// Mongoose models and schemas
const menuSchema = new mongoose.Schema({
  name: String(30),required:true
  description :String(200),required:true
  category: String,required:true // preguntar
  deliveryCost : { type: Number, min: 10, max: 40 }, required:true,
  validFrom : { type: Date },
  validTo : { type: Date },
  deliveryTime :
  horary: String, required:true
  deliveryLocality : [String],
  reputation : { type: Number, min: 1, max: 10 }


})

const Provider = mongoose.model('Provider', providerSchema)

export default Provider
