const { check ,param } = require('express-validator')

module.exports = class{

    static mobileUserValidate(functionName) {
        switch (functionName) {
            case 'allByCategoryWithRates': {
                return [
                    param('cateoryId').exists().withMessage('requiredField').isNumeric().withMessage('numberField'),
                ]
            }
        }
    }      
}
