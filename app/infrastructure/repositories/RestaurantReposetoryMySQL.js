const RestaurantRepo = require('../../domain/restaurant/RestaurantRepository')
const { sequelize, QueryTypes } = require('sequelize');

module.exports = class extends RestaurantRepo{
   constructor({db}){
       super()
       this.db = db
   }
   createRestaurant(restaurant){
    return this.db.Restaurant.create(restaurant)
    }
    getRestaurantById(restaurantId){
        return this.db.Restaurant.findByPk(restaurantId)
    }
    updateRestaurant(restaurantId , restaurant){
        return this.db.Restaurant.update({
            name : restaurant.name ,
            address : restaurant.address
        }
        ,
        {
            where: {
            id : restaurantId
            }
        })
    }
    removeRestaurant(restaurantId){
        return this.db.Restaurant.destroy({
            where:{
                id : restaurantId
            }
        })
    }
    getAllRestaurants(){
        return this.db.Restaurant.findAll()
    }
    findRestaurantByName(name){
        return this.db.sequelize.query('SELECT restaurant.name,restaurant.address FROM restaurant WHERE restaurant.name = $1 ',{
            bind: [name],
            model: this.db.Restaurant,
            type: QueryTypes.SELECT
        })
    }
    findRestaurantByAddress(address){
        return this.db.sequelize.query('SELECT restaurant.name,restaurant.address FROM restaurant WHERE restaurant.address = $1 ',{
            bind: [address],
            model: this.db.Restaurant,
            type: QueryTypes.SELECT
        })
    }
    
}