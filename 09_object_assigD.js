const professor = {
   firstName:"Rahul",
   lastName:"Patil",
   Age:40,
   Address:"Pune",
   teachingSubject:"Physics",
   degrees:{
    Engineering : 'CSC',
    Masters:'computer Engineering', 
    PHD:'Advance Computing',
    },
    Certificates:["Hacker Rank Participation", "Certificates in IFE course","Certificate in Adv Programming"],
    teacherDreeges:function(){
        return `Teacher total degrees are:Engineering ${this.degrees.Engineering}, Masters ${this.degrees.Masters},PHD${this.degrees.PHD}`
     }

};

console.log(`==========Orignal object professor========`);
console.log(professor);
console.log(`=========Output after concating degrees=========`);
let result=professor.teacherDreeges();
console.log(result);

console.log(`=========Added new property totalExperiance:14 years=======`);
professor.totalExperience="14 years";
console.log(professor.totalExperience);
 
console.log(`=======Object after modifing firstName="Pradeep===========`);
professor.firstName="Pradeep";
console.log(professor);
 
console.log("========Last element of array Certificates =======");
professor.Certificates.push("Oracal Certified");
console.log(professor.Certificates[professor.Certificates.length-1]);





















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































