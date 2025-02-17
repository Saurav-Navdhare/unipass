const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true, limitedSymbols = symbols) => {
    let chars = alpha
    if (limitedSymbols.length == 0) {
        hasSymbols = false;
    }
    hasNumbers ? (chars += numbers) : ''
    hasSymbols ? (chars += limitedSymbols) : ''
    return generatePassword(length, chars)
}
const generatePassword = (length, chars) => {
    let password = ''
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return password
}
module.exports = createPassword