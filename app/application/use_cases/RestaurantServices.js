const Restaurant = require('../../domain/restaurant/Restaurant');
module.exports = class {
        constructor({restaurantReposetory}){
                this.restaurantReposetory = restaurantReposetory
                this.listRestaurants = this.listRestaurants.bind(this)
                this.createRestaurant= this.createRestaurant.bind(this)
                this.updateRestaurant= this.updateRestaurant.bind(this)
                this.removeRestaurant= this.removeRestaurant.bind(this)
        }
        async listRestaurants(){
                return await this.restaurantReposetory.getAllRestaurants()
        }
        async createRestaurant(mobileUserId , name , address){
                const restaurant= new Restaurant(mobileUserId , name , address)
                return await this.restaurantReposetory.createRestaurant(restaurant)
        }
        async updateRestaurant(restaurantId,restaurant){
                return await this.restaurantReposetory.updateRestaurant(restaurantId,restaurant)
        }
        async removeRestaurant(restaurantId){
                return await this.restaurantReposetory.removeRestaurant(restaurantId)
        }
}