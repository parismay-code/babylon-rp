import {
	makeObservable,
	observable,
	action,
} from 'mobx';

export default class MafiaMenuStore {
	constructor() {
		makeObservable(this, {
			fractionName: observable,
			business: observable,
			balance: observable,
			isStoreLocked: observable,
			news: observable,
			events: observable,
			players: observable,
			filteredPlayersList: observable,
			ranks: observable,
			awardLogs: observable,
			reprimandLogs: observable,
			storeLogs: observable,
			allBusiness: observable,
			fractionsBizwarStatus: observable,
			fractionsFreeze: observable,
			bizwar: observable,
			notifyQueue: observable,
			isNotifyShowed: observable,
			isQueuePaused: observable,
			
			fetchFractionName: action.bound,
			fetchFractionBusiness: action.bound,
			fetchPlayers: action.bound,
			filterPlayers: action.bound,
			setStoreLocked: action.bound,
			fetchBalance: action.bound,
			changePlayerData: action.bound,
			fetchNews: action.bound,
			changeNews: action.bound,
			fetchEvents: action.bound,
			changeEvents: action.bound,
			fetchRanksData: action.bound,
			changeRankData: action.bound,
			fetchAwardLogs: action.bound,
			addAward: action.bound,
			fetchReprimandLogs: action.bound,
			addReprimandLogs: action.bound,
			fetchStoreLogs: action.bound,
			addStoreLogs: action.bound,
			fetchAllBusiness: action.bound,
			changeBusiness: action.bound,
			setFractionsFreeze: action.bound,
			setFractionsBizwarStatus: action.bound,
			fetchBizwar: action.bound,
			addNotify: action.bound,
			getFractionBusiness: action.bound,
		});
	}
	
	notifyQueue = [];
	isNotifyShowed = false;
	isQueuePaused = false;
	fractionsFreeze = {
		armenian: 0,
		japanese: 0,
		russian: 0,
		lcn: 0,
	};
	fractionsBizwarStatus = {
		armenian: null,
		japanese: null,
		russian: null,
		lcn: null,
	};
	bizwar = {
		attack: null,
		defence: null,
		count: 10,
		time: {
			hours: 14,
			minutes: 0,
			move: 0,
		},
		access: {
			items: {
				medkit: false,
				armour: false,
				drug: false,
				animation: false,
			},
			guns: {
				pistol: false,
				smg: false,
				assault: false,
				shotgun: false,
			},
		},
		players: [],
		lastGameBest: [],
	};
	playerRank = 1;
	playerAccess = [
		'changeRanks',
		'changeCars',
		'spawnCars',
		'manage',
		'closeStore',
		'manageBizwar',
		'sendNews',
		'removeNews',
	];
	fractionName = 'Italian';
	business = 50;
	isStoreLocked = false;
	balance = 0;
	news = [];
	events = [];
	players = [];
	filteredPlayersList = [];
	ranks = [];
	awardLogs = [];
	reprimandLogs = [];
	storeLogs = [];
	allBusiness = {
		1: 'Japanese',
		2: 'Japanese',
		3: 'Japanese',
		4: 'Japanese',
		5: 'Japanese',
		6: 'Japanese',
		7: 'Japanese',
		8: 'Japanese',
		9: 'Japanese',
		10: 'Armenian',
		11: 'Armenian',
		12: 'Japanese',
		13: 'Japanese',
		14: 'Japanese',
		15: 'Japanese',
		16: 'Japanese',
		17: 'Japanese',
		18: 'Armenian',
		19: 'Armenian',
		20: 'Armenian',
		21: 'Armenian',
		22: 'Armenian',
		23: 'Japanese',
		24: 'Japanese',
		25: 'Italian',
		26: 'Italian',
		27: 'Italian',
		28: 'Japanese',
		29: 'Armenian',
		30: 'Armenian',
		31: 'Armenian',
		32: 'Armenian',
		33: 'Armenian',
		34: 'Armenian',
		35: 'Italian',
		36: 'Italian',
		37: 'Italian',
		38: 'Italian',
		39: 'Italian',
		40: 'Armenian',
		41: 'Armenian',
		42: 'Armenian',
		43: 'Armenian',
		44: 'Armenian',
		45: 'Italian',
		46: 'Italian',
		47: 'Italian',
		48: 'Italian',
		49: 'Italian',
		50: 'Russian',
		51: 'Russian',
		52: 'Russian',
		53: 'Russian',
		54: 'Russian',
		55: 'Italian',
		56: 'Italian',
		57: 'Italian',
		58: 'Italian',
		59: 'Italian',
		60: 'Russian',
		61: 'Russian',
		62: 'Russian',
		63: 'Russian',
		64: 'Russian',
		65: 'Russian',
		66: 'Russian',
		67: 'Russian',
		68: 'Russian',
		69: 'Russian',
		70: 'Russian',
		71: 'Russian',
		72: 'Russian',
	};
	
	addNotify(text, timeout) {
		if (!this.isQueuePaused) {
			if (text === this.notifyQueue[this.notifyQueue.length - 1]?.text) return;
			this.notifyQueue.push({text, timeout});
			
			if (this.notifyQueue.length > 5) {
				this.notifyQueue = [];
				this.notifyQueue.push({text: 'Слишком часто'});
				
				this.isQueuePaused = true;
				
				setTimeout(() => this.isQueuePaused = false, 3000);
			}
		}
	}
	fetchFractionName(name) {
		this.fractionName = name;
	}
	fetchFractionBusiness(value) {
		this.territories = value;
	}
	fetchBalance(value) {
		this.balance = value;
	}
	fetchPlayers(array) {
		this.players = array;
		this.filteredPlayersList = array;
	}
	filterPlayers(text) {
		if (text) {
			if (isNaN(Number(text))) this.filteredPlayersList = this.players.filter(el => el.nickname.toLowerCase().includes(text.toLowerCase()));
			else this.filteredPlayersList = this.players.filter(el => el.id === Number(text));
		} else this.filteredPlayersList = this.players;
	}
	setStoreLocked(bool) {
		this.isStoreLocked = bool;
	}
	changePlayerData(id, obj) {
		this.players[this.players.findIndex(el => el.id === id)] = obj;
		this.filteredPlayersList = this.players;
	}
	fetchNews(array) {
		this.news = array;
	}
	changeNews(type, ...args) {
		if (type === 'add') this.news.unshift(args[0]);
		else this.news.splice(args[0], 1);
	}
	fetchEvents(array) {
		this.events = array;
	}
	changeEvents(type, ...args) {
		if (type === 'add') this.events.unshift(args[0]);
		else this.events.splice(args[0], 1);
	}
	fetchRanksData(array) {
		this.ranks = array;
	}
	changeRankData(rank, obj) {
		this.ranks[rank - 1] = obj;
	}
	fetchAwardLogs(array) {
		this.awardLogs = array;
	}
	addAward(obj) {
		this.awardLogs.unshift(obj);
	}
	fetchReprimandLogs(array) {
		this.reprimandLogs = array;
	}
	addReprimandLogs(obj) {
		this.reprimandLogs.unshift(obj);
	}
	fetchStoreLogs(array) {
		this.storeLogs = array;
	}
	addStoreLogs(obj) {
		this.storeLogs.unshift(obj);
	}
	fetchAllBusiness(obj) {
		this.allTerritories = obj;
	}
	changeBusiness(id, mafia) {
		this.allBusiness[id] = mafia;
	}
	fetchBizwar(obj) {
		this.bizwar = obj;
	}
	setFractionsFreeze(obj) {
		this.fractionsFreeze = obj;
	}
	setFractionsBizwarStatus(obj) {
		this.fractionBizwarStatus = obj;
	}
	getFractionBusiness(mafia) {
		return Object.values(this.allBusiness).filter(el => el === mafia).length;
	}
	
	destroy() {
	}
}