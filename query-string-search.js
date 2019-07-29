// This problem was asked by Twitter.

// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.


// First pass through, just to get something working:
function search (query, set) {
  // query consists of starting letters, so don't have to worry about matches in middle of word
  console.log(query, typeof query)
  const queryLength = query.length
  return set.filter(word => word.substring(0, queryLength) === query)
}

console.log(search('de', ['dog', 'deer', 'deal']), 'should return [deer, deal]')
console.log(search('ch', ['chow', 'charmander', 'cat']), 'should return [chow, charmander]')
console.log(search('b', ['boss', 'bat', 'cat']), 'should return [boss, bat]')

