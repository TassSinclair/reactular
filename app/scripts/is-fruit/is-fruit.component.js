class IsFruitDirective {

	constructor() {
		this.link = (scope, element) => element.text(element.text() + ' is a fruit');
	}

	static factory() {
		return new IsFruitDirective();
	}
}

angular.module('app.isFruit', [])
	.directive('isFruit', IsFruitDirective.factory);