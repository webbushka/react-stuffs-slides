'use strict';

const log = console.info.bind(console);

class MenuItem {
	constructor() {
		log('Menu item created');
		this.name = 'Menu Item';
	}

	eat() {
		log(`Eating ${this.name}`);
	}
}

class Taco extends MenuItem {
	constructor() {
		super();
		log('Taco created');

		this.name = 'Taco';
	}
}

class Burrito extends MenuItem {
	constructor() {
		super();
		log('Burrito created');

		this.name = 'Burrito';
	}
}

let items = [new Taco(), new Burrito()];

items.forEach(i => i.eat());
