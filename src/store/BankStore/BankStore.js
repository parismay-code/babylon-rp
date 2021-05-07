import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class BankStore {
    accountState = {
        nickname: 'Paris May',
        phone: '8 (800) 555-35-35',
        bank: 'fleeca',
        accountNumber: '5473 1287 8754 2111',
        createDate: '24/08',
        accountType: 'premium',
        balance: 937999092,
        // accountType: null,
        // balance: null,
        cash: 10000,
        business: [
            {
                id: 123,
                name: 'Магазин оружия #4',
                balance: 132490
            },
            {
                id: 11,
                name: 'Магазин одежды #3',
                balance: 4349040
            },
            {
                id: 23,
                name: 'Магазин 24/7 #11',
                balance: 93930180
            },
        ]
    };
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
    homes = [
        {
            id: 435,
            price: 150,
            payed: 3
        },
        {
            id: 790,
            price: 500,
            payed: 7
        }
    ];
    business = [
        {
            id: 95,
            price: 1500,
            payed: 4
        }
    ];
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
            accountState: observable,
            fines: observable,
            homes: observable,
            business: observable,
            cards: observable,
            withdrawHistory: observable,
            topUpHistory: observable,
            transferHistory: observable,

            fetchAccountState: action.bound,
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

    fetchAccountState(obj) {
        switch (obj.type) {
            case 'nickname': return this.accountState.nickname = obj.data;
            case 'phone': return this.accountState.phone = obj.data;
            case 'bank': return this.accountState.bank = obj.data;
            case 'accountNumber': return this.accountState.accountNumber = obj.data;
            case 'accountType': return this.accountState.accountType = obj.data;
            case 'createDate': return this.accountState.createDate = obj.data;
            case 'balance': return this.accountState.balance = obj.data;
            case 'business': return this.accountState.business = obj.data;
            default: return this.accountState = obj.data;
        }
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