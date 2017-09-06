import mongoose from 'mongoose'

// Mongoose models and schemas
const customerSchema = new mongoose.Schema({
  cuit: String,required:true
  name: String,required:true
  lastName : String,required:true
  locality:String,required:true
  address: String,required:true
  email: String ,required:true
  phone: Number(20), required:true
})

const Customer = mongoose.model('Customer', customerSchema)

export default Provider
