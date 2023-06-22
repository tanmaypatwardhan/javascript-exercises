const palindromes = function (str) {
    let result = "";
    for(let i = 0; i < str.length; i++) {
        if((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z') || (str[i] >= '0' && str[i] <= '9')) {
            result+=str[i];
        }
    }

    result = result.toLowerCase();
    let low = 0;
    let high = result.length - 1;

    while(low < high) {
        if(result[low] === result[high]) {
            low++;
            high--;
        } else {
            return false;
        }
    }

    return true;

};




// Do not edit below this line
module.exports = palindromes;
