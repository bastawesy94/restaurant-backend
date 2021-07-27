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
            },
            include:[{
                model : this.db.Product,
                attributes: ['id' , 'name' , 'cost'] 
            }]
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
    isProductInCart(productId ,mobileUserId){
        return this.db.Cart.findOne({
            where:{
                product_id: productId,
                isCompletedOrder : false,
                mobile_user_id: mobileUserId
            }
        })
    }
    incrementQuantityCart(itemId , mobileUserId){
        return this.db.Cart.increment('quantity', { by: 1, where: { id: itemId , mobile_user_id : mobileUserId }});
    }

}