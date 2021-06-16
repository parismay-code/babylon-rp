import {
	makeObservable,
	observable,
	action,
} from 'mobx';

export default class ShopsStore {
	owner = null;
	
	clothesShopData = [];
	weaponShopData = {
		categories: [],
	};
	weaponBuyList = [];
	carDealerData = [];
	
	constructor() {
		makeObservable(this, {
			owner: observable,
			clothesShopData: observable,
			weaponShopData: observable,
			weaponBuyList: observable,
			carDealerData: observable,
			
			fetchClothesShopData: action.bound,
			setOwner: action.bound,
			fetchWeaponShopData: action.bound,
			addWeaponBuyListElement: action.bound,
			removeWeaponBuyListElement: action.bound,
			clearWeaponBuyList: action.bound,
			fetchCarDealerData: action.bound,
		});
	}
	
	fetchClothesShopData(array) {
		return this.clothesShopData = array;
	}
	
	setOwner(name) {
		return this.owner = name;
	}
	
	fetchWeaponShopData(obj) {
		return this.weaponShopData = obj;
	}
	
	addWeaponBuyListElement(obj) {
		const index = this.weaponBuyList.findIndex(el => el.name === obj.name);
		let _obj;
		
		if (index >= 0) return this.weaponBuyList[index].count += 1;
		else {
			if (obj.modifiers) {
				let price;
				if (obj.modifiers.filter(el => el.isPlaced).length > 0)
					price = obj.modifiers.filter(el => el.isPlaced).reduce((acc, curr) => acc + curr);
				else price = 0;
				
				_obj = {
					name: obj.name,
					icon: obj.icon,
					hash: obj.hash,
					count: 1,
					price: obj.price + price,
				};
			} else _obj = {
				name: obj.name,
				icon: obj.icon,
				hash: obj.hash,
				count: 1,
				price: obj.price,
			};
			
			return this.weaponBuyList.push(_obj);
		}
	}
	
	removeWeaponBuyListElement(id) {
		return this.weaponBuyList.splice(id, 1);
	}
	
	clearWeaponBuyList() {
		return this.weaponBuyList = [];
	}
	
	fetchCarDealerData(array) {
		return this.carDealerData = array;
	}
	
	destroy() {
	}
}