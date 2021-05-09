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
    fines = [
        {
            id: 0,
            description: 'Вождение в нетрезвом состоянии или название штрафа которое еще длиннее',
            structure: 'LSPD',
            price: 800
        },
        {
            id: 1,
            description: 'Вождение в нетрезвом состоянии',
            structure: 'LSPD',
            price: 800
        },
        {
            id: 2,
            description: 'Вождение в нетрезвом состоянии',
            structure: 'LSPD',
            price: 800
        },
        {
            id: 3,
            description: 'Вождение в нетрезвом состоянии',
            structure: 'LSPD',
            price: 800
        },
        {
            id: 4,
            description: 'Вождение в нетрезвом состоянии',
            structure: 'LSPD',
            price: 800
        },
        {
            id: 5,
            description: 'Вождение в нетрезвом состоянии',
            structure: 'LSPD',
            price: 800
        },
        {
            id: 6,
            description: 'Вождение в нетрезвом состоянии',
            structure: 'LSPD',
            price: 800
        },
    ];
    withdrawHistory = [
        {
            date: '24.08.2021',
            count: 500
        },
        {
            date: '24.08.2021',
            count: 600
        },
        {
            date: '24.08.2021',
            count: 200
        },
        {
            date: '24.08.2021',
            count: 1500
        },
        {
            date: '24.08.2021',
            count: 800
        },
        {
            date: '24.08.2021',
            count: 90
        },
        {
            date: '24.08.2021',
            count: 8900
        },
        {
            date: '24.08.2021',
            count: 200
        },
        {
            date: '24.08.2021',
            count: 500
        },
    ];
    topUpHistory = [
        {
            date: '24.08.2021',
            count: 500
        },
        {
            date: '24.08.2021',
            count: 600
        },
        {
            date: '24.08.2021',
            count: 200
        },
        {
            date: '24.08.2021',
            count: 1500
        },
        {
            date: '24.08.2021',
            count: 800
        },
        {
            date: '24.08.2021',
            count: 90
        },
        {
            date: '24.08.2021',
            count: 8900
        },
        {
            date: '24.08.2021',
            count: 200
        },
        {
            date: '24.08.2021',
            count: 500
        },
    ];
    transferHistory = [
        {
            date: '24.08.2021',
            account: '8742 5211 4309 3190',
            count: 1520
        },
        {
            date: '24.08.2021',
            account: '8742 5211 4309 3190',
            count: 12300
        },
        {
            date: '24.08.2021',
            account: '8742 5211 4309 3190',
            count: 500
        },
        {
            date: '24.08.2021',
            account: '8742 5211 4309 3190',
            count: 8200
        },
        {
            date: '24.08.2021',
            account: '8742 5211 4309 3190',
            count: 100
        },
        {
            date: '24.08.2021',
            account: '8742 5211 4309 3190',
            count: 50
        },
        {
            date: '24.08.2021',
            account: '8742 5211 4309 3190',
            count: 50000
        },
        {
            date: '24.08.2021',
            account: '8742 5211 4309 3190',
            count: 1300
        },
        {
            date: '24.08.2021',
            account: '8742 5211 4309 3190',
            count: 800
        },
    ];

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