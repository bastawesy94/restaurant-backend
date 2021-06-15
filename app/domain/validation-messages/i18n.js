const availableLangs = ['ar', 'en']
const messages = {
    en: {
        'mobileNumberRequired': 'Mobile number is required.',
        'mobileNumbeString': 'Mobile number is string',
        'mobileNumberLength': 'Mobile number length is between 13 - 15 range.'
    },
    ar: {
        'mobileNumberRequired': 'يجب إدخال رقم الموبايل لتسجيل الحساب.',
        'mobileNumbeString': 'يجب إدخال رقم الموبايل علي هيأة جملة .', 
        'mobileNumberLength': 'رقم الموابيل يتراوح من 13 الي 15 رقم .'
    }
}
module.exports = {
    availableLangs ,
    messages
}