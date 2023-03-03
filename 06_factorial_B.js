function factorialOfWordsCount(str)
  {
     var factorial =1;

        if(typeof str !=="string")
         {
           console.log(`"${str}" is invalid input Data`);
        }
        else 
        {
         let spl = str.split(" ");
         let  total=spl.length;
        for (let index =total; index >=1; index--)
        {
           factorial = factorial * index; 
        }
         console.log(`Total number of words present in " ${str}" are  "${total}" And fctorial of"${total}" is *${factorial}*`);
    }
}
factorialOfWordsCount("Revision is the mother of sucess")
factorialOfWordsCount(undefined)
factorialOfWordsCount("We never fail, we always learn")
factorialOfWordsCount(null)
factorialOfWordsCount("")
factorialOfWordsCount("Neha Ganesh Koli")
factorialOfWordsCount(NaN)