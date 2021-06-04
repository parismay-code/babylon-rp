import {
	makeObservable,
	observable,
	action,
} from 'mobx';

export default class InventoryStore {
	inventoryWeight = 0;
	inventoryMaxWeight = 40;
	
	clothes = [
		{
			type: 'hat',
			isPlaced: false,
			quality: -1,
			image: 'hat.svg',
			render: null,
			name: 'Футболка адидас',
			description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
			count: 0,
			weight: 0,
		},
		{
			type: 'glasses',
			isPlaced: false,
			quality: -1,
			image: 'glasses.svg',
			render: null,
			name: 'Футболка адидас',
			description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
			count: 0,
			weight: 0,
		},
		{
			type: 'tShirt',
			isPlaced: false,
			quality: -1,
			image: 'tShirt.svg',
			render: null,
			name: 'Футболка адидас',
			description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
			count: 0,
			weight: 0,
		},
		{
			type: 'top',
			hash: '123456789',
			isPlaced: false,
			quality: 2,
			image: 'top.svg',
			render: null,
			name: null,
			description: null,
			count: 0,
			weight: 0,
			maxStack: 0,
			options: null,
		},
		{
			type: 'backpack',
			hash: '123456789',
			isPlaced: true,
			quality: 2,
			image: 'backpack.svg',
			render: 'backpack.svg',
			name: 'Рюкзак',
			description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
			count: 1,
			weight: 20,
			maxStack: 1,
			options: ['putOn', 'drop', 'trade', 'split'],
		},
		{
			type: 'ring',
			isPlaced: false,
			quality: -1,
			image: 'ring.svg',
			render: null,
			name: 'Футболка адидас',
			description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
			count: 0,
			weight: 0,
		},
		{
			type: 'armour',
			isPlaced: false,
			quality: -1,
			image: 'armour.svg',
			render: null,
			name: 'Футболка адидас',
			description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
			count: 0,
			weight: 0,
		},
		{
			type: 'watch',
			isPlaced: false,
			quality: -1,
			image: 'watch.svg',
			render: null,
			name: 'Футболка адидас',
			description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
			count: 0,
			weight: 0,
		},
		{
			type: 'gloves',
			isPlaced: false,
			quality: -1,
			image: 'gloves.svg',
			render: null,
			name: 'Футболка адидас',
			description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
			count: 0,
			weight: 0,
		},
		{
			type: 'pants',
			isPlaced: false,
			quality: -1,
			image: 'pants.svg',
			render: null,
			name: 'Футболка адидас',
			description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
			count: 0,
			weight: 0,
		},
		{
			type: 'shoes',
			isPlaced: false,
			quality: -1,
			image: 'shoes.svg',
			render: null,
			name: 'Футболка адидас',
			description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
			count: 0,
			weight: 0,
		},
	];
	inventory = {
		pockets: [
			{
				type: 'hat',
				hash: '12345678',
				quality: 0,
				image: 'hat.svg',
				render: 'hat.svg',
				name: 'Новогодний колпак',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 1,
				weight: .2,
				maxStack: 10,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{
				type: null,
			},
			{
				type: null,
			},
			{
				type: null,
			},
			{
				type: null,
			},
			{
				type: null,
			},
		],
		backpack: [
			{
				type: 'pistol',
				hash: '123456',
				quality: 4,
				image: 'pistol.svg',
				render: 'pistol.svg',
				name: 'Пистолет',
				description: 'Из него убили 7 негров.',
				count: 1,
				weight: 2,
				maxStack: 10,
				options: ['use', 'drop', 'trade', 'split', 'fast'],
			},
			{
				type: 'tShirt',
				hash: '1236789',
				quality: 2,
				image: 'tShirt.svg',
				render: 'tShirtRender.svg',
				name: 'Футболка адидас',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 1,
				weight: .8,
				maxStack: 1,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{
				type: 'ems',
				hash: '1234589',
				quality: -1,
				image: 'ems.svg',
				render: 'ems.svg',
				name: 'Аптечка',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 1,
				weight: 2.5,
				maxStack: 10,
				options: ['use', 'drop', 'trade', 'split', 'fast'],
			},
			{type: null},
			{
				type: 'ring',
				hash: 'cloth1295',
				quality: 4,
				image: 'ring.svg',
				render: 'ring.svg',
				name: 'Обручальное кольцо',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 5,
				weight: .1,
				maxStack: 5,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{
				type: 'ring',
				hash: 'cloth1297',
				quality: 4,
				image: 'ring.svg',
				render: 'ring.svg',
				name: 'Обручальное кольцо',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 5,
				weight: .1,
				maxStack: 5,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{type: null},
			{type: null},
			{type: null},
			{
				type: 'glasses',
				hash: '2345678439',
				quality: 1,
				image: 'glasses.svg',
				render: 'glasses.svg',
				name: 'Солнцезащитные очки',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 1,
				weight: .1,
				maxStack: 1,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{
				type: 'top',
				hash: '234567138439',
				quality: 1,
				image: 'top.svg',
				render: 'top.svg',
				name: 'Куртка Punk',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 1,
				weight: .9,
				maxStack: 1,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{
				type: 'armour',
				hash: '234567438439',
				quality: 1,
				image: 'armour.svg',
				render: 'armour.svg',
				name: 'Разгрузочный жилет',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 1,
				weight: 5,
				maxStack: 1,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{
				type: 'watch',
				hash: '234512678439',
				quality: 1,
				image: 'watch.svg',
				render: 'watch.svg',
				name: 'Подводные часы',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 1,
				weight: .2,
				maxStack: 1,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{
				type: 'gloves',
				hash: '234511678439',
				quality: 3,
				image: 'gloves.svg',
				render: 'gloves.svg',
				name: 'Водительские перчатки',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 1,
				weight: .2,
				maxStack: 1,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{
				type: 'pants',
				hash: '2345678439',
				quality: 4,
				image: 'pants.svg',
				render: 'pants.svg',
				name: 'Рваные штаны',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 1,
				weight: .8,
				maxStack: 1,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{
				type: 'shoes',
				hash: '2345678439',
				quality: 2,
				image: 'shoes.svg',
				render: 'shoes.svg',
				name: 'Модные кеды',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 1,
				weight: .8,
				maxStack: 10,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{type: null},
			{
				type: 'shoes',
				hash: '2345678439',
				quality: 4,
				image: 'shoes.svg',
				render: 'shoes.svg',
				name: 'Модные кеды',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 3,
				weight: .8,
				maxStack: 10,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{
				type: 'hat',
				hash: '12345678',
				quality: 0,
				image: 'hat.svg',
				render: 'hat.svg',
				name: 'Новогодний колпак',
				description: 'Такая только у тебя и Майкла Джексона. Не стиранная, не глаженная.',
				count: 7,
				weight: .2,
				maxStack: 10,
				options: ['putOn', 'drop', 'trade', 'split'],
			},
			{type: null},
			{type: null},
		],
		fastSlots: [
			{
				component: 'backpack',
				id: 0
			},
			{
				component: 'backpack',
				id: 2
			},
			{
				component: null,
				id: null
			},
			{
				component: null,
				id: null
			},
			{
				component: null,
				id: null
			},
			{
				component: null,
				id: null
			},
		],
	};
	trunk = [];
	playersAround = [
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
		{
			id: 1,
			name: 'Paris May'
		},
	];
	
	constructor() {
		makeObservable(this, {
			clothes: observable,
			inventory: observable,
			trunk: observable,
			playersAround: observable,
			inventoryWeight: observable,
			inventoryMaxWeight: observable,
			
			calcInventoryWeight: action.bound,
			fetchClothesData: action.bound,
			fetchInventoryData: action.bound,
			changeInventoryData: action.bound,
			fetchTrunkData: action.bound,
			fetchPlayersAround: action.bound,
		});
	}
	
	calcInventoryWeight() {
		const pocketsArr = this.inventory.pockets.filter(el => el.weight);
		const backpackArr = this.inventory.backpack.filter(el => el.weight);
		
		let pocketsWeight, backpackWeight;
		
		if (pocketsArr.length > 1) pocketsWeight = pocketsArr.reduce((acc, curr) => acc + curr.weight * curr.count, 0);
		else if (pocketsArr.length === 1) pocketsWeight = pocketsArr[0].weight * pocketsArr[0].count;
		else pocketsWeight = 0;
		
		if (backpackArr.length > 1) backpackWeight = backpackArr.reduce((acc, curr) => acc + curr.weight * curr.count, 0);
		else if (backpackArr.length === 1) backpackWeight = backpackArr[0].weight * backpackArr[0].count;
		else backpackWeight = 0;
		
		return this.inventoryWeight = (pocketsWeight + backpackWeight).toFixed(1);
	}
	
	fetchClothesData(array) {
		return this.clothes = array;
	}
	
	fetchInventoryData(obj) {
		return this.inventory = obj;
	}
	
	changeInventoryData(data, obj) {
		if (data.component === 'clothes') this.clothes[data.id] = obj;
		else this.inventory[data.component][data.id] = obj;
		
		this.calcInventoryWeight();
	}
	
	fetchTrunkData(array) {
		return this.trunk = array;
	}
	
	fetchPlayersAround(array) {
		return this.playersAround = array;
	}
	
	destroy() {
	}
}