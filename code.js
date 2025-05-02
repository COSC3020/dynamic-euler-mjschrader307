function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}

function e(n) {
  if (n === 0) return 1;
  else return 1.0 / factorial(n) + e(n - 1);
}

// --------------------------------------------------------------------

function factorial_alt(n) {
  let prod = 1;

  for (let i = 1; i < n + 1; i++) {
    prod *= i;
  }

  return prod;
}

function e_alt(n) {
  let sum = 0;

  for (let i = 0; i < n + 1; i++) {
    let to_add = 1.0 / factorial_alt(i);

    sum += to_add;
  }

  return sum;
}
