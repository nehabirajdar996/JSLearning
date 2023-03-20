class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_redha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

console.log(`******************** step 1:Find Employee is workin in "TCS" ********************`);
const array =[emp_anil,emp_redha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
for (const emp of array) {
    if(emp.emp_company=="TCS"){
        console.log(`Name:"${emp.emp_name}"  company:"${emp.emp_company}"`);
        
    }
}

console.log(`******************** step 2: Find the "Finance" Department Empolyee  ********************`);
for (const emp of array) {
   if(emp.emp_dept=="Finance"){
    console.log(`Employeee Name: "${emp.emp_name}"  Department:"${emp.emp_dept}"`);
   }
}

console.log(`******************** step 3:Find Emloyee name startsWith "R" ********************`);
for (const emp  of array) {
    if(emp.emp_name.startsWith('R')){
        console.log(`Name: "${emp.emp_name}"
    Id: ${emp.emp_id} Department:${emp.emp_dept}
    Salary: ${emp.emp_salary} Company: ${emp.emp_salary}`);
    }
}

console.log(`******************** step 4: Find Employee whose Salary is Greater than 75000  ********************`);
for (const emp of array) {
    if(emp.emp_salary>75000){
        console.log(`Name: ${emp.emp_name}  Company:${emp.emp_company}  Salary : ${emp.emp_salary}`);
    }
}

console.log(`******************** step 5: Find Employee whose Salary is Greater than equal to 50000 and 'IT" Department ********************`);
for (const emp of array) {
    if(emp.emp_salary>=50000 && emp.emp_dept == "IT"){
        console.log(`Name:"${emp.emp_name}" 
 Id: "${emp.emp_id}"  Department: "${emp.emp_dept}"  
 Salary: "${emp.emp_salary}"  Company: "${emp.emp_company}"`);
    }
    
}

console.log(`******************** step 6:Find out all the employee from company "Infy" company ********************`);
for (const emp of array) {
    if(emp.emp_company == "Infy"){
        console.log(`Name:"${emp.emp_name}" 
 Id: "${emp.emp_id}"  Department: "${emp.emp_dept}"  
 Salary: "${emp.emp_salary}"  Company: "${emp.emp_company}"`);
    }
    
}