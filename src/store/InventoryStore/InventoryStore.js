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
		},
		{
			type: 'glasses',
			isPlaced: false,
			quality: -1,
			image: 'glasses.svg',
		},
		{
			type: 'tShirt',
			isPlaced: false,
			quality: -1,
			image: 'tShirt.svg',
		},
		{
			type: 'top',
			isPlaced: false,
			quality: -1,
			image: 'top.svg',
		},
		{
			type: 'backpack',
			isPlaced: false,
			quality: -1,
			image: 'backpack.svg',
		},
		{
			type: 'ring',
			isPlaced: false,
			quality: -1,
			image: 'ring.svg',
		},
		{
			type: 'armour',
			isPlaced: false,
			quality: -1,
			image: 'armour.svg',
		},
		{
			type: 'watch',
			isPlaced: false,
			quality: -1,
			image: 'watch.svg',
		},
		{
			type: 'gloves',
			isPlaced: false,
			quality: -1,
			image: 'gloves.svg',
		},
		{
			type: 'pants',
			isPlaced: false,
			quality: -1,
			image: 'pants.svg',
		},
		{
			type: 'shoes',
			isPlaced: false,
			quality: -1,
			image: 'shoes.svg',
		},
	];
	inventory = {
		pockets: [
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
		],
		backpack: [
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
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
			{type: null},
		],
		fastSlots: [
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
	playersAround = [];
	
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
		
		window.alt.emit('client::inventory:sendWeight', (pocketsWeight + backpackWeight).toFixed(1));
		
		return this.inventoryWeight = (pocketsWeight + backpackWeight).toFixed(1);
	}
	
	fetchClothesData(array) {
		this.clothes = array;
		return this.calcInventoryWeight();
	}
	
	fetchInventoryData(obj) {
		this.inventory = obj;
		return this.calcInventoryWeight();
	}
	
	changeInventoryData(data, obj) {
		if (data.component === 'clothes') this.clothes[data.id] = obj;
		else this.inventory[data.component][data.id] = obj;
		
		return this.calcInventoryWeight();
	}
	
	fetchTrunkData(array) {
		this.trunk = array;
	}
	
	fetchPlayersAround(array) {
		this.playersAround = array;
	}
	
	destroy() {
	}
}