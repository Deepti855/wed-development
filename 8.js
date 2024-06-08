window.onload = function() {
    let cubes = "";
    for (let i = 1; i <= 100; i++) {
        cubes += (i ** 3) + (i < 100 ? ', ' : '');
    }
    document.write(cubes);
};
