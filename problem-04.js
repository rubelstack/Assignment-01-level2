const getCngFare = (distance, isNight=false , waitingMinutes=0) => {

let fare = distance > 2 ? 50 + (distance - 2) * 15 : 50;
fare += waitingMinutes * 2;
return isNight ? fare * 1.2 : fare;



}

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));