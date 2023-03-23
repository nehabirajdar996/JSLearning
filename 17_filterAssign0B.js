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
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

const array=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`************ step 1: find all employees from "TCS" using filter()`);
const tcsEmp =array.filter (element=> element.emp_company =="TCS").map(element=>{return `Emp Name: "${element.emp_name}"  Emp company : "${element.emp_company}"`  })
console.log(`All employees from "TCS" :${tcsEmp}`);

console.log(`************ step 2: find the average salary of emp from company "Wipro"`);
const avgSalary= array.filter(element => element.emp_company=="Wipro").map(element=>{return element.emp_salary})
console.log(avgSalary);
const len = avgSalary.length;
const avg =avgSalary.reduce((curentValu,value) => {return (curentValu + value)})
console.log(`Total: "${avg}"`);
console.log(`Length :"${len}"`);
const finalAvg = avg/len;
console.log(`Average Salary of employees from "Wipro" company is: "${finalAvg}"`);

console.log(`************ step 3: find the average salary of emp from company "Wipro" and "Infy"`);
const combAvg = array.filter(element => (element.emp_company=="Wipro" || element.emp_company=="Infy")).map(element=> element.emp_salary)
console.log(combAvg);
const length = combAvg.length;
const reduce = combAvg.reduce((currentvalue,value)=> currentvalue + value);
console.log(reduce);
console.log(`Total: "${reduce}"`);
console.log(`Length: "${length}"`);
const finalCombineAvg = reduce/length;
console.log(`The average salary of emp from company Wipro and Infy: "${finalCombineAvg}"`);