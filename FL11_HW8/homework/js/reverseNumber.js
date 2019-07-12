function reverseNumber(num) {
  return (
    parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
  )                 
}

console.log(reverseNumber(-229977));

