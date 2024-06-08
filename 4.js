window.onload = function() {
    let a = 0, b = 1, fib = [a, b];
    for (let i = 2; i < 100; i++) {
        const next = a + b;
        fib[i] = next;
        a = b;
        b = next;
    }
    document.write(fib.join(', '));
};
