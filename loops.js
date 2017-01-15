function forLoop(array) {
  for (let i=1; i<26; i++) {
    if (i=1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push("I am ${i} strange loops.")
    }
  }
}

function whileLoop (n) {
  while (n > -1) {
    console.log(n)
    n--
  }
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop()
    
  } while (maybeTrue() && array.length > 0)
}