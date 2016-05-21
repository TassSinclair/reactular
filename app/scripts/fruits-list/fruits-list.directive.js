var React = require('react');
var ReactDOM = require('react-dom');

class FruitListItem extends React.Component {
	render() {
		var fruit = this.props.fruit;

		return <li data-is-fruit>{fruit}</li>;
	}
}

class FruitsList extends React.Component {
	_fruitToFruitListItem(fruit, index) {
		return <FruitListItem fruit={fruit} key={index}/>;
	}

	render() {
		var fruitListItems = this.props.fruits.map(this._fruitToFruitListItem);
		return <ul>{fruitListItems}</ul>;
	}
}

class FruitsListDirective {
	
	constructor($compile) {
		this.restrict = 'E';
		this.scope = {
			fruits: '='
		};

		this.link = (scope, element, attrs) => {
			scope.$watch('fruits', () => {
				ReactDOM.render(<FruitsList fruits={scope.fruits}/>, element[0]);
				$compile(element.children())(scope);
			});
		};
	}

	static factory($compile) {
		return new FruitsListDirective($compile);
	}
}

export default FruitsListDirective;