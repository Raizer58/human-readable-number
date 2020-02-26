module.exports = function toReadable (number) {
    const arrNumber = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
                      6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
                      11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
                      15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen',
                      19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
                      60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};
    
    let readableNumber ="";

    if (number == 0){
        return arrNumber[0];
     }
    
    if (number % 100 == 0){
       return readableNumber += arrNumber[Math.floor(number/100)] + " hundred";
    }

    if (number > 99){
        readableNumber += arrNumber[Math.floor(number/100)] + " hundred ";
     }
    
    if (number % 100 > -1 && number % 100 < 21 || (number % 100) % 10 == 0){
        return readableNumber += arrNumber[number % 100]
    }
    else {
        return readableNumber += arrNumber[Math.floor((number % 100) / 10) * 10] + " " + arrNumber[Math.floor((number % 100) % 10)]
    }
  }
