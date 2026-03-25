let num=Number(prompt("Enter your Number here !")),rev=0,original;
original=num;
while(num>0)
{
    let lastDigit= num%10;
    rev= rev*10+lastDigit;
    num= Math.floor(num/10);
 
}


let resultLine;

if (rev===original) {
    resultLine=rev+"is a palindrome"
}
else
{
    resultLine =rev + " is not a palindrome"
}
console.log(resultLine);

document.getElementById("result").innerText=resultLine;


// document.getElementById("result").innerText=rev+" is " +(rev===original? "" :" not ")+"a  Plaindrome.";