var counters = document.querySelectorAll('[data-component="counter"]');
var results = document.querySelectorAll('[data-component="total"]')

counters.forEach(function (counter) {
    counterComponent(counter).init();
});

results.forEach(function (result) {
    totalComponent(result).init();
}); 

