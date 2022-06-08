// Code your solution in this file!
const drivers =['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers =function (drivers){
    return drivers.slice(2,4)
}


const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiple){
    return function (fare){
        return fare * multiple;

    }

}

function fareDoubler(fare) {
    return fare* 2;
  }
  function fareTripler(fare) {
    return fare * 3;
  }

  function selectDifferentDrivers(drivers, fun){
    return fun(drivers);
}








