import {
	makeObservable,
	observable,
	action,
} from 'mobx';

export default class JobsStore {
	constructor() {
		makeObservable(this, {
			busData: observable,
			truckDriverData: observable,
			taxiData: observable,
			
			fetchJobData: action.bound,
			fetchTruckDriverOrders: action.bound,
			addTruckDriverOrder: action.bound,
			removeTruckDriverOrder: action.bound,
			addTaxiOrder: action.bound,
			removeTaxiOrder: action.bound,
		});
	}
	
	busData = {
		isEmployed: false,
		level: 0,
		completed: 0,
		arendPrice: 0,
		ways: [],
	};
	truckDriverData = {
		isEmployed: false,
		level: 0,
		arendPrice: 0,
		access: {
			state: true,
			private: false,
		},
		current: {
			name: null,
			price: null,
		},
		orders: [],
	};
	taxiData = {
		isEmployed: false,
		arendPrice: 0,
		orders: [],
	};
	
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
	addTaxiOrder(obj) {
		return this.taxiData.orders.unshift(obj);
	}
	removeTaxiOrder(id) {
		return this.taxiData.orders.filter(el => el.id === id).splice(0, 1);
	}
	destroy() {
	}
}