const spawnsData = [
    {
        id: 0,
        title: 'МЕСтО выхОДА',
        description: 'При выборе точки возрождения "место выхода" вы возродитесь на месте последнего пребывания на сервере',
        note: false,
        data: null
    },
    {
        id: 1,
        title: 'вОкзАЛ',
        description: 'При выборе точки возрождения "вокзал" вам доступны три станции возрождения',
        note: true,
        data: [
            {id: 0},
            {id: 1},
            {id: 2}
        ]
    },
    {
        id: 2,
        title: 'ДОМ',
        description: 'При выборе точки возрождения "дом" вы возродитесь в одном из выбранных домов',
        note: true
    },
    {
        id: 3,
        title: 'ОРгАНизАциЯ',
        description: 'При выборе точки возрождения "организация" вы возродитесь на месте спавна организации, в которой вы состоите',
        note: true
    },
    {
        id: 4,
        title: 'СЕМьЯ',
        description: 'При выборе точки возрождения "семья" вы возродитесь в семейном доме',
        note: true
    },
]

export default spawnsData;