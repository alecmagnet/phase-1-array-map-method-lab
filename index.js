const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//bob = each array in splitArray that used to be a string?
//charles = each element of each bob??

// const titleCased = (titleArray) => {
//   const splitArray = titleArray.map((titleString) => titleString.split(" "))
//   console.log(splitArray)
//   const titleStringTC = splitArray.map((bob) => bob.map((charles) => `${charles[0].toUpperCase()}${charles.slice(1)}`));
//   console.log(titleStringTC)

//   //return tutorials
//   return titleStringTC
// }

const titleCased = () => {
  const splitArray = tutorials.map((titleString) => titleString.split(" "))
  console.log(splitArray)
  const titleArrayTC = splitArray.map((bob) => bob.map((charles) => `${charles[0].toUpperCase()}${charles.slice(1)}`));
  console.log(titleArrayTC)
  const titleStringTC = titleArrayTC.map((gus) => gus.join(' '))
  console.log(titleStringTC)


  //return tutorials
  return titleStringTC
}

titleCased(tutorials);