function forLoop(array) {
  var array = [];

  for(let i = 0; i <= 25; i++){
    if (i === 1) {
      return ["`I am 1 strange loop.`", ...array];
    } else {
      return [...array, `"I am ${i} strange loops."`];
    }
  }
}
