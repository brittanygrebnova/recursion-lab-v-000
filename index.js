// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString === "") return "";
  else return reverseString(myString.substr(1)) + myString.charAt(0);
}

function isPalindrome(str) {
  const strLen = str.length;
  if (strLen === 0 || strLen === 1) {
    return true;
  }

  if (str[0] === str[strLen - 1]) {
    return isPalindrome(str.slice(1, strLen - 1));
  }

  return false;
}

function addUpTo(array, n) {
  if (n > 0) {
    addUpTo(array.slice(0, n).reduce((a, b) => a + b));
  } else {
    return array[0];
  }
}
