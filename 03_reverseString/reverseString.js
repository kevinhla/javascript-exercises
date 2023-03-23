const reverseString = function(string) {
    let reverse = [];
    for (i = 0; i < string.length; i++) {
        reverse.push(string.charAt(string.length - i - 1));
      }
    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
