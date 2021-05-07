import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class BattlePassStore {
    season = 'Знакомство';

    coins = 600;

    quests = [
        {
            title: 'Занятная продажа',
            options: [
                {
                    text: 'Продайте 10 тонн породы на горном карьере',
                    completed: true,
                    points: 50
                },
                {
                    text: 'Продайте 15 тонн породы на горном карьере',
                    completed: true,
                    points: 100
                },
                {
                    text: 'Продайте 20 тонн породы на горном карьере',
                    completed: true,
                    points: 250
                },
            ]
        },
        {
            title: 'Крысиные бега',
            options: [
                {
                    text: 'Пробегите за день 15 километров',
                    completed: true,
                    points: 50
                },
                {
                    text: 'Пробегите за день 25 километров',
                    completed: false,
                    points: 100
                },
                {
                    text: 'Пробегите за день 50 километров',
                    completed: false,
                    points: 250
                },
            ]
        },
        {
            title: 'Качок',
            options: [
                {
                    text: 'Проведите в качалке 1 час',
                    completed: true,
                    points: 50
                },
                {
                    text: 'Проведите в качалке 2 часа',
                    completed: false,
                    points: 100
                },
                {
                    text: 'Проведите в качалке 5 часов',
                    completed: false,
                    points: 250
                },
            ]
        },
    ];

    awards = [
        {
            reRoll: 100,
            canBeReceived: true,
            isReceived: true,
            free: {
                title: 'Наличные',
                subtitle: '$ 50 000',
                image: 'money.svg',
                quality: 0
            },
            premium: {
                title: 'Скин',
                subtitle: 'Часы Lux',
                image: 'watch.svg',
                quality: 3
            }
        },
        {
            reRoll: 200,
            canBeReceived: true,
            isReceived: false,
            free: {
                title: 'Кастомизация',
                subtitle: 'Тема для телефона на выбор',
                image: 'phoneTheme.svg',
                quality: 1
            },
            premium: {
                title: 'Наличные',
                subtitle: '$ 100 000',
                image: 'money.svg',
                quality: 1
            }
        },
        {
            reRoll: 300,
            canBeReceived: false,
            isReceived: false,
            free: {
                title: 'Скин',
                subtitle: 'Белоснежные кроссовки',
                image: 'shoes.svg',
                quality: 0
            },
            premium: {
                title: 'Скин',
                subtitle: 'Футболка Babylon',
                image: 'tShirt.svg',
                quality: 2
            }
        },
        {
            reRoll: 400,
            canBeReceived: false,
            isReceived: false,
            free: {
                title: 'Наличные',
                subtitle: '$ 150 000',
                image: 'money.svg',
                quality: 1
            },
            premium: {
                title: 'Скин',
                subtitle: 'Рюкзак Babylon',
                image: 'backpack.svg',
                quality: 3
            }
        },
        {
            reRoll: 500,
            canBeReceived: false,
            isReceived: false,
            free: {
                title: 'Скин',
                subtitle: 'Кепка',
                image: 'hat.svg',
                quality: 1
            },
            premium: {
                title: 'Наличные',
                subtitle: '$ 200 000',
                image: 'money.svg',
                quality: 1
            }
        },
        {
            reRoll: 600,
            canBeReceived: false,
            isReceived: false,
            free: {
                title: 'Скин',
                subtitle: 'Рюкзак LV',
                image: 'backpack.svg',
                quality: 0
            },
            premium: {
                title: 'Татуировка',
                subtitle: 'Глаз',
                image: 'tattoo.svg',
                quality: 4
            }
        },
        {
            reRoll: 700,
            canBeReceived: false,
            isReceived: false,
            free: {
                title: 'Наличные',
                subtitle: '$ 300 000',
                image: 'money.svg',
                quality: 1
            },
            premium: {
                title: 'Наличные',
                subtitle: '$ 500 000',
                image: 'money.svg',
                quality: 4
            }
        },
    ];

    constructor() {
        makeObservable(this, {
            season: observable,
            coins: observable,
            quests: observable,
            awards: observable,

            setSeason: action.bound,
            fetchQuests: action.bound,
            fetchAwards: action.bound,
            setCoins: action.bound,
        })
    }

    setSeason(name) {
        return this.season = name;
    }

    setCoins(value) {
        return this.coins = value;
    }

    fetchQuests(obj) {
        switch(obj.type) {
            case 'first': return this.quests[0] = obj.data;
            case 'second': return this.quests[1] = obj.data;
            case 'third': return this.quests[2] = obj.data;
            default: return this.quests = obj.data;
        }
    }

    fetchAwards(obj) {
        switch (obj.type) {
            case 'first': return this.awards[0] = obj.data;
            case 'second': return this.awards[1] = obj.data;
            case 'third': return this.awards[2] = obj.data;
            case 'fourth': return this.awards[3] = obj.data;
            case 'fifth': return this.awards[4] = obj.data;
            case 'sixth': return this.awards[5] = obj.data;
            case 'seventh': return this.awards[6] = obj.data;
            default: return this.awards = obj.data;
        }
    }

    destroy() {}
}