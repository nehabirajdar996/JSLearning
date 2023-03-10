class Vehicle {
    constructor( vehicleName,Mileage,FuelType,SeatingCapacity,MaxPower){
        this.vehicleName=vehicleName
        this.Mileage=Mileage
        this.FuelType=FuelType
        this.SeatingCapacity=SeatingCapacity
        this.MaxPower=MaxPower

    }
    
}

const MGHector = new Vehicle("MG Hector","12.34 kmpl","Petrol","5","141bhp@5000rpm");
//console.log(MGHector);

const Hyundai_i20 = new Vehicle("Hyundai i20","20.28 kmpl","Petrol","5","118.36bhp@6000rpm");
//console.log(Hyundai_i20);

const Tata_Tigor_XZ = new Vehicle("Tata Tigor XZ","26.49 km/kg","Petro","5","72.40bhp@6000rpm")
//console.log(Tata_Tigor_XZ);

const Toyota_Fortuner = new Vehicle("Toyota Fortuner","8.0 kmpl","Diese","7","201.15bhp@3000-3400rpm")
//console.log(Toyota_Fortuner);

const Tata_Nexon_EV_Prime = new Vehicle("Tata_Nexon_EV_Prime","30.2KWH","Battery","5","127bhp");
//console.log(Tata_Nexon_EV_Prime);

const arrayOfVechiles = [MGHector, Hyundai_i20, Tata_Tigor_XZ, Toyota_Fortuner, Tata_Nexon_EV_Prime]

for (const element of arrayOfVechiles) {
    console.log(`* 1.Name of Vechical: "${element.vehicleName}",  2.Mileage of Vechical: "${element.Mileage}", 
    3.Type of Fuel used in Vechical:"${element.FuelType}"  
    4.Seating Capacity of Vechical: "${element.SeatingCapacity}"  
    5.Power of Vechical: "${element.MaxPower}"`);
}


class College {
    constructor(collge_Name,university,location,NumberOfDepartments,college_Rating){
        this.collge_Name= collge_Name
        this.university=university
        this.location=location
        this.NumberOfDepartment=NumberOfDepartments
        this.college_Rating=college_Rating
        }
}
const COEP =new College("COEP","PUNE","shivaji nagar pune","7","4.9");
const VIT =new College("VIT","PUNE","Bibewadi pune","5","4.7");
const MIT =new College("MIT","PUNE","pune","7","4.5");
const WIT =new College("WIT","Solapur","karnik nagar solapur","5","4");

function traverseObject(objectName) {
    for (const key in objectName) {
        if (Object.hasOwnProperty.call(objectName, key)) {
            const element = objectName[key];
            console.log(`   ${key} : "${element}" `);
            
        }
    }
}
console.log(`===== 1.first object of college class=====`);
const College1 = traverseObject(COEP);
console.log(`===== 2.second object of college class=====`);
const College2 = traverseObject(VIT);
console.log(`===== 3.third object of college class=====`);
const College3 = traverseObject(MIT);
console.log(`===== 4.forth object of college class=====`);
const College4 = traverseObject(WIT);


//FIND THE Given number is Prime or not ex.=11//
console.log(`*** programme to Find the Given number is Prime or not ***`);
function isPrimeNumber(num) {
  if(typeof num=="number" && num%1==0 && num%num!==0){
    console.log(`Given number "${num}" is: "prime Number"`);
  }else
  {
    console.log(`Given number "${num}" is: "NOT Prime Number"`);
  }
}
isPrimeNumber(11)
isPrimeNumber(null)
isPrimeNumber(undefined)
isPrimeNumber(NaN)
isPrimeNumber(0)
isPrimeNumber(12)
isPrimeNumber(1)


  