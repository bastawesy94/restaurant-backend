const { check } = require('express-validator')

module.exports = class{

    static mobileUserValidate(functionName) {
        switch (functionName) {
            case 'registerUser': {
                return [
                    check('name').exists().withMessage('requiredField').isString().withMessage('stringField'),//1-1
                    check('phone').exists().withMessage('requiredField').isString().withMessage('stringField'),//1--1
                    check('email').exists().withMessage('requiredField').isEmail().withMessage('emailIsEmail'),//1--1
                    check('password').exists().withMessage('requiredField').isString().withMessage('stringField')
                        .isLength({ min: 5, max: 20 }).withMessage('passwordLength'),//1--1
                    check('pass_confirm').exists().withMessage('requiredField').isString().withMessage('stringField')
                        .isLength({ min: 5, max: 20 }).withMessage('passwordLength'),//1--1
                    check('gpa_score').exists().withMessage('requiredField'),//1-1
                    check('experience').exists().withMessage('requiredField').isString().withMessage('stringField'),//1-1
                    check('graduation_year').exists().withMessage('requiredField').isString().withMessage('stringField'),//1-1
                    check('working_status').exists().withMessage('requiredField').isBoolean().withMessage('booleanField'),//1-1
                    check('nationality_id').exists().withMessage('requiredField'),//1-1
                ]
            }
            case 'updateUser': {
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
            case 'user-authorization': {
                return [
                    check('email')
                        .exists().withMessage('requiredField')
                        .isEmail().withMessage('emailIsEmail'),
                    check('password')
                        .exists().withMessage('passwordRequiredField')
                        .isLength({ min: 5, max: 20 })
                        .withMessage('passwordLength')
                ]
            }
            case 'user-email': {
                return [
                    check('email')
                        .exists().withMessage('requiredField')
                        .isEmail().withMessage('emailIsEmail'),
                ]
            }
            case 'languageUser': {
                return [
                    check('language')
                        .exists().withMessage('requiredField').isString().withMessage('stringField')
                ]
            }
            case 'languageAPP': {
                return [
                    check('language_app')
                        .exists().withMessage('requiredField').isString().withMessage('stringField')
                ]
            }
            case 'osUser': {
                return [
                    check('os')
                        .exists().withMessage('requiredField').isString().withMessage('stringField')
                ]
            }
            case 'mobileNumber': {
                return [
                    check('mobileNumber')
                        .exists().withMessage('mobileNumberRequired')
                        .isString().withMessage('mobileNumbeString')
                        .isLength({ min: 9, max: 13 }).withMessage('mobileNumberLength'),
                ]
            }
            case 'vereficationCode': {
                return [
                    check('verificationCode')
                        .exists().withMessage('vereficationCodeRequired')
                        .isString().withMessage('vereficationCodeString')
                        .isLength({ min: 4, max: 4 }).withMessage('vereficationCodeLength'),
                ]
            }
            case 'signUp': {
                return [
                    check('password')
                    .exists().withMessage('passwordRequiredField')
                    .isString().withMessage('passwordStringField')
                    .isLength({ min: 6, max: 30 }).withMessage('passwordLength'),
                ]
            }
            case 'auth': {
                return [
                    check('password')
                    .exists().withMessage('passwordRequiredField')
                    .isString().withMessage('passwordStringField')
                    .isLength({ min: 6, max: 30 }).withMessage('passwordLength'),
                    check('mobileNumber')
                    .exists().withMessage('mobileNumberRequired')
                    .isString().withMessage('mobileNumbeString')
                    .isLength({ min: 9, max: 13 }).withMessage('mobileNumberLength'),
                    ]
            }
        }
    }
}
