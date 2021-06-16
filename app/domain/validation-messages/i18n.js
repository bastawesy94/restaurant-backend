const availableLangs = ['ar', 'en']
const messages = {
    en: {
        'mobileNumberRequired': 'Mobile number is required.',
        'mobileNumbeString': 'Mobile number is string',
        'mobileNumberLength': 'Mobile number at least 9 numbers.',
        'vereficationCodeRequired' : 'verefication code is required.',
        'vereficationCodeString' : 'verefication code must be string.',
        'vereficationCodeLength' : 'verefication code must be 4 characters.',
        'passwordRequiredField':'password is required field.',
        'passwordStringField' : 'password must be string.',
        'passwordLength':'password at least 6 charchters.'
    },
    ar: {
        'mobileNumberRequired': 'يجب إدخال رقم الموبايل لتسجيل الحساب.',
        'mobileNumbeString': 'يجب إدخال رقم الموبايل علي هيأة جملة .', 
        'mobileNumberLength': 'يجب إدخال رقم الموبايل لا يقل عن 9 أعداد .',
        'vereficationCodeRequired' : 'يجب إدخال رمز التأكيد المكون من أربعة رموز .',
        'vereficationCodeString' : 'رمز التأكيد يجب ان يكون جملة وليس رقم .',
        'vereficationCodeLength' : 'رمز التأكيد مكون من أربعة رموز .',
        'passwordRequiredField':'يجب إدخال كلمة المرور',
        'passwordStringField' : ' كلمة المرور يجب أن تكون جملة وليست رقم.',
        'passwordLength':'كلمة المرور علي الأقل مكونة من ستة أحرف وأرقام ورموز.'
    }
}
module.exports = {
    availableLangs ,
    messages
}