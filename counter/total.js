var totalComponent = function (scope) {
    var valEl;

    function _print(total) {
        valEl.innerHTML = total
    }

    function init() {
        valEl = scope.querySelector('[data-val]');
        
        model.on('added', _print);
        model.on('deleted', _print);
    }

    return {
        init: init,
    }
};