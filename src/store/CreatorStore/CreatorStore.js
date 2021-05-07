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
        race: 0,
        parents: {
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
                id: 0,
                component: 0,
                drawable: 0,
                texture: 0,
            },
            body: {
                id: 0,
                component: 11,
                drawable: 0,
                texture: 0,
                torso: 0
            },
            pants: {
                id: 0,
                component: 4,
                drawable: 0,
                texture: 0,
            },
            shoes: {
                id: 0,
                component: 6,
                drawable: 0,
                texture: 0,
            }
        }
    }

    constructor() {
        makeObservable(this, {
            data: observable,

            fetchData: action.bound,
        })
    }

    fetchData(data) {
        return this.data = data;
    }

    destroy() {}
}