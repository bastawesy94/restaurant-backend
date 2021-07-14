const { check } = require('express-validator')

module.exports = class{

    static mobileUserValidate(functionName) {
        switch (functionName) {
            case 'allByCategoryWithRates': {
                return [
                    check('categoryId').exists().withMessage('requiredField').isNumeric().withMessage('numberField'),
                ]
            }
        }
    }      
}
