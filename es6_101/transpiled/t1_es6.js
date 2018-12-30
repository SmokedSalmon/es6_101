"use strict";

function para(a) {
  console.log("Declared variable: ".concat(a));

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    console.log("Non-declared variable #".concat(i, ": ").concat(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]));
  }
}

console.log("*** Printing function para returns");
para('Cat', 'Kitty', 'Puppy', 'purb');