const CartRepo = require('../../domain/cart/CartRepository')
const { sequelize, QueryTypes } = require('sequelize');

module.exports = class extends CartRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllCarts(){
        return this.db.Cart.findAll({
            where:{
                isCompletedOrder : false
            }
        })
    }

    createCart(cart){
        return this.db.Cart.create(cart)
    }

}