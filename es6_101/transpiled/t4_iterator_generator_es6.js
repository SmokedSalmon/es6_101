"use strict";

var iterator =
/*#__PURE__*/
regeneratorRuntime.mark(function createIterator() {
  return regeneratorRuntime.wrap(function createIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, createIterator, this);
});
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);