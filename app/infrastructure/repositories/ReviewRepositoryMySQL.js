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

    getAllReviewsByCompanyId(companyId){
        return this.db.Review.findAll({
            where:{company_id: companyId}
        })
    }

    getAllReviewsByProductId(productId){
        return this.db.Review.findAll({
            where:{product_id: productId}
        })
    }
}