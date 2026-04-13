let num=5482
let largest=0,smallest=9
while (num>0)
{ 
 let digit = num%10;
 if (digit>largest) {
    largest=digit 
 }   
 if (digit<smallest) { 
    smallest=digit;
 }
 num=Math.floor(num/10); 
}
console.log(largest);
console.log(smallest);
