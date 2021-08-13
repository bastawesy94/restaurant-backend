const RestaurantRepo = require('../../domain/restaurant/RestaurantRepository')

module.exports = class extends RestaurantRepo{
   constructor({db}){
       super()
       this.db = db
   }
   createRestaurant(restaurant){
    return this.db.Restaurant.create(restaurant)
    }
    updateRestaurant(restaurantId , restaurant){
        return this.db.Restaurant.update(restaurantId , restaurant)
    }
    removeRestaurant(restaurantId){
        return this.db.Restaurant.destroy(restaurantId)
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