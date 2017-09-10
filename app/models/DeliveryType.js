import mongoose from 'mongoose'

// Mongoose models and schemas
const deliveryTypeSchema = new mongoose.Schema({
  shipping: String,
  pickUp : String
})

const DeliveryType = mongoose.model('DeliveryType', orderSchema)

export default DeliveryType
