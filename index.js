/**
 * Mobile phone operator lists of Bangladesh 
 */
const operatorList = {
   "gp": {
        label: "Grameenphone",
        rules: /^\+?(88)?0?1[37][0-9]{8}\b/
    },
    "blink": {
        label: "Banglalink",
        rules: /^\+?(88)?0?1[49][0-9]{8}\b/
    },
    "robi": {
        label: "Robi",
        rules: /^\+?(88)?0?1[68][0-9]{8}\b/
    },
    "teletalk": {
        label: "TeleTalk",
        rules: /^\+?(88)?0?1[5][0-9]{8}\b/
    },
}

/**
 * Get operator name
 * @param {number} number 
 * @returns operator name
 */

const getOperator = (number) => {
    let result = null
    for(const itr in operatorList){
        const operator = operatorList[itr];
        const isMatched = operator.rules.test(number);
        if(isMatched){
            result =  isMatched ? operator.label : null
            break;
        }
    }
    return result;
}

/**
 * Check if the given number is valid and get operator name
 * @param {number} number 
 * @returns object with phone number validity and operator
 */

const isValidBdMobileNumber = (number) => {
    const regex = /^\+?(88)?0?1[3456789][0-9]{8}\b/;
    const isValid = regex.test(number);
    return {
        isValid: isValid || false,
        operator: isValid ? getOperator(number) : null
    }
}
module.exports = isValidBdMobileNumber;
