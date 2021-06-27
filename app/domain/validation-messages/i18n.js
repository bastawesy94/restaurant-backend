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
        'passwordLength':'password at least 6 charchters.',
        'mobileSaved': 'mbile number has been saved successfully.',
        'inputError' : 'mobile number is added .',
        'addNumberError' : 'please make sure that your number is valid and this the first time to sign up.',
        'serverError':'server problem please comunicate with technical support.',
        'signUpComplete': 'signup is successed.',
        'passwordError': 'please try again and make your password at least 6 charachters and string.',
        'emptyrResponse' : 'database is still empty',
        'usersDetails':'users details retrieved successfully.',
        'verifySuccess': 'verefication process is done.',
        'verifyfaild': 'verefication is faild , please try again.',
        'authFaild':'please retry and make sure that your password & mobile number are valid and registered.',
        'categoryDetails': 'all categories'
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
        'passwordLength':'كلمة المرور علي الأقل مكونة من ستة أحرف وأرقام ورموز.',
        'mobileSaved': 'تمت إضافة رقم الموبايل بنجاح.',
        'inputError' : 'خطأ في عملية التسجيل .',
        'addNumberError' : 'من فضلك تأكد من صيغة الرقم بشكل صحيح وأنه لم يتم التسجيل بالرقم من قبل.',
        'serverError':'حدث عطل بالخادم من فضلك التواصل مع الدعم أو إعادة المحاوله بشكل أخر .',
        'signUpComplete': 'تمت عملية تسجيل الحساب بنجاح واضافة كلمة مرور.',
        'passwordError': 'يجب إعادة كلمة المرور علي ان تكون جملة ولا تقل عن ستة رموز',
        'emptyrResponse' : 'قاعدة البيانات ماذالت فارغة.',
        'usersDetails':'تمت عملية استرجاع المستخدمين بنجاح.',
        'verifySuccess': 'تمت عملية التحقيق من المستخدم بنجاح.',
        'verifyfaild': 'فشل عملية التحقق , قم بأعادة المحاوله .',
        'authFaild':'من فضلك قم بإعادة المحاولة علي ان يتم التأكد من صحة الرقم وكلمة المرور.',
        'categoryDetails': 'تم إسترجاع جميع الخدمات',
    }
}
module.exports = {
    availableLangs ,
    messages
}