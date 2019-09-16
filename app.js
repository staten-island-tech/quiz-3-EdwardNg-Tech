function largeFilter (i) {
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
console.log(initialBill, finalBill, largeBill);