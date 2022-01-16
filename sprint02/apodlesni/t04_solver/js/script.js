function solver(a, b, c, d, e) { 
    if (Number.isNaN(x = a ** 2 - 5 * b * c + d / 3 + e)) {
        alert('Wrong input')
    }
        return Number(a ** 2 - 5 * b * c + d / 3 + e).toFixed(2);
}
alert(solver(40, -9, 0.5, 7, 100));
alert(solver(40, "doesn't look like a number", 0.5, 7, 100));
alert(solver(40, -9, 0.5, 7));
//alert(solver(2, 2, 22, 2, 300))
//alert(solver(23, 12, 'what?', 2, 300));
//alert(solver(54, 20, 9, 150))

