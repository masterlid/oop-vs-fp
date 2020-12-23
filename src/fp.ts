const FUEL_MAX: number = 40; // объем бензобака

// тип, определяющий стиль вождения
type DrivingStyle = {
    someParam1: any,
    someParam2: any,
    someParam3: any
}

// заправка автомобиля
const refuel = (current: number, poured: number): number => {
    const fuelNew: number = poured + current;
    return fuelNew < FUEL_MAX ? fuelNew : FUEL_MAX;
};

// нажатие на педаль газа
const accelerate = (oldStyle: DrivingStyle): DrivingStyle => {
    let newStyle: DrivingStyle = oldStyle;
    // TODO
    return newStyle;
};

// нажатие на педаль тормоза
const brake = (oldStyle: DrivingStyle): DrivingStyle => {
    let newStyle: DrivingStyle = oldStyle;
    // TODO
    return newStyle;
};

// запас хода в километрах
const powerReserve = (fuel: number, style: DrivingStyle): number => {
    // TODO
    return fuel * 2;
};

let fuelInVasyaCar: number = 0; // количество горючего в машине дяди Васи
let fuelInPetyaCar: number = 0; // количество горючего в машине дяди Пети

// стиль вождения дяди Васи
let vasyaDrivingStyle: DrivingStyle = {
    someParam1: null,
    someParam2: null,
    someParam3: null
};

// стиль вождения дяди Пети
let petyaDrivingStyle: DrivingStyle = {
    someParam1: null,
    someParam2: null,
    someParam3: null
};

// машины заправляются
fuelInVasyaCar = refuel(fuelInVasyaCar, 20);       // дядя Вася заправил машину на полбака
fuelInPetyaCar = refuel(fuelInPetyaCar, FUEL_MAX); // дядя Петя заправил полный бак

// поехали!
vasyaDrivingStyle = accelerate(vasyaDrivingStyle);
petyaDrivingStyle = accelerate(petyaDrivingStyle);

petyaDrivingStyle = accelerate(petyaDrivingStyle);
vasyaDrivingStyle = brake(vasyaDrivingStyle);

vasyaDrivingStyle = brake(vasyaDrivingStyle);

vasyaDrivingStyle = accelerate(vasyaDrivingStyle);

petyaDrivingStyle = accelerate(petyaDrivingStyle);
petyaDrivingStyle = accelerate(petyaDrivingStyle);

petyaDrivingStyle = brake(petyaDrivingStyle);

fuelInVasyaCar = refuel(fuelInVasyaCar, 10); // дядя Вася долил еще 10 л

// и
// так
// далее

// узнаём, сколько осталось километров:
{
    const vasyaReserve: number = powerReserve(fuelInVasyaCar, vasyaDrivingStyle);
    const petyaReserve: number = powerReserve(fuelInPetyaCar, petyaDrivingStyle);
}
