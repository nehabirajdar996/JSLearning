console.log("******************* step 1 ****************");
    function voteEligibility(age) {
    if (age==0 || age<0 || age>120) {
        console.log(`The person ${age} is InValid data`);
    }

    if (age>=18 && age<=120) {
        console.log(`The person with age "${age}" is: Eligible for voting`);
    } 
    if(  age==null || age==undefined ||  age<18 && age>0 )  {
        console.log(`The person with age "${age}" is: Not  Eligible for voting`);

    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);

console.log("******************* step 2 ****************");
function gardeCalculation(marks) {
    if(marks>=90 && marks<=100 && typeof marks=="number"){
        console.log(`Funtastic marks :" ${marks}",Yourgrade is A+`);

    }
    if(marks>=75 && marks<90 && (typeof marks=="number")){
        console.log(`Excellent marks "${marks}",Your garde is A`);
    }
    if(marks>=50 && marks<75 && (typeof marks=="number")){
        console.log(`Good marks "${marks}",your grade is B`);
    }
    if(marks>=35 && marks<50 && (typeof marks=="number")){
        console.log(`Marks is "${marks}",your grade is C,Need improvement`);
    }
    if(marks==0 || marks<0 || marks>100  || (typeof marks!=="number") || isNaN(marks)) 
      {
        console.log(`"${marks}" your marks is invalid  Please provide the valid marks`);

    }
}
gardeCalculation(98);
gardeCalculation(80);
gardeCalculation(90);
gardeCalculation(0);
gardeCalculation(150);
gardeCalculation(-7);
gardeCalculation(35);
gardeCalculation(29);
gardeCalculation(64);
gardeCalculation(49);
gardeCalculation("91");
gardeCalculation("Eighty");
gardeCalculation(NaN);
gardeCalculation(null);
