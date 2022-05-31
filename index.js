module.exports = function isValidBdMobileNumber(number) {
    const regex = /^\+?(88)?0?1[3456789][0-9]{8}\b/;
    return {
        isValid: regex.test(number)
    }
}