module.exports = class{
    constructor({orderRepository}){
        this.orderRepository = orderRepository
        this.getAllOrders= this.getAllOrders.bind(this)
    }

    getAllOrders(){
        return this.orderRepository.getAllOrders()
    }
}