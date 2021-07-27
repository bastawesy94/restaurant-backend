const Cart = require('../../domain/cart/Cart');

module.exports = class{
    constructor({cartRepository}){
        this.cartRepository = cartRepository
        this.getAllCarts= this.getAllCarts.bind(this)
        this.createCart= this.createCart.bind(this)
        this.removeCart= this.removeCart.bind(this)
        this.isProductInCart= this.isProductInCart.bind(this)
        this.incrementQuantityCart= this.incrementQuantityCart.bind(this)
    }

    getAllCarts(mobileUserId){
        return this.cartRepository.getAllCarts(mobileUserId)
    }
    createCart(productId , mobileUserId){
        const cart= new Cart(productId , mobileUserId)
        return this.cartRepository.createCart(cart)
    }
    removeCart(cartId){
        return this.cartRepository.removeCart(cartId)
    }
    isProductInCart(productId,mobileUserId){
        return this.cartRepository.isProductInCart(productId,mobileUserId)
    }
    incrementQuantityCart(itemId , mobileUserId){
        return this.cartRepository.incrementQuantityCart(itemId,mobileUserId)
    }

}