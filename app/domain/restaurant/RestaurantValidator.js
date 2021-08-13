const { check } = require('express-validator')

module.exports = class{

    static restaurantValidate(functionName) {
        switch (functionName) {
            case 'createRestaurant': {
                return [
                    check('name').exists().withMessage('nameRequiredField').isString().withMessage('nameStringField'),
                    check('address').exists().withMessage('addressRequiredField').isString().withMessage('addressStringField'),
                ]
            }
            case 'updateRestaurant': {
                return [
                    check('name').exists().withMessage('requiredField').isString().withMessage('stringField'),//1-1
                    check('experience').exists().withMessage('requiredField').isString().withMessage('stringField'),//1-1
                    check('graduation_status_id').exists().withMessage('requiredField'),//1-1
                    check('gpa_id').exists().withMessage('requiredField'),//1-1
                    check('gpa_score').exists().withMessage('requiredField'),//1-1
                    check('working_status').exists().withMessage('requiredField').isBoolean().withMessage('booleanField'),//1-1
                    check('graduation_year').exists().withMessage('requiredField').isString().withMessage('stringField'),//1-1
                    check('nationality_id').exists().withMessage('requiredField'),//1-1
                ]
            }
        }
    }
}
