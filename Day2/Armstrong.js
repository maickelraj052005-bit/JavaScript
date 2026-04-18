let original=153, lastDigit,sum=0,num;


 num = original;
while(num>0)
{
    lastDigit= num%10; 
    sum=sum+Math.pow(lastDigit,3)
    num=Math.floor(num/10)
}
let lastResult;

if(original===sum)
    {
        lastResult = original+" is a amstrong";
    }
else
{
    lastResult = original+" is not a amstrong";
}
console.log(lastResult);
document.getElementById("result").innerText=lastResult;

