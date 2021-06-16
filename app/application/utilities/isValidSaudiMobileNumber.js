module.exports = (mobileUserNumber)=>{
    const fisrtPart = mobileUserNumber.substring(0 ,2)
    const firstPartSaudiNumber = ['50' , '53' , '54' , '55', '56' , '58' , '59']
    return firstPartSaudiNumber.includes(fisrtPart) 
}