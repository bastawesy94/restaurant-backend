const { check ,param } = require('express-validator')

module.exports = class{

    static productValidate(functionName) {
        switch (functionName) {
            case 'allProductsByCompanyId': {
                return [
                    param('companyId').exists().withMessage('requiredField').isNumeric().withMessage('numberField'),
                ]
            }
            case 'allReviewsByProductId': {
                return [
                    param('productId').exists().withMessage('requiredField').isNumeric().withMessage('numberField'),
                ]
            }
        }
    }      
}
