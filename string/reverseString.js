//letter by letter 
const sentence ="i am learning web development";
// for(const letter of sentence){
//     console.log(letter);
// }
 
let reverse =" ";
for(const  letter of sentence){
    reverse=letter +reverse;
}
console.log(reverse);
//reverse by useing loop
let rev =' ';
for (let i= 0; i< sentence.length; i++) {
    const letters =sentence[i];
    rev =letters +rev
    
}
console.log(rev);


//shortcut
const reversed =sentence.split(" ").reverse().join(' ');
console.log(reversed);