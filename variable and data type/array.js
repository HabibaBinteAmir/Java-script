//string is immutable -> not changeable !
// using upper case and lowercase funtions
const a ="water";
const b ="   Water"
if (a .toLocaleLowerCase==b .toLocaleLowerCase) {
    console.log("same");
    
} else {
     console.log("Not same");
}
//string is immutable -> not changeable !
const d ="Water";
const f ="water"
if (d.toUpperCase==f.toUpperCase) {
    console.log("same");
    
} else {
     console.log("Not same");
}
//what if we have extra space ??
console.log(f.trim());
 //split,join,concat

 //split
 let students ="this is the list of my studens names";
 console.log(students.split());
 console.log(students.split(""));
 console.log(students.split(" "));
 console.log(students.split("s"));

//join
let realFriends =['rahim','karim','lahim','farim'];
console.log(realFriends.join("-"));
console.log(realFriends.join("|"));

//concat -> gets things together 
const first ='Abid';
const last ='Nabin';
console.log(first+" "+last);
console.log(first.concat( " ").concat(last));
//includs -> to cleck if the element is in the string
console.log(last.includes('x'));
console.log(last.includes('n'));



 