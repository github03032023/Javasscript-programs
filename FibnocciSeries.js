// Question no 4
// Fibnocci Series

function FibnocciSeries(end){
    let firstvalue = 0; // First value of fibnocci series
    let secondvalue = 1; // Second value of fibnocci series
    console.log("Fibnocci series:", firstvalue);
    console.log("Fibnocci series:", secondvalue);
for(let i=0; i<end; i++){
    value = firstvalue + secondvalue;
    firstvalue = secondvalue;
    secondvalue = value;
    console.log("Fibnocci series:", value);
}
}
// Fibnocci Series of first 10 digits
FibnocciSeries(10);