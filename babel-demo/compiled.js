'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var log = console.info.bind(console);

var MenuItem = (function () {
	function MenuItem() {
		_classCallCheck(this, MenuItem);

		log('Menu item created');
		this.name = 'Menu Item';
	}

	_createClass(MenuItem, [{
		key: 'eat',
		value: function eat() {
			log('Eating ' + this.name);
		}
	}]);

	return MenuItem;
})();

var Taco = (function (_MenuItem) {
	function Taco() {
		_classCallCheck(this, Taco);

		_get(Object.getPrototypeOf(Taco.prototype), 'constructor', this).call(this);
		log('Taco created');

		this.name = 'Taco';
	}

	_inherits(Taco, _MenuItem);

	return Taco;
})(MenuItem);

var Burrito = (function (_MenuItem2) {
	function Burrito() {
		_classCallCheck(this, Burrito);

		_get(Object.getPrototypeOf(Burrito.prototype), 'constructor', this).call(this);
		log('Burrito created');

		this.name = 'Burrito';
	}

	_inherits(Burrito, _MenuItem2);

	return Burrito;
})(MenuItem);

var items = [new Taco(), new Burrito()];

items.forEach(function (i) {
	return i.eat();
});
