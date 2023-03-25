class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(55,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(22,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(99,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(77,"Mahesh","HR",85000,"Infy");

const arrayEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`********************* step 1:sort the Employee array in ascending order by employee "id" *****************`);
const sortid = arrayEmployee.sort((emp1,emp2) =>{
    return emp1.emp_id > emp2.emp_id ? 1:-1;
    }).map(ele => `1."id" :"${ele.emp_id}"   2."name": "${ele.emp_name}"   3."Department": "${ele.emp_dept}"`)
console.log(`Sorted the array in ascending order by employee "id" is :"${sortid}"`);

console.log(`********************* step 2:sort the employye array in ascending order by employee "department" *****************`);
const sortDep = arrayEmployee.sort((emp1,emp2) =>{
    return emp1.emp_dept > emp2.emp_dept ? 1:-1;
}).map(element => ` "dept" :"${element.emp_dept}" "id": "${element.emp_id}"  "name": "${element.emp_name}"  "Cmpany": "${element.emp_company}"`)
console.log(`sorted  the array in ascending order by employee "department" is "${sortDep}"`);

console.log(`********************* step 2:sort the employee array in Decending order by employee "Salary" *****************`);
const sortSalary =arrayEmployee.sort((emp1,emp2) => {
    return emp1.emp_salary>emp2.emp_salary ?  -1: 1;
}).map(Element =>  `1."Name" :"${Element.emp_name}"   2."Salary": "${Element.emp_salary}"   3."Company": "${Element.emp_company}"`)
console.log(sortSalary);