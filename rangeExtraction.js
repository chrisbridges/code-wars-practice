function solution(list){
  let result = []
//   loop through list
//   then for each value, while the next value is === to i + 1
  for (let i = 0; i < list.length; i++) {
    const rangeMinimum = 3
    let counter
    let currentValue = list[i]
    let range = [currentValue]
    let nextValue = list[i+1]
    while (currentValue + 1 === nextValue) {
      range.push(nextValue)
      currentValue = nextValue
    }
  }
}