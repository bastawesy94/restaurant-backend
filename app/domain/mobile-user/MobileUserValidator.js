const { check } = require('express-validator')

module.exports = class{

    static mobileUserValidate(functionName) {
        switch (functionName) {
            case 'signUp': {
                return [
                    check('password')
                    .exists().withMessage('passwordRequiredField')
                    .isString().withMessage('passwordStringField')
                    .isLength({ min: 6, max: 30 }).withMessage('passwordLength'),
                    check('userName')
                    .exists().withMessage('userNameRequiredField')
                    .isString().withMessage('userNameStringField')
                    .isLength({ min: 6, max: 30 }).withMessage('userNameLength'),
                    check('mobileNumber')
                    .exists().withMessage('mobileNumberRequiredField')
                    .isString().withMessage('mobileNumberStringField')
                    .isLength({ min: 6, max: 30 }).withMessage('mobileNumberLength'),
                    check('email')
                    .exists().withMessage('emailRequiredField')
                    .isString().withMessage('emailStringField')
                    .isLength({ min: 6, max: 30 }).withMessage('emailLength'),
                ]
            }
            case 'auth': {
                return [
                    check('password')
                    .exists().withMessage('passwordRequiredField')
                    .isString().withMessage('passwordStringField')
                    .isLength({ min: 6, max: 30 }).withMessage('passwordLength'),
                    check('userName')
                    .exists().withMessage('userNameRequiredField')
                    .isString().withMessage('userNameStringField')
                    .isLength({ min: 6, max: 30 }).withMessage('userNameLength'),
                    ]
            }
        }
    }
}
