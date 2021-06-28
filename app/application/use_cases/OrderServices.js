module.exports = class{
    constructor({orderRepository}){
        this.orderRepository = orderRepository
        this.getAllOrders= this.getAllOrders.bind(this)
        this.createOrder= this.createOrder.bind(this)
        this.getAllOrdersByCompanyId= this.getAllOrdersByCompanyId.bind(this)
        this.getAllOrdersByMobileUserId= this.getAllOrdersByMobileUserId.bind(this)
    }

    getAllOrders(){
        return this.orderRepository.getAllOrders()
    }

    createOrder(order){
        return this.orderRepository.createOrder(order)
    }

    getAllOrdersByCompanyId(companyId){
        return this.orderRepository.getAllOrdersByCompanyId(companyId)
    }

    getAllOrdersByMobileUserId(mobileUserId){
        return this.orderRepository.getAllOrdersByMobileUserId(mobileUserId)
    }
}