const RestaurantRepo = require('../../domain/restaurant/RestaurantRepository')

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
        return this.db.Restaurant.findOne({
            where: {name : name}  
        }) 
    }
}