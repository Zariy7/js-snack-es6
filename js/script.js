const bikes = [
    {
        name: 'Kona',
        weight_kg: '10',
    },
    {
        name: 'Marin',
        weight_kg: '11',
    },
    {
        name: 'Scott',
        weight_kg: '9',
    },
    {
        name: 'Santa Cruz',
        weight_kg: '9.5',
    },
    {
        name: 'Cannondale',
        weight_kg: '8.5',
    },
    {
        name: 'Trek',
        weight_kg: '12',
    },
]

let lowest = 100;
let lowestName;

bikes.forEach((elem) =>{
    let { name, weight_kg } = elem;
    weight_kg = parseFloat(weight_kg);
    if(weight_kg < lowest){
        lowest = weight_kg;
        lowestName = name;
    }
})

console.log(`The lightest bike is ${lowestName}, weighing ${lowest} kg.`);

const squads = [
    {
        name: 'Napoli',
        foulsTaken: 0,
        goals: 0,
    },
    {
        name: 'Roma',
        foulsTaken: 0,
        goals: 0,
    },
    {
        name: 'Juventus',
        foulsTaken: 0,
        goals: 0,
    },
    {
        name: 'Inter',
        foulsTaken: 0,
        goals: 0,
    },
    {
        name: 'Milan',
        foulsTaken: 0,
        goals: 0,
    },
]

squads.forEach((elem) =>{
    elem.foulsTaken = Math.floor(Math.random()*11);
    elem.goals = Math.floor(Math.random()*11);
})

console.log(squads);

let squads2 = [];
squads.map((elem) =>{
    let {goals, ...rest} = elem;
    squads2.push(rest);
})

console.log(squads2);