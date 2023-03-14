console.log(`********************* step 1 ****************`);
const banksbi = {
    bankName :"SBI BANK",
    Location : "pune",
    ifsc : "SBI01112466",
    AccountNo : 2458796321
}
console.log(banksbi);
console.log(`********************* step 2 *****************`);
const bankLocation ={
    street : "Mumbai-Pune highway",
    city : "pune",
    pinCode:412005,

}
Object.assign(banksbi,bankLocation); // 1
console.log(banksbi);
 
console.log(`************ "spread operator" *************`);//2
const cloneObj = {...banksbi}
console.log(`cloned object details: 1.baknName :"${banksbi.bankName}", 2.Location:"${banksbi.Location}" , 3.ifsc:"${banksbi.ifsc}", 3.AccountNo :"${banksbi.AccountNo}"
                                   4.street:"${banksbi.street}", 5.city:"${banksbi.city}", 6.spincode :"${banksbi.pinCode}"`);

console.log(`*************************** step 4 *************************`);
const rateOfIntrest ={
    homeLoanIntrest:10,
    personalLoanIntrest:12,
    dueIntrest:15,

}    
                             
const sbiDetails = {...banksbi,...bankLocation,...rateOfIntrest}
console.log(`After Merging banksbi,bankLocation,reatOfIntrest objects into  sbiDetalis is ==>      
   1.baknName :"${sbiDetails.bankName}", 2.Location:"${sbiDetails.Location}" , 3.ifsc:"${sbiDetails.ifsc}", 3.AccountNo :"${sbiDetails.AccountNo}"
   4.street:"${sbiDetails.street}", 5.city:"${sbiDetails.city}", 6.spincode :"${sbiDetails.pinCode}" 7.homeLoanIntrest:"${sbiDetails.homeLoanIntrest}"
   8.personalLoanIntrest:"${sbiDetails.personalLoanIntrest}", 9.dueIntrest:"${sbiDetails.dueIntrest}"  `);

   console.log(`********************** step 5: Traversing on sbiDetails object *****************`);//2
   function traverseSbiDetails(object) {
    
    for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(`${key} : ${element}`);
        
   }
   
   }
}
traverseSbiDetails(sbiDetails);
//console.log(`********************`);
//traverseSbiDetails(banksbi)