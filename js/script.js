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

bikes.forEach((elem) =>{
    let { weight_kg } = elem;
    weight_kg = parseFloat(weight_kg);
    if(weight_kg < lowest){
        lowest = weight_kg;
    }
})

console.log(lowest);