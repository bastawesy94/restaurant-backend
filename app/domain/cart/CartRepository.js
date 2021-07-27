const models = require('../../infrastructure/db/models/index')

module.exports = class{
    isProductInCart(productId,mobileUserId){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
    getAllCarts(mobileUserId){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
    removeCart(cartId){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
    updateCart(itemId , mobileUserId , quantity){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
    createCart(cart){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
    incrementQuantityCart(itemId , mobileUserId){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
}