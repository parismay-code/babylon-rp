import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class CreatorStore {
    data = {
        sex: 0,
        name: {
            firstname: '',
            lastname: ''
        },
        parents: {
            father: 0,
            mother: 21,
            leatherMix: 0,
            similarity: 0
        },
        hair: {
            head: 0,
            eyebrows: 0,
            chest: 0,
            beard: 0
        },
        face: {
            noseWidth: 0,           // 0
            nosePeakHeight: 0,      // 1
            nosePeakLength: 0,      // 2
            noseBoneHeight: 0,      // 3
            nosePeakLowering: 0,    // 4
            noseBoneTwist: 0,       // 5
            eyebrowHeight: 0,       // 6
            eyebrowForward: 0,      // 7
            cheekboneHeight: 0,     // 8
            cheekboneWidth: 0,      // 9
            cheekWidth: 0,          // 10
            eyesWidth: 0,           // 11
            lips: 0,                // 12
            jawBoneWidth: 0,        // 13
            jawBoneBackLength: 0,   // 14
            ChimpBoneLowering: 0,   // 15
            ChimpBoneLength: 0,     // 16
            ChimpBoneWidth: 0,      // 17
            ChimpHole: 0,           // 18
            neckWidth: 0            // 19
        },
        color: {
            head: 0,
            eyebrows: 0,
            eyes: 0,
            chest: 0,
            beard: 0
        },
        clothes: {
            head: {
                component: 0,
                drawable: 7,
                texture: 6
            },
            body: {
                component: 11,
                drawable: 5,
                texture: 2
            },
            pants: {
                component: 4,
                drawable: 5,
                texture: 7
            },
            shoes: {
                component: 6,
                drawable: 9,
                texture: 1
            }
        }
    }

    // 0 - head, 11 - body, 4 - pants, 6 - shoes
    clothes = {
        male: [],
        female: []
    };

    constructor() {
        makeObservable(this, {
            data: observable,
            clothes: observable,

            fetchData: action.bound,
            fetchClothes: action.bound,
        })
    }

    fetchData(data) {
        return this.data = data;
    }

    fetchClothes(data) {
        return this.clothes = data;
    }

    destroy() {}
}