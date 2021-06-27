const ReviewRepo = require('../../domain/review/ReviewRepository')

module.exports = class extends ReviewRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllReviews(){
        return this.db.Review.findAll()
    }

    createReview(review){
        return this.db.Review.create(review)
    }
}