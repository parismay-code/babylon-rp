export const setRandomOptions = (store, clothes) => {
    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const eyesRandom = () => {
        let i = getRandom(0, 11);

        if (i <= 7) return i;
        else return 11;
    }

    store.data.race = getRandom(0, 2);

    store.data.hair.head = getRandom(0, 22);
    store.data.hair.eyebrows = getRandom(0, 33);

    if (store.data.sex === 0) {
        store.data.hair.chest = getRandom(0, 16);
        store.data.hair.beard = getRandom(0, 28);
        store.data.color.chest = getRandom(0, 18);
        store.data.color.beard = getRandom(0, 18);
    }

    store.data.parents.leatherMix = getRandom(-100, 100);
    store.data.parents.similarity = getRandom(-100, 100);

    store.data.face.noseWidth = getRandom(-100, 100);
    store.data.face.nosePeakHeight = getRandom(-100, 100);
    store.data.face.nosePeakLength = getRandom(-100, 100);
    store.data.face.noseBoneHeight = getRandom(-100, 100);
    store.data.face.nosePeakLowering = getRandom(-100, 100);
    store.data.face.noseBoneTwist = getRandom(0, 100);
    store.data.face.eyebrowHeight = getRandom(-100, 100);
    store.data.face.eyebrowForward = getRandom(-100, 100);
    store.data.face.cheekboneHeight = getRandom(-100, 100);
    store.data.face.cheekboneWidth = getRandom(-100, 100);
    store.data.face.cheekWidth = getRandom(-100, 100);
    store.data.face.eyesWidth = getRandom(-100, 100);
    store.data.face.lips = getRandom(-100, 100);
    store.data.face.jawBoneWidth = getRandom(-100, 100);
    store.data.face.jawBoneBackLength = getRandom(-100, 100);
    store.data.face.ChimpBoneLowering = getRandom(-100, 100);
    store.data.face.ChimpBoneLength = getRandom(-100, 100);
    store.data.face.ChimpBoneWidth = getRandom(-100, 100);
    store.data.face.ChimpHole = getRandom(-100, 100);
    store.data.face.neckWidth = getRandom(-100, 100);

    store.data.color.head = getRandom(0, 18);
    store.data.color.eyebrows = getRandom(0, 18);
    store.data.color.eyes = eyesRandom();

    if (store.data.sex === 0) {
        store.data.clothes.head.id = getRandom(0, clothes.male.head.length);
        store.data.clothes.head.texture = getRandom(0, clothes.male.head[store.data.clothes.head.id].texture);
        store.data.clothes.body.id = getRandom(0, clothes.male.body.length);
        store.data.clothes.body.texture = getRandom(0, clothes.male.body[store.data.clothes.body.id].texture);
        store.data.clothes.pants.id = getRandom(0, clothes.male.pants.length);
        store.data.clothes.pants.texture = getRandom(0, clothes.male.pants[store.data.clothes.pants.id].texture);
        store.data.clothes.shoes.id = getRandom(0, clothes.male.shoes.length);
        store.data.clothes.shoes.texture = getRandom(0, clothes.male.shoes[store.data.clothes.shoes.id].texture);
    } else {
        store.data.clothes.head.id = getRandom(0, clothes.female.head.length);
        store.data.clothes.head.texture = getRandom(0, clothes.female.head[store.data.clothes.head.id].texture);
        store.data.clothes.body.id = getRandom(0, clothes.female.body.length);
        store.data.clothes.body.texture = getRandom(0, clothes.female.body[store.data.clothes.body.id].texture);
        store.data.clothes.pants.id = getRandom(0, clothes.female.pants.length);
        store.data.clothes.pants.texture = getRandom(0, clothes.female.pants[store.data.clothes.pants.id].texture);
        store.data.clothes.shoes.id = getRandom(0, clothes.female.shoes.length);
        store.data.clothes.shoes.texture = getRandom(0, clothes.female.shoes[store.data.clothes.shoes.id].texture);
    }

    window.alt.emit('client::characterCreator:random', store.data);
}