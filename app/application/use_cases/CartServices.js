const Cart = require('../../domain/cart/Cart');

module.exports = class{
    constructor({cartRepository}){
        this.cartRepository = cartRepository
        this.getAllCarts= this.getAllCarts.bind(this)
        this.createCart= this.createCart.bind(this)
       
    }

    getAllCarts(){
        return this.cartRepository.getAllCarts()
    }
    createCart(productId , mobileUserId){
        const cart= new Cart(productId , mobileUserId)
        return this.cartRepository.createCart(cart)
    }

}