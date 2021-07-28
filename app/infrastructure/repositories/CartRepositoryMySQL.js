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
    updateCart(itemId ,mobileUserId, quantity){
        return this.db.Cart.update({quantity : quantity},{
            where:{
                id: itemId,
                mobile_user_id: mobileUserId,
                isCompletedOrder : false,
            }
        })
    }
    displayReceipt(mobileUserId){
        return this.db.sequelize.query('SELECT cart.mobile_user_id , SUM(product.cost) as sumOfCosts FROM cart LEFT JOIN product ON product.id = cart.product_id WHERE cart.mobile_user_id= $1 AND isCompletedOrder= false GROUP BY cart.mobile_user_id',{
            bind: [mobileUserId],
            type: QueryTypes.SELECT
        })
    }
}