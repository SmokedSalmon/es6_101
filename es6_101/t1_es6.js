function para (a, ...args) {
    console.log(`Declared variable: ${a}`);
    for (let i = 0; i < args.length; i ++) {
        console.log(`Non-declared variable #${i}: ${args[i]}`);
    }
}

console.log(`*** Printing function para returns`)
para('Cat', 'Kitty', 'Puppy', 'purb');