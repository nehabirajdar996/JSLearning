console.log("**************************step 1**************************");// ((functions with no argumnets and no return type))
function myHobbies() { 
    console.log("My hobbies are: 1.Reading,2.Singng 3.Dancing 4.Art 5.Cooking");//logic
}
myHobbies(); //function call
function myFavColors(){
    console.log("My favourite colors are:1.black 2.skyblue 3.orange");
}
myFavColors();
console.log("**************************step 2***************************");//((functions with argumnets and no return type))
function personalDetails(firstName,lastName,collegeName) {
    console.log("firstName:",firstName,"lastName:",lastName,"collegeName:",collegeName);
}
personalDetails("Neha","Koli","WIT Solapur");
console.log("**************************step 3***************************");//((functions with  argumnets and no return type))
function swapValuesDude(value1,value2){
    console.log("  # values before swap #    ");
    console.log("value1:",value1,"value2:",value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("   # values After swap #     ");
    console.log("value1:",value1,"value2:",value2);
}
swapValuesDude("virat","Anushka");
swapValuesDude(1000,2000);
console.log("**************************step 4***************************");//((functions with  argumnets and  return type))
function addThreeValues(val1,val2,val3) {
    sum=val1 + val2 + val3;
    return sum;
}
result=addThreeValues(10.23,600,40);
console.log("sum of three values are:",result);
result=addThreeValues("Hello","Good","Morinig");
console.log("sum of three values are:",result);






    


