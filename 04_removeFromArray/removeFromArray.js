const removeFromArray = function(array1, ...inputs) {
    const outcome = [];
    array1.forEach((item) => {
    if (!inputs.includes(item)) {
      outcome.push(item);
    }
    });
  
  return outcome;
    
    // OLD CODE 
    // let outcome = [];
    // let array2 = Array.from(inputs);
    // for (j = 0; j < array1.length; j++) {

    //     let check = 0; 
    //     for (i = 0; i < array2.length; i++){
            
    //         if (array1[j] === array2[i]){
    //             check = 1;
    //             break;
    //         }
           
    //     }
    //     if (check = 0){
    //         outcome.push(array1[j]);
    //     }
    // }
    // return Array.from(outcome);
    
};

// Do not edit below this line
module.exports = removeFromArray;
