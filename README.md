## Getting Started
is-valid-bd-mobile-number is npm package to check if Bangladeshi mobile number is valid or not and gets operator information
## Features
* Any BD mobile phone number can be checked
## How to install
 ```javascript 
npm i bd-phone-number-validator
```
## Usage

```javascript
const isValidBdMobileNumber = require("is-valid-bd-phone");
const validation = isValidBdMobileNumber("+880150000000")
console.log(validation)
// will respond
{
    isValid: true,
    operator: "TeleTalk"
}
```
## 🚀 Authors
[@tawhidulIKhan](https://github.com/tawhidulIKhan)

## License

[MIT](https://choosealicense.com/licenses/mit/)
