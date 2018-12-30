let iterator = function *createIterator () {
    yield 1;
    yield 2;
    yield 3;
};

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);