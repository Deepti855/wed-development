window.onload = function() {
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.write(`Today is ${days[today.getDay()]}, ${today.toDateString()}`);
};
