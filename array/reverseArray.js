
//reverse array type one useing unshift

let array =[1,2,3,4,5];
const resersed =[]
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
resersed.unshift(array[i]);
  
   
}
console.log(resersed);

//type two ->useing reverse funtion
console.log(array);
array.reverse();
console.log(array);
