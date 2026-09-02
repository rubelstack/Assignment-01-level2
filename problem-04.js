const getCngFare = (distance, isNight=false , waitingMinutes=0) => {

let fare = distance > 2 ? 50 + (distance - 2) * 15 : 50;
fare += waitingMinutes * 2;
return isNight ? fare * 1.2 : fare;


}
