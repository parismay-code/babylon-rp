import {
	makeObservable,
	observable,
	action,
} from 'mobx';

export default class CrimeMenuStore {
	constructor() {
		makeObservable(this, {
			fractionName: observable,
			territories: observable,
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
			allTerritories: observable,
			fractionsCaptureStatus: observable,
			fractionsFreeze: observable,
			
			fetchFractionName: action.bound,
			fetchFractionTerritories: action.bound,
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
			fetchAllTerritories: action.bound,
			changeTerritory: action.bound,
			setFractionsFreeze: action.bound,
			setFractionsCaptureStatus: action.bound,
		});
	}
	
	fractionsFreeze = {
		families: 0,
		ballas: 0,
		vagos: 0,
		mara: 0,
	};
	fractionsCaptureStatus = {
		families: false,
		ballas: false,
		vagos: false,
		mara: false,
	}
	
	playerRank = 1;
	playerAccess = [
		// 'changeRanks',
		// 'changeCars',
		// 'spawnCars',
		// 'manage',
		// 'closeStore',
		// 'manageCapture',
		// 'playCapture',
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
		10: 'Vagos',
		11: 'Vagos',
		12: 'Families',
		13: 'Families',
		14: 'Families',
		15: 'Families',
		16: 'Families',
		17: 'Families',
		18: 'Vagos',
		19: 'Vagos',
		20: 'Vagos',
		21: 'Vagos',
		22: 'Vagos',
		23: 'Families',
		24: 'Families',
		25: 'Ballas',
		26: 'Ballas',
		27: 'Ballas',
		28: 'Families',
		29: 'Vagos',
		30: 'Vagos',
		31: 'Vagos',
		32: 'Vagos',
		33: 'Vagos',
		34: 'Vagos',
		35: 'Ballas',
		36: 'Ballas',
		37: 'Ballas',
		38: 'Ballas',
		39: 'Ballas',
		40: 'Vagos',
		41: 'Vagos',
		42: 'Vagos',
		43: 'Vagos',
		44: 'Vagos',
		45: 'Ballas',
		46: 'Ballas',
		47: 'Ballas',
		48: 'Ballas',
		49: 'Ballas',
		50: 'Marabunta',
		51: 'Marabunta',
		52: 'Marabunta',
		53: 'Marabunta',
		54: 'Marabunta',
		55: 'Ballas',
		56: 'Ballas',
		57: 'Ballas',
		58: 'Ballas',
		59: 'Ballas',
		60: 'Marabunta',
		61: 'Marabunta',
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
	
	fetchFractionName(name) {
		this.fractionName = name;
	}
	
	fetchFractionTerritories(value) {
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
		this.players.filter(el => el.id === id)[0] = obj;
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
	}
	
	changeTerritory(id, gang) {
		this.allTerritories[id] = gang;
	}
	
	setFractionsFreeze(obj) {
		this.fractionsFreeze = obj;
	}
	
	setFractionsCaptureStatus(obj) {
		this.fractionCaptureStatus = obj;
	}
	
	destroy() {
	}
}