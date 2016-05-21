import FruitsListDirective from './fruits-list.directive'

angular.module('app.fruitsList', [])
	.directive('fruitsList', FruitsListDirective.factory);