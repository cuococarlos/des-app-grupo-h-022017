import mongoose from 'mongoose'

// Mongoose models and schemas
const menuSchema = new mongoose.Schema({
  name: String(30),required:true
  description :String(200),required:true
  category: String,required:true // preguntar
  deliveryCost : { type: Number, min: 10, max: 40 }, required:true,
  validFrom : { type: Date },
  validTo : { type: Date },
  //deliveryTime :
  //deliveryAverageTime :
  minimunQuantity: { type: Number, min: 10, max: 70 }, required:true,
  minimunQuantityPrice: { type: Number, min: 0, max: 1000 }, required:true,
  minimunQuantity2: { type: Number, min: 40, max: 150 },
  minimunQuantityPrice2: { type: Number, min: 0, max: 1000 },
  reputation : { type: Number, min: 1, max: 10 },
  maxQuantitySalesPerDay : Number
})

const Menu = mongoose.model('Menu', menuSchema)

export default Menu
