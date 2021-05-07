import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class ChatStore {
    messages = [
        // {
        //     type: 'system',
        //     text: 'Добро пожаловать на Babylon!'
        // },
        // {
        //     type: 'default',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Hello world!'
        // },
        // {
        //     type: 'nrp',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Hello world!'
        // },
        // {
        //     type: 'me',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'пожал руку человеку напротив'
        // },
        // {
        //     type: 'do',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'На столе стоит стакан, полный чифира.'
        // },
        // {
        //     type: 'try',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'бросил монетку',
        //     result: true
        // },
        // {
        //     type: 'try',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'бросил монетку',
        //     result: false
        // },
        // {
        //     type: 'trade',
        //     category: 'car',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Продам автомобиль марки "Zentorno" в полной комплектации. Цена: 1 000 000$.',
        // },
        // {
        //     type: 'trade',
        //     category: 'car',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Куплю автомобиль марки "Kuruma" в полной комплектации. Бюджет: 200 000$.',
        // },
        // {
        //     type: 'trade',
        //     category: 'house',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Продам загородный дом с 3 гаражными местами. Цена: 600 000$.',
        // },
        // {
        //     type: 'trade',
        //     category: 'house',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Куплю загородный дом с 3 гаражными местами. Бюджет: 500 000$.',
        // },
        // {
        //     type: 'trade',
        //     category: 'business',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Продам автосалон #5. Машины лучшего класса. Цена: 2 500 000$.',
        // },
        // {
        //     type: 'trade',
        //     category: 'business',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Куплю любой бизнес. Бюджет: 1 000 000$.',
        // },
        // {
        //     type: 'trade',
        //     category: 'discount',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Скидки в магазине одежды #6! Успей зацепить лучшую футболку!',
        // },
        // {
        //     type: 'trade',
        //     category: 'other',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Продам кепку Supreme. Цена: 100 000$.',
        // },
        // {
        //     type: 'trade',
        //     category: 'service',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Предоставляю услуги сантехника. Цена за выезд: 1000$.',
        // },
        // {
        //     type: 'trade',
        //     category: 'dating',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Познакомлюсь с девушкой в возрасте 77 лет. На финансовой основе.',
        // },
        // {
        //     type: 'adminChat',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в админ чатике! Пожалуй, напишу очень длинное сообщение, которое обязательно должен прочитать каждый администратор, ведь я разработчик этого проекта, очень важное лицо, между прочим! Короче говоря, тестирую положение картинки перед текстом.',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'crime',
        //         name: 'families'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в The Families!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'crime',
        //         name: 'vagos'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в Los Santos Vagos!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'crime',
        //         name: 'ballas'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в Ballas Gang!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'crime',
        //         name: 'mara'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в Marabunta Grande!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'mafia',
        //         name: 'lcn'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в La Cosa Nostra!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'mafia',
        //         name: 'russian'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в Russian Mafia!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'mafia',
        //         name: 'yakuza'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в Yakuza!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'mafia',
        //         name: 'ukranian'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в Ukranian Mafia!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'mafia',
        //         name: 'armenian'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в Armenian Mafia!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'state',
        //         name: 'sahp'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в Sheriff Department!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'state',
        //         name: 'lspd'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в LSPD!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'state',
        //         name: 'fib'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в FIB!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'state',
        //         name: 'sang'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в San Andreas National Guard!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'state',
        //         name: 'ems'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в EMS!',
        // },
        // {
        //     type: 'fraction',
        //     fraction: {
        //         type: 'state',
        //         name: 'gov'
        //     },
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в Government!',
        // },
        // {
        //     type: 'department',
        //     fraction: 'gov',
        //     id: 1,
        //     nickname: 'Paris May',
        //     rank: 'Governor',
        //     text: 'Уважаемые сотрудники государственных структур. Сегодня в 21:00 состоится собрание Конгресса. Просьба представителям организаций присутствовать за 15 минут до начала, а силовым структурам организовать поддержку за час до начала.',
        // },
        // {
        //     type: 'state',
        //     id: 1,
        //     nickname: 'Paris May',
        //     rank: 'Governor',
        //     text: 'Уважаемые гости и жители штата. В законную силу вступает указ Губернатора №1488 от 22.04.2021. Просьба всем ознакомиться.',
        // },
        // {
        //     type: 'news',
        //     id: 1,
        //     nickname: 'Paris May',
        //     rank: 'Директор',
        //     text: 'Уважаемые слушатели Weazel News! В 18:00 состоится лучшая вечеринка месяца на пирсе. Организатор и спонсор - баскетбольный клуб Families.',
        // },
        // {
        //     type: 'family',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем в семье!',
        // },
        // {
        //     type: 'job',
        //     job: 'taxi',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем таксистам!',
        // },
        // {
        //     type: 'job',
        //     job: 'electric',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем электрикам!',
        // },
        // {
        //     type: 'job',
        //     job: 'truckDriver',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем дальнобойщикам!',
        // },
        // {
        //     type: 'job',
        //     job: 'woodsman',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем лесорубам!',
        // },
        // {
        //     type: 'job',
        //     job: 'career',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем на карьере!',
        // },
        // {
        //     type: 'job',
        //     job: 'farmer',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем фермерам!',
        // },
        // {
        //     type: 'job',
        //     job: 'collector',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем инкассаторам!',
        // },
        // {
        //     type: 'job',
        //     job: 'postal',
        //     id: 1,
        //     nickname: 'Paris May',
        //     text: 'Привет всем почтальонам!',
        // },
    ];
    lastMessages = [];
    access = {
        admin: false,
        job: false,
        family: false,
        fraction: false,
        megaphone: false,
        department: false,
        state: false
    };
    familyIcon = null;

    constructor() {
        makeObservable(this, {
            messages: observable,
            lastMessages: observable,
            access: observable,
            familyIcon: observable,

            fetchNewMessage: action.bound,
            updateLastMessages: action.bound,
            fetchAccess: action.bound,
            fetchFamilyIcon: action.bound,
        })
    }

    updateLastMessages(text) {
        this.lastMessages.push(text);

        if (this.lastMessages.length > 10) this.lastMessages.shift();
    }

    fetchNewMessage(obj) {
        this.messages.push(obj);

        if (this.messages.length > 150) this.messages.shift();
    }

    fetchAccess(obj) {
        switch (obj.type) {
            case 'job': return this.access.job = obj.data;
            case 'admin': return this.access.admin = obj.data;
            case 'family': return this.access.family = obj.data;
            case 'fraction': return this.access.fraction = obj.data;
            case 'megaphone': return this.access.megaphone = obj.data;
            case 'department': return this.access.department = obj.data;
            case 'state': return this.access.state = obj.data;
            default: return this.access = obj.data;
        }
    }

    fetchFamilyIcon(icon) {
        return this.familyIcon = icon;
    }

    destroy() {}
}