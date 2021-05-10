import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class ShopsStore {
    owner = 'Paris May';

    clothesShopData = [
        {
            image: 'tShirt.svg',
            isInStock: false,
            price: 15000,
            component: 0,
            drawable: 1,
            textures: [1, 2, 5, 6, 7]
        }, // 0
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 20000,
            component: 0,
            drawable: 2,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 5000,
            component: 0,
            drawable: 3,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 4,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 5,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 6,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 7,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 8,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 9,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 10,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 11,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 12,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 13,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 14,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 15,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 0,
            drawable: 16,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 15000,
            component: 11,
            drawable: 1,
            textures: [1, 2, 5, 6, 7]
        }, // 11
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 20000,
            component: 11,
            drawable: 2,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 5000,
            component: 11,
            drawable: 3,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 4,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 5,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 6,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 7,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: false,
            price: 13000,
            component: 11,
            drawable: 8,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 9,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 10,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 11,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 12,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 13,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 14,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 15,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 11,
            drawable: 16,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 15000,
            component: 8,
            drawable: 1,
            textures: [1, 2, 5, 6, 7]
        }, // 8
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 20000,
            component: 8,
            drawable: 2,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 5000,
            component: 8,
            drawable: 3,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 4,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 5,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 6,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 7,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 8,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: false,
            price: 13000,
            component: 8,
            drawable: 9,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 10,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 11,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 12,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 13,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 14,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 15,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 8,
            drawable: 16,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 15000,
            component: 4,
            drawable: 1,
            textures: [1, 2, 5, 6, 7]
        }, // 4
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 20000,
            component: 4,
            drawable: 2,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 5000,
            component: 4,
            drawable: 3,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 4,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 5,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 6,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 7,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: false,
            price: 13000,
            component: 4,
            drawable: 8,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 9,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 10,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 11,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 12,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 13,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 14,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 15,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 4,
            drawable: 16,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 15000,
            component: 6,
            drawable: 1,
            textures: [1, 2, 5, 6, 7]
        }, // 6
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 20000,
            component: 6,
            drawable: 2,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 5000,
            component: 6,
            drawable: 3,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 4,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 5,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 6,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 7,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 8,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: false,
            price: 13000,
            component: 6,
            drawable: 9,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 10,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 11,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 12,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 13,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 14,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 15,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 6,
            drawable: 16,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 15000,
            component: 7,
            drawable: 1,
            textures: [1, 2, 5, 6, 7]
        }, // 7
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 20000,
            component: 7,
            drawable: 2,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 5000,
            component: 7,
            drawable: 3,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 4,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 5,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 6,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 7,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 8,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 9,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: false,
            price: 13000,
            component: 7,
            drawable: 10,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 11,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 12,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 13,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 14,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 15,
            textures: [1, 2, 5, 6, 7]
        },
        {
            image: 'tShirt.svg',
            isInStock: true,
            price: 13000,
            component: 7,
            drawable: 16,
            textures: [1, 2, 5, 6, 7]
        },
    ];

    constructor() {
        makeObservable(this, {
            owner: observable,
            clothesShopData: observable,

            fetchClothesShopData: action.bound,
            setOwner: action.bound,
        })
    }

    fetchClothesShopData(array) {
        return this.clothesShopData = array;
    }

    setOwner(name) {
        return this.owner = name;
    }


    destroy() {
    }
}