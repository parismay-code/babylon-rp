import {
	makeObservable,
	observable,
	action,
} from 'mobx';

export default class JobsStore {
	busData = {
		isEmployed: false,
		level: 3,
		completed: 258,
		arendPrice: 300,
		ways: [
			{
				id: 1,
				name: 'Маршрут',
				length: 25,
				earning: 1500,
				map: 'busWay1.png',
			},
			{
				id: 2,
				name: 'Маршрут',
				length: 25,
				earning: 1500,
				map: 'busWay1.png',
			}, {
				id: 3,
				name: 'Маршрут',
				length: 25,
				earning: 1500,
				map: 'busWay1.png',
			},
			{
				id: 4,
				name: 'Маршрут',
				length: 25,
				earning: 1500,
				map: 'busWay1.png',
			},
			{
				id: 5,
				name: 'Маршрут',
				length: 25,
				earning: 1500,
				map: 'busWay1.png',
			},
			{
				id: 6,
				name: 'Маршрут',
				length: 25,
				earning: 1500,
				map: 'busWay1.png',
			},
			{
				id: 7,
				name: 'Маршрут',
				length: 25,
				earning: 1500,
				map: 'busWay1.png',
			},
			{
				id: 8,
				name: 'Маршрут',
				length: 25,
				earning: 1500,
				map: 'busWay1.png',
			},
			{
				id: 9,
				name: 'Маршрут',
				length: 25,
				earning: 1500,
				map: 'busWay1.png',
			},
		],
	};
	truckDriverData = {
		isEmployed: false,
		level: 3,
		arendPrice: 1000,
		access: {
			state: true,
			private: false,
		},
		current: {
			name: null,
			price: null,
		},
		orders: [
			{
				id: 0,
				type: 'state',
				product: 'Дерево',
				count: 3000,
				earning: 6000,
			},
			{
				id: 1,
				type: 'state',
				product: 'Металл',
				count: 2000,
				earning: 4000,
			},
			{
				id: 2,
				type: 'state',
				product: 'Стекло',
				count: 8570,
				earning: 3000,
			},
			{
				id: 3,
				type: 'state',
				product: 'Песок',
				count: 1550,
				earning: 2000,
			},
			{
				id: 4,
				type: 'private',
				product: 'Автомобиль',
				count: 3,
				earning: 10000,
			},
			{
				id: 5,
				type: 'private',
				product: 'Еда',
				count: 1000,
				earning: 5000,
			},
			{
				id: 6,
				type: 'private',
				product: 'Почта',
				count: 5000,
				earning: 3000,
			},
			{
				id: 7,
				type: 'private',
				product: 'Сырье',
				count: 5000,
				earning: 8000,
			},
			{
				id: 8,
				type: 'private',
				product: 'Аммуниция',
				count: 3000,
				earning: 15000,
			},
			{
				id: 9,
				type: 'private',
				product: 'Одежда',
				count: 500,
				earning: 4000,
			},
			{
				id: 10,
				type: 'private',
				product: 'Автомобиль',
				count: 5,
				earning: 20000,
			},
			{
				id: 11,
				type: 'private',
				product: 'Сырье',
				count: 1550,
				earning: 2000,
			},
		],
	};
	taxiData = {
		isEmployed: false,
		arendPrice: 500,
		orders: [
			{
				id: 0,
				type: 'state',
				product: 'Дерево',
				count: 3000,
				earning: 6000,
			},
			{
				id: 1,
				type: 'state',
				product: 'Металл',
				count: 2000,
				earning: 4000,
			},
			{
				id: 2,
				type: 'state',
				product: 'Стекло',
				count: 8570,
				earning: 3000,
			},
			{
				id: 3,
				type: 'state',
				product: 'Песок',
				count: 1550,
				earning: 2000,
			},
			{
				id: 4,
				type: 'private',
				product: 'Автомобиль',
				count: 3,
				earning: 10000,
			},
			{
				id: 5,
				type: 'private',
				product: 'Еда',
				count: 1000,
				earning: 5000,
			},
			{
				id: 6,
				type: 'private',
				product: 'Почта',
				count: 5000,
				earning: 3000,
			},
			{
				id: 7,
				type: 'private',
				product: 'Сырье',
				count: 5000,
				earning: 8000,
			},
			{
				id: 8,
				type: 'private',
				product: 'Аммуниция',
				count: 3000,
				earning: 15000,
			},
			{
				id: 9,
				type: 'private',
				product: 'Одежда',
				count: 500,
				earning: 4000,
			},
			{
				id: 10,
				type: 'private',
				product: 'Автомобиль',
				count: 5,
				earning: 20000,
			},
			{
				id: 11,
				type: 'private',
				product: 'Сырье',
				count: 1550,
				earning: 2000,
			},
		],
	};
	
	constructor() {
		makeObservable(this, {
			busData: observable,
			truckDriverData: observable,
			taxiData: observable,
			
			fetchJobData: action.bound,
			fetchTruckDriverOrders: action.bound,
			addTruckDriverOrder: action.bound,
			removeTruckDriverOrder: action.bound,
		});
	}
	
	fetchJobData(obj) {
		switch (obj.type) {
			case 'bus':
				return this.busData = obj.data;
			case 'truckDriver':
				return this.truckDriverData = obj.data;
			case 'taxi':
				return this.taxiData = obj.data;
			default:
				console.log('wrong job name');
		}
	}
	
	fetchTruckDriverOrders(array) {
		return this.truckDriverData.orders = array;
	}
	
	addTruckDriverOrder(obj) {
		return this.truckDriverData.orders.unshift(obj);
	}
	
	removeTruckDriverOrder(id) {
		return this.truckDriverData.orders.filter(el => el.id === id).splice(0, 1);
	}
	
	destroy() {
	}
}