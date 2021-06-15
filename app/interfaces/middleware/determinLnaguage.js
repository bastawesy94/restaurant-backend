const Polyglot =  require('node-polyglot') 
const { messages }  = require('../../domain/validation-messages/i18n') 

module.exports.startPolyglot = (req, res, next) => {
    const locale = req.locale.language
    console.log("ssss : " + locale)
    req.polyglot = new Polyglot()
    if (locale == 'ar') {
        req.polyglot.extend(messages.ar)
        console.log(1)
    } else {
        req.polyglot.extend(messages.en)
        console.log(2)
    }
    next()
}