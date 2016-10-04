var counterComponent = function (scope) {
    var value = 0;

    var incEl;
    var decEl;
    var valEl;

    function _addEvent(name) {
        var event = document.createEvent('Event');
        event.initEvent(name, true, true);
        valEl.dispatchEvent(event);
    }

    function _increment() {
        value++;
        _addEvent('counter.modified');
        model.add();
    }

    function _decrement() {
        value--;
        _addEvent('counter.modified');
        model.remove()
    }

    function init() {
        incEl = scope.querySelector('[data-inc]');
        decEl = scope.querySelector('[data-dec]');
        valEl = scope.querySelector('[data-val]');

        valEl.addEventListener('counter.modified', function () {
            valEl.innerHTML = value;
        });

        incEl.onclick = function () { _increment() };
        decEl.onclick = function () { _decrement() };
    }
    return {
        init: init
    };
};