import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class PlayerStore {
    playerState = {
        id: 0,
        level: 0,
        gender: 0,
        fraction: {
            type: 1,
            name: 'lspd'
        },
        nickname: 'Paris May',
        phone: {
            number: null,
            balance: 0
        },
        hp: 100,
        armour: 0,
        hunger: 100,
        thirst: 100,
        stars: 5,
        sick: {
            flu: false,
            amnesia: false,
            dependence: false,
            poisoning: false
        },
        money: {
            cash: 4000,
            card: 0
        },
        bank: {
            account: '5473 1287 8754 2111',
            type: 'premium',
            name: 'fleeca',
            createDate: '24/08',
        },
        business: [
            // {
            //     id: 123,
            //     name: 'Магазин оружия #4',
            //     extendPrice: 1500,
            //     daysExtended: 7,
            //     balance: 132490
            // },
            // {
            //     id: 11,
            //     name: 'Магазин одежды #3',
            //     extendPrice: 1500,
            //     daysExtended: 7,
            //     balance: 4349040
            // },
            // {
            //     id: 23,
            //     name: 'Магазин 24/7 #11',
            //     extendPrice: 1500,
            //     daysExtended: 7,
            //     balance: 93930180
            // },
        ],
        houses: [
            // {
            //     id: 435,
            //     extendPrice: 150,
            //     daysExtended: 3
            // },
            // {
            //     id: 790,
            //     extendPrice: 500,
            //     daysExtended: 7
            // }
        ],
        cars: [
            {
                id: 150,
                type: 'car',
                name: 'Laborgini',
            },
            {
                id: 13,
                type: 'car',
                name: 'Toyota',
            },
            {
                id: 1509,
                type: 'car',
                name: 'Infinity',
            },
            {
                id: 490,
                type: 'car',
                name: 'Nissan',
            },
            {
                id: 322,
                type: 'car',
                name: 'Lada',
            },
        ],
        isInGreenZone: false,
        isInCar: false,
        isRadioSet: false,
        ammo: {
            charged: 0,
            clip: 0
        },
        dead: {
            isDead: false,
            knockdown: 300,
            attacker: {
                nickname: 'Незнакомец',
                id: 0
            }
        },
        effects: {
            isHealing: false,
            selfHealing: false,
        },
    };

    constructor() {
        makeObservable(this, {
            playerState: observable,

            fetchPlayerState: action.bound,
        })
    }

    fetchPlayerState(obj) {
        switch (obj.type) {
            case 'id': return this.playerState.id = obj.data;
            case 'nickname': return this.playerState.nickname = obj.data;
            case 'phone': return this.playerState.phone = obj.data;
            case 'hp': return this.playerState.hp = obj.data;
            case 'armour': return this.playerState.armour = obj.data;
            case 'hunger': return this.playerState.hunger = obj.data;
            case 'thirst': return this.playerState.thirst = obj.data;
            case 'stars': return this.playerState.stars = obj.data;
            case 'sick': return this.playerState.sick = obj.data;
            case 'money': return this.playerState.money = obj.data;
            case 'bank': return this.playerState.bank = obj.data;
            case 'business': return this.playerState.business = obj.data;
            case 'houses': return this.playerState.houses = obj.data;
            case 'isInGreenZone': return this.playerState.isInGreenZone = obj.data;
            case 'isInCar': return this.playerState.isInCar = obj.data;
            case 'isRadioSet': return this.playerState.isRadioSet = obj.data;
            case 'ammo': return this.playerState.ammo = obj.data;
            case 'dead': return this.playerState.dead = obj.data;
            case 'effects': return this.playerState.effects = obj.data;
            case 'level': return this.playerState.level = obj.data;
            case 'gender': return this.playerState.gender = obj.data;
            case 'fraction': return this.playerState.fraction = obj.data;
            default: return this.playerState = obj.data;
        }
    }

    destroy() {}
}