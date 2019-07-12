function reverseNum(num) {
  const numSign = Math.sign(num);
  num += "";
  let newStr = "";
  if (num.charAt(0) !== "-") {
    newStr = "";
    for (let i = num.length - 1; i >= 0; i--) {
      newStr += num.charAt(i);
    } 
  } else {
    for (let i = num.length - 1; i >= 1; i--) {
      newStr += num.charAt(i);
    }
  }
  return parseFloat(newStr) * numSign;
}

console.log(reverseNum(-229977));


