const removeFromArray = function(arr, ...args) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let track = false;
        for(let j = 0 ; j < args.length; j++) {
            if(arr[i] === args[j]) track = true;
        }
        if(!track) result.push(arr[i]);
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
