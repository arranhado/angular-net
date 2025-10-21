console.log("1.For loop");
for (let i = 0;i < 3; i++){
    console.log(`Iteration ${i}`);

}
console.log("\n2.While Loop:");
let count = 0;
while(count < 3){
    console.log(`count:${count}`);
    count++;
}

console.log("\n3.Dow While Loop:");
let num =0;
do{
    console.log(`Number:${num}`);
    num ++;
 } while (num < 3);
console.log ("\n4.for...off loop");
const numbers:number[] = [1,2,3];
for (const num of numbers){
    console.log(`Array value: ${num}`)
}
console.log("\n5. for..in loop:");
const person ={
    name:"Jhon",
    age:30,
    city:"New Work"
}
for (const key in person){
    console.log(`${key}: ${person[key as keyof typeof person]}`);
}

console.log("\n6. forEach loop:");
const fruits: string[] = ["apple","banana","orange"];
fruits.forEach((fruit,index)=>{
    console.log(`Fruit ${index}: ${fruits}`);
});
