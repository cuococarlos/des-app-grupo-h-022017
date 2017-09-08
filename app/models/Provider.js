import mongoose from 'mongoose'

// Mongoose models and schemas
const providerSchema = new mongoose.Schema({
  name: String,required:true
  logo:{type: mongoose.SchemaTypes.Url, required: true},
  locality:String,required:true
  serviceDescription :String(200),required:true
  address: String,required:true
  webOrFacebook : String,
  email: String ,required:true
  phone: Number(20), required:true
  horary: String, required:true
  deliveryLocality : [String],
  reputation : { type: Number, min: 1, max: 10 }


})

const Provider = mongoose.model('Provider', providerSchema)

export default Provider
