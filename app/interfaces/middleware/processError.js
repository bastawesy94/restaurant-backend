const { validationResult } = require('express-validator')

const translateMessages = (status, errObj, req) => {
    const errArr = Object.entries(errObj)
    errArr.forEach(err => {
        Object.keys(req.polyglot.phrases).forEach(phrase => {
            if (phrase == err[1].msg) {
                err[1].msg = req.polyglot.t(phrase)
            }
        })
    })
    const result = {code : errArr[0][1].code = status , message : errArr[0][1].msg }
    return (result)
}

module.exports.procErr = (req, res, next) => {
    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        return res.status(400).send(translateMessages(400, validationErrors.mapped(), req))
    } else {
        next()
    }
}