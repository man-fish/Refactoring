function getRating(_numberOfLateDeliveries: number) {
    return moreThanFiveLateDeliveries(_numberOfLateDeliveries) ? 2 : 1;
}
function moreThanFiveLateDeliveries(_numberOfLateDeliveries: number) {
    return _numberOfLateDeliveries > 5;
}

// =====>
function getRatingV1(_numberOfLateDeliveries: number) {
    return _numberOfLateDeliveries > 5 ? 2 : 1;
}
