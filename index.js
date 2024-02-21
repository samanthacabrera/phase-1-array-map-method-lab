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

const titleCased = () => tutorials.map(function (str) {
  // splits string into individual words
  const words = str.split(' ');

  const word = words.map(function (word) {
    // checks if first letter needs to be capitalized or not
    if (word.charAt(0) === word.charAt(0).toLowerCase()) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (word);
  })
  // combines separate words into one string 
  return (word.toString().concat().replaceAll(',', ' '));
})
