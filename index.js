const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  let newTutorials = tutorials.map(title=>{
    // first lowercase everything, and split it into words
    let newStr = title.split(" ").map(word=>{
      // for each word, upcase the first letter and join it to the rest of the word
      return (word.replace(word[0], word[0].toUpperCase() ) )
    })
    // newStr is the array of capitalized words, join them with spaces to reform the title
    return newStr.join(" ")
  } )
  return newTutorials
}
