function isNumber(element) {
  return element === +element;
}

export function sortList(arr) {
  
  const flatList = arr.flat(Infinity);
  const numberOnly = flatList.filter(element => isNumber(element))
  const sortArray = numberOnly.sort((a,b)=> a-b)
  const removeDup = new Set(sortArray)
  return(Array.from(removeDup));
}



