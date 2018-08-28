// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// this is flipping genius
  // I was initially so focused on trying to determine how each paren needed an accompanying pair and how
  // to determine that with indexes, then I learned of string.replace() - go JS - what a beaut
function validParentheses(parens){

  const length = parens.length / 2
  for (let i = 0; i < length; i++) {
    parens = parens.replace('()', '')
  }
  console.log(parens)
  return parens === ''
}

// replace will look through the string to find any match of the first arg - '()'
// if the parens are valid, eventually, no matter how nested they may be two parens will match the arg
// so it essentially finds the most nested and then loops its way through from the middle-out - fantastic
