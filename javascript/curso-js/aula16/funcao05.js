// recursiva

function ft (x) {
    if (x == 1 ) {
        return 1 
    } else {
        return x * ft (x - 1)
    }
}

console.log (ft (5))