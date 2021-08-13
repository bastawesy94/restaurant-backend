const AccessTokenManager = require('../../infrastructure/security/AccessTokenManger')
const bcrypt = require('bcrypt')
const Restaurant = require('../../domain/restaurant/Restaurant');
module.exports = class {
        constructor({restaurantReposetory}){
                this.restaurantReposetory = restaurantReposetory
                this.listRestaurants = this.listRestaurants.bind(this)
              
        }
        async listRestaurants(){
                return await this.restaurantReposetory.getAllRestaurants()
        }
}