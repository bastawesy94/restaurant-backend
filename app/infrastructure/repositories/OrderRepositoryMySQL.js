const OrderRepo = require('../../domain/order/OrderRepository')

module.exports = class extends OrderRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllOrders(){
        return this.db.Order.findAll()
    }

    createOrder(order){
        return this.db.Order.create(order)
    }

    getAllOrdersByCompanyId(companyId){
        return this.db.Order.findAll({
            where:{company_id: companyId}
        })
    }

    getAllOrdersByMobileUserId(mobileUserId){
        return this.db.Order.findAll({
            where:{mobile_user_id: mobileUserId}
        })
    }
}