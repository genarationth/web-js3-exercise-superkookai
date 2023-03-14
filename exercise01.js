function calculateCost(cost){
    if (cost <= 0){
        return 'Enter cost in Positive number';
    }
    return cost + 3 + (cost * 0.01 / 100); 
}

console.log(calculateCost(-5));