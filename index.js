// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  // Headquarters (HQ) is located at block 42
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // flat fee
  } else {
    return 'cannot travel that far'; // more than 2500 feet
  }
}