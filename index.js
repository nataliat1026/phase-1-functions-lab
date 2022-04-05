const hq = 42;

function distanceFromHqInBlocks(street) {
    return Math.abs(street - hq);
}

function distanceFromHqInFeet(street) {
    distanceFromHqInBlocks(street);
    return (distanceFromHqInBlocks(street) * 264);
}

function distanceTravelledInFeet(start, destination) {
    return ((Math.abs(start - destination)) * 264);
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02);
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }
}
