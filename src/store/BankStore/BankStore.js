import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class BankStore {
    cards = [
        {
            class: 'standard',
            price: 1200,
            color: '#AEBAF855',
            bonuses: [
                '10% CashBack',
                '15% остаток на депозите',
                'Бонусы'
            ]
        },
        {
            class: 'gold',
            price: 2200,
            color: '#EEE48855',
            bonuses: [
                '10% CashBack',
                '15% остаток на депозите',
                'Бонусы'
            ]
        },
        {
            class: 'premium',
            price: 5200,
            color: '#C89FEF55',
            bonuses: [
                '10% CashBack',
                '15% остаток на депозите',
                'Бонусы'
            ]
        },
    ];
    fines = [];
    withdrawHistory = [];
    topUpHistory = [];
    transferHistory = [];

    constructor() {
        makeObservable(this, {
            cards: observable,
            fines: observable,
            withdrawHistory: observable,
            topUpHistory: observable,
            transferHistory: observable,

            fetchFines: action.bound,
            changeFines: action.bound,
            fetchCards: action.bound,
            fetchWithdrawHistory: action.bound,
            addWithdraw: action.bound,
            fetchTopUpHistory: action.bound,
            addTopUp: action.bound,
            fetchTransferHistory: action.bound,
            addTransfer: action.bound,
        })
    }

    fetchFines(array) {
        return this.fines = array;
    }

    changeFines(obj) {
        switch (obj.type) {
            case 'add': return this.fines.unshift(obj.data);
            case 'remove':
                const index = this.fines.findIndex(el => el.id === obj.data);
                return this.fines.splice(index, 1);
            default: break;
        }
    }

    fetchCards(array) {
        return this.cards = array;
    }

    fetchWithdrawHistory(array) { 
        return this.withdrawHistory = array;
    }

    addWithdraw(data) {
        return this.withdrawHistory.unshift(data);
    }

    fetchTopUpHistory(array) {
        return this.topUpHistory = array;
    }

    addTopUp(data) {
        return this.topUpHistory.unshift(data);
    }

    fetchTransferHistory(array) {
        return this.transferHistory = array;
    }

    addTransfer(data) {
        return this.transferHistory.unshift(data);
    }

    destroy() {}
}