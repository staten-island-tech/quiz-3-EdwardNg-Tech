/* function largeFilter (i) {
    return i > 100;
}
let initialBill = [140, 45,270];
let finalBill = [];
let arbitrary;
for (i = 0; i < initialBill.length; i++) {
    if (initialBill[i] > 0 && initialBill[i] < 50) {
        arbitrary = initialBill[i] * 1.2;
        finalBill.push(arbitrary);
    } else if (initialBill[i] >= 50 && initialBill[i] <= 200) {
        arbitrary = initialBill[i] * 1.15;
        finalBill.push(arbitrary);
    } else {
        arbitrary = initialBill[i] * 1.10;
        finalBill.push(arbitrary);
    }
}
let largeBill = finalBill.filter(largeFilter);
console.log(initialBill, finalBill, largeBill); */
const rob = {
    fullName: 'Robert Grande',
    mass: 78,
    height: 1.69,
    bmi: function(){
        return this.mass / (this.height * this.height);
    }
}
const dejon = {
    fullName: 'Dejon Kurti',
    mass: 110,
    height: 1.95,
    bmi: function(){
        return this.mass / (this.height * this.height);
    }
}
if (rob.bmi > dejon.bmi) {
    console.log(`${rob.fullName} has a BMI of ${rob.bmi()}, which is greater than ${dejon.fullName}'s BMI.`);
} else {
    console.log(`${dejon.fullName} has a BMI of ${dejon.bmi()}, which is greater than ${rob.fullName}'s BMI.`);
}