function repeatStringNumTimes(str, num){
  let newStr = "";
  if (num <= 0){
    return newStr;
  }

  for (let i = 0; i < num; i++){
    newStr = newStr.concat(str);
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));