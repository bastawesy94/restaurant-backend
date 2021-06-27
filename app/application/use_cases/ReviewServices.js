module.exports = class{
    constructor({reviewRepository}){
        this.reviewRepository = reviewRepository
        this.getAllReviews= this.getAllReviews.bind(this)
    }

    getAllReviews(){
        return this.reviewRepository.getAllReviews()
    }
}