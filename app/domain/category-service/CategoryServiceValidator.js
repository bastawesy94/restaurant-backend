// getAllCategoryServicesByCategoryId
const { check ,param } = require('express-validator')

module.exports = class{

    static cateegoryServiceValidate(functionName) {
        switch (functionName) {
            case 'getAllCategoryServicesByCategoryId': {
                return [
                    param('categoryId').exists().withMessage('requiredField').isNumeric().withMessage('numberField'),
                ]
            }
        }
    }      
}
