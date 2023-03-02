console.log(`********step 1: write a function expression to count the total number of vowels **********************`);

var vowelCount = function(string)
{
    var vowels="";
    var count = 0;
    for (let index = 0; index < string.length; index++) {
         char = string.charAt(index);
      if (char == "a" || char=="e" || char=="i"|| char== "o" ||char=="u" || char=="A" || char == "E"|| char=="I" || char=="O" || char=="U") 
        {
          vowels = vowels + char;
          count = vowels.length;
          
         }
         
        }
        return count;
       }
var  result=vowelCount("Javascript is the language Of Internet");
console.log(`Given string "Javascript is the language Of Internet" has Vowel count: ${result}`);
var result=vowelCount("I am Angular Developer");
console.log(`Given string "I am Angular Developer" has Vowel count: ${result}`);
 var result=vowelCount("Hard work and commitment is the key of success");
 console.log(`Given string "Hard work and commitment is the key of success" has Vowel count: ${result}`);
 //var result=vowelCount("nEha")
 //console.log(`Given string "neha" has Vowel count: ${result}`);
 var result=vowelCount("HTML")
 console.log(`Given string "HTML" has Vowel count: ${result}`);
 
 console.log(`********step 2: Calculate total characters available in the last word **********************`);
 function lastWordCharsCount(str) {
     var v="";
     var count = 0;
  
    for (let index = str.length-1; index >=0; index--) {
     var char = str.charAt(index);
      if(char ==" ")
      {
        break;
      }
      v = v + char;
      count=v.length;
    }
    
    return count;
}
 var result=lastWordCharsCount("Javascript is the language Of Internet");
console.log(`Given string "Javascript is the language Of Internet" last word chara count:${result}`);
var result=lastWordCharsCount("I am Angular Developer");
 console.log(`Given string "I am Angular Developer" has last word count : ${result}`);
  var result=lastWordCharsCount("Hard work and commitment is the key of success");
  console.log(`Given string "Hard work and commitment is the key of success" has last word count: ${result}`);

// console.log(`************************************************************`);
//   var vowelC= function(string)
//   {               
//       var vowels="AeEiIoOuUa";
//       var count = 0;
//       for (let index = 0; index < string.length; index++) {
//            //char = string.charAt(index);
//         if (vowels.indexOf(string[index]) !==-1)
//           {
        
//             count += 1;
            
//            }
           
//           }
//           return count;
//          }
//   var  result=vowelC("Javascript is the language Of Internet");
//   console.log(`Given string "Javascript is the language Of Internet" has Vowel count: ${result}`);
//   var result=vowelC("I am Angular Developer");
//   console.log(`Given string "I am Angular Developer" has Vowel count: ${result}`);
//   var result=vowelCount("Hard work and commitment is the key of success");
//  console.log(`Given string "Hard work and commitment is the key of success" has Vowel count: ${result}`);