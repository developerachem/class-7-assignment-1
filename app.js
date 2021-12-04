
const developer = [
    {
        id          :   2231,
        name        :   'Achem',
        skill       :   'Java',
        loocation   :   'Dhaka',
        income      :   124000,
    },
    {
        id          :   0225,
        name        :   'Akash',
        skill       :   'Django',
        loocation   :   'Manikgonj',
        income      :   5865,
    },
    {
        id          :   0225,
        name        :   'Nahid',
        skill       :   'Java',
        loocation   :   'Habigonj',
        income      :   17836,
    },
    {
        id          :   0225,
        name        :   'Shorif',
        skill       :   'Laravel',
        loocation   :   'Bhola',
        income      :   8589,
    },
    {
        id          :   0225,
        name        :   'Mamun',
        skill       :   'Java',
        loocation   :   'Shoriotpur',
        income      :   15589,
    },
]

let total = 0;

developer.map((data) => {

    console.log(` 
    ID          :   ${ data.id }
    Name        :   ${ data.name }
    Skill       :   ${ data.skill }
    Loocation   :   ${ data.loocation }
    Income      :   ${ data.income }
----------------------------------------------

    `);
    total = total + data.income;

})
console.log(` Our Total Income = ${total} `);
