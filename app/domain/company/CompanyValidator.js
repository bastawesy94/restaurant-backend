const { check ,param } = require('express-validator')

module.exports = class{

    static companyValidate(functionName) {
        switch (functionName) {
            case 'allByCategoryWithRates': {
                return [
                    param('cateoryId').exists().withMessage('requiredField').isNumeric().withMessage('numberField'),
                ]
            }
            case 'getCompanyById': {
                return [
                    param('id').exists().withMessage('requiredField').isNumeric().withMessage('numberField'),
                ]
            }
            case 'getAllCompaniesByCategoryServiceId': {
                return [
                    param('categoryServiceId').exists().withMessage('requiredField').isNumeric().withMessage('numberField'),
                ]
            }
        }
    }      
}
