const angular = window.angular = require('angular');

require('./fruits-list/fruits-list.component');
require('./is-fruit/is-fruit.component');

angular.module('app', ['app.fruitsList', 'app.isFruit']);