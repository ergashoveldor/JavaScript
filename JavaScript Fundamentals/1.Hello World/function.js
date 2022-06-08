// function showMessage(from, text) {
//   if (text === undefined) {
//     text = "no text given";
//   }

//   console.log(from + ": " + text);
// }

// showMessage('Eldor')

// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     console.log(i); // a prime
  
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// showPrimes(15)

function showPrimes(n) {
  for(let i = 2; i < n; i++) {
    if(isPrime(i )) continue;
    console.log(i);
  }
}

function isPrime(n) {
  for(let i = 2; i < n; i++) {
    if(n % i == 0) return false;
  }
  return true;
}

showPrimes(9)