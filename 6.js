window.onload = function() {
    const fatherAge = parseInt(prompt("Father's age:"));
    const motherAge = parseInt(prompt("Mother's age:"));
    const yourAge = parseInt(prompt("Your age:"));

    const avgAge = (fatherAge + motherAge + yourAge) / 3;
    document.write(`Average age: ${avgAge.toFixed(2)}`);

    if (fatherAge > 50 && motherAge > 50) {
        alert("Spend more time with your family");
    } else if (fatherAge > 50) {
        alert("Spend more time with your father");
    } else if (motherAge > 50) {
        alert("Spend more time with your mother");
    }
};
