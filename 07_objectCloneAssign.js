const array = [20,3,4,56,90,400,49]
console.log(`Given Array is: ${array}`);

console.log(`********************** step 1 ********************`);
const arrayNums = array;
arrayNums.push(55)
arrayNums.push(66)
console.log(`orignal array is: [${array}]`);
console.log(`cloned array is : [${arrayNums}]`);
console.log(`********************** step 2 ******************`);
const cloneArray= [...arrayNums]
console.log(cloneArray);
arrayNums.push(10,25)
console.log(`orignal array is: [${arrayNums}]`);
console.log(`cloned array is : [${cloneArray}]`);
console.log(`********************** step 3 ******************`);
const arrayEven=[2,30,14,8]
const mergedArray=[...arrayEven,...arrayNums]
console.log(`After Merging arrayEven with arrayNums array the mergedArray is:
   > [${mergedArray}]`);  

console.log(`*******************************step 4******************`);
const emplyoee_info = {
     emp_id:27,
     emp_name:"John Doe",
     salary:{
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
      },

     address:{
        locality:{
            colony:"OM Virindavan Socity",
            street:"Kanch Pokli,431202",

        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
      },
      mobiles:["+91 8600 3456 88", "1800-4567 32","+91-9096 5678 77"]
}

console.log(`********************** step 5 ******************`);
console.log(`employee details:
    a.Address:
         > locality:
             >> colony: ${emplyoee_info.address.locality.colony}
             >> street: ${emplyoee_info.address.locality.street}
         > city:${emplyoee_info.address.city}
         > state:${emplyoee_info.address.state}
         > country:${emplyoee_info.address.country}              
     
    b.Mobile numbers: ["${emplyoee_info.mobiles}"]`);

console.log(`********************** step 6 : deep copy using JSON.stringify()******************`);
const deepCopy= JSON.parse(JSON.stringify(emplyoee_info))
console.log(deepCopy);
deepCopy.salary.july_month = "80k"

emplyoee_info.address.country ="United States";
console.log(`> "Original" value of "july_Month" salary in object is:"${emplyoee_info.salary.july_month}"`);
console.log(`> "Updated" value of "july_Month" salary in object is:"${deepCopy.salary.july_month}"`);
console.log(`> Updated value of "country" in orignal object is : "${emplyoee_info.address.country}"`);
