const Polyglot =  require('node-polyglot') 
const { messages }  = require('../../domain/validation-messages/i18n') 

module.exports.startPolyglot = (req, res, next) => {
    const locale = req.locale.language
    console.log("used language : " + locale)
    req.polyglot = new Polyglot()
    if (locale == 'ar') {
        req.polyglot.extend(messages.ar)
    } else {
        req.polyglot.extend(messages.en)
    }
    next()
}