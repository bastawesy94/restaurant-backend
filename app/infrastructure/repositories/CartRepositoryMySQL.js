const CartRepo = require('../../domain/cart/CartRepository')
const { sequelize, QueryTypes } = require('sequelize');

module.exports = class extends CartRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllCarts(mobileUserId){
        return this.db.Cart.findAll({
            where:{
                isCompletedOrder : false,
                mobile_user_id: mobileUserId
            }
        })
    }

    createCart(cart){
        return this.db.Cart.create(cart)
    }

    removeCart(cartId){
        return this.db.Cart.destroy({
            where:{
                id: cartId
            }
        })
    }

}