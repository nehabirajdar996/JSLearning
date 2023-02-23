console.log(`***************** step 1 ******************`);
function maleMarriageEligibility(gender,age,boyName) {
    var marriageCheck = (gender=="Male" && age>=21) ? `Hey "${boyName}" you are *Eligible* for Marriage `: ` Hey "${boyName}" you are * Not Eligible* for Marriage`; 
    return marriageCheck;
}
var check = maleMarriageEligibility("Male",25,"Billgates");
console.log(check);
var check = maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(check);

console.log(`***************** step 2 ******************`);
function femaleMarriageEligibilty(gender,age,girlName) {
    var marriageCheck = (gender=="Female" && age>=21) ? `Hey "${girlName}" you are *Eligible* for Marriage ` : `Hey "${girlName}" you are *Not Eligible* for Marriage `; 
    return marriageCheck;  
}
var check = femaleMarriageEligibilty("Female",16,"Jenifer");
console.log(check);
var check = femaleMarriageEligibilty("Female",27,"Malinda Gates");
console.log(check);

