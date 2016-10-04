var total = 0;

var model = new EventEmitter();

model.add = function() {
    total++;
    model.trigger('added', [total]);
};

model.remove = function () {
    total--;
    model.trigger('deleted', [total])
}