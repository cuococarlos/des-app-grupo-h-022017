import mongoose from 'mongoose'

// Mongoose models and schemas
const orderSchema = new mongoose.Schema({
  menu: Menu,required:true
  customer : Customer, required:true
  //deliveryType: ,required:true
  deliveryDate : Date ,required:true
  deliveryTime : Date ,required:true

})

const Order = mongoose.model('Order', orderSchema)

export default Order
