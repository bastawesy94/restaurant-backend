const availableLangs = ['ar', 'en']
const messages = {
    en: {
        'mobileNumberRequired': 'Mobile number is required.',
        'mobileNumbeString': 'Mobile number is string',
        'mobileNumberLength': 'Mobile number at least 9 numbers.',

        'emailRequired': 'email is required.',
        'emailString': 'emailis string',
        'emailLength': 'email at least 9 numbers.',

        'userNameRequiredField':'userName is required field.',
        'userNameStringField' : 'userName must be string.',
        'userNameLength':'userName at least 6 charchters.',

        'passwordRequiredField':'password is required field.',
        'passwordStringField' : 'password must be string.',
        'passwordLength':'password at least 6 charchters.',

        'signUpComplete': 'signup is successed.',
        'signUpError': 'signup Error',
        'serverError':'server problem please comunicate with technical support.',
        'emptyrResponse' : 'database still empty',
        'mobileUsers': 'all mobile users',
        'authFaild': 'authentication is faild.'
    },
    ar: {
        'mobileNumberRequired': 'يجب إدخال رقم الموبايل لتسجيل الحساب.',
        'mobileNumbeString': 'يجب إدخال رقم الموبايل علي هيأة جملة .', 
        'mobileNumberLength': 'يجب إدخال رقم الموبايل لا يقل عن 9 أعداد .',

        'emailRequired': 'يجب ادخال البريد الالكتروني.',
        'emailString': 'البريد الالكتروني لابد ان يكون جملة .',
        'emailLength': 'الايميل لا يقل عن  ستة أحرف',

        'passwordRequired': 'يجب أدخال الرقم السري.',
        'passwordString': 'الرقم السري لابد ان يكون جمله .',
        'passwordLength': 'الرقم السري لايقل عن ستةرموز',

        'userNameRequired': 'يجب ادخال اسم مستخدم للنظام.',
        'userNameString': 'يجب ادخال اسم المستخدم علي هيئة جملة .',
        'userNameLength': 'يجب الا يفل اسم المستخدم عن ستة احرف',

        'serverError':'حدث عطل بالخادم من فضلك التواصل مع الدعم أو إعادة المحاوله بشكل أخر .',
        'signUpComplete': 'تمت عملية تسجيل الحساب بنجاح واضافة كلمة مرور.',
        'signUpError': 'خطأ في عملية تسجيل الحساب .',
        'emptyrResponse' : 'قاعدة البيانات ماذالت فارغة .',
        'mobileUsers': 'جميع مستخدمين النظام .',
        'authFaild': 'فشل في عملية تسجيل الدخول '

  
    }
}
module.exports = {
    availableLangs ,
    messages
}