import {
	makeObservable,
	observable,
	action,
} from 'mobx';

export default class FractionMenuStore {
	constructor() {
		makeObservable(this, {
			notifyQueue: observable,
			isNotifyShowed: observable,
			isQueuePaused: observable,
			fractionsFreeze: observable,
			fractionsCaptureStatus: observable,
			capture: observable,
			playerRank: observable,
			playerAccess: observable,
			fractionName: observable,
			territories: observable,
			isStoreLocked: observable,
			balance: observable,
			news: observable,
			events: observable,
			players: observable,
			filteredPlayersList: observable,
			ranks: observable,
			awardLogs: observable,
			reprimandLogs: observable,
			storeLogs: observable,
			allTerritories: observable,
			
			fetchFractionName: action.bound,
			fetchBalance: action.bound,
			fetchPlayers: action.bound,
			filterPlayers: action.bound,
			setStoreLocked: action.bound,
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
			fetchAllTerritories: action.bound,
			changeTerritory: action.bound,
			fetchCapture: action.bound,
			setFractionsFreeze: action.bound,
			setFractionsCaptureStatus: action.bound,
			getFractionTerritory: action.bound,
			fetchPlayerRank: action.bound,
			fetchPlayerAccess: action.bound,
		});
	}
	
	notifyQueue = [];
	isNotifyShowed = false;
	isQueuePaused = false;
	fractionsFreeze = {
		families: 0,
		ballas: 0,
		vagos: 0,
		mara: 0,
		armenian: 0,
		japanese: 0,
		russian: 0,
		lcn: 0,
	};
	fractionsCaptureStatus = {
		families: null,
		ballas: null,
		vagos: null,
		mara: null,
		armenian: null,
		japanese: null,
		russian: null,
		lcn: null,
	};
	capture = {
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
		// 'changeRanks',
		// 'changeCars',
		// 'spawnCars',
		// 'manage',
		// 'closeStore',
		// 'manageCapture',
		// 'sendNews',
		// 'removeNews',
	];
	fractionName = '';
	territories = 0;
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
	allTerritories = {
		1: 'Families',
		2: 'Families',
		3: 'Families',
		4: 'Families',
		5: 'Families',
		6: 'Families',
		7: 'Families',
		8: 'Families',
		9: 'Families',
		10: 'Families',
		11: 'Families',
		12: 'Vagos',
		13: 'Vagos',
		14: 'Families',
		15: 'Families',
		16: 'Families',
		17: 'Families',
		18: 'Families',
		19: 'Families',
		20: 'Vagos',
		21: 'Vagos',
		22: 'Vagos',
		23: 'Vagos',
		24: 'Vagos',
		25: 'Families',
		26: 'Ballas',
		27: 'Ballas',
		28: 'Ballas',
		29: 'Ballas',
		30: 'Ballas',
		31: 'Vagos',
		32: 'Vagos',
		33: 'Vagos',
		34: 'Vagos',
		35: 'Vagos',
		36: 'Vagos',
		37: 'Ballas',
		38: 'Ballas',
		39: 'Ballas',
		40: 'Ballas',
		41: 'Ballas',
		42: 'Vagos',
		43: 'Vagos',
		44: 'Vagos',
		45: 'Vagos',
		46: 'Vagos',
		47: 'Marabunta',
		48: 'Ballas',
		49: 'Ballas',
		50: 'Ballas',
		51: 'Ballas',
		52: 'Marabunta',
		53: 'Marabunta',
		54: 'Marabunta',
		55: 'Marabunta',
		56: 'Marabunta',
		57: 'Marabunta',
		58: 'Ballas',
		59: 'Ballas',
		60: 'Ballas',
		61: 'Ballas',
		62: 'Marabunta',
		63: 'Marabunta',
		64: 'Marabunta',
		65: 'Marabunta',
		66: 'Marabunta',
		67: 'Marabunta',
		68: 'Marabunta',
		69: 'Marabunta',
		70: 'Marabunta',
		71: 'Marabunta',
		72: 'Marabunta',
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
	
	fetchAllTerritories(obj) {
		this.allTerritories = obj;
		
		this.territories = Object.values(this.allTerritories).filter(el => el === this.fractionName).length;
	}
	
	changeTerritory(id, gang) {
		this.allTerritories[id] = gang;
	}
	
	fetchCapture(obj) {
		this.capture = obj;
	}
	
	setFractionsFreeze(obj) {
		this.fractionsFreeze = obj;
	}
	
	setFractionsCaptureStatus(obj) {
		this.fractionsCaptureStatus = obj;
	}
	
	getFractionTerritory(fraction) {
		return Object.values(this.allTerritories).filter(el => el === fraction).length;
	}
	
	fetchPlayerRank(value) {
		this.playerRank = value;
	}
	
	fetchPlayerAccess(array) {
		this.playerAccess = array;
	}
	
	destroy() {
	}
}