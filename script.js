const character = "#";
const count = 8;
const rows =[];//["#","#","#"]

for(let i =0;i<count;i++){
    rows.push(character.repeat(i))
}
console.log(rows);


//for of loop

let string= ""
for(const row of rows){
    string = string + row + "\n"
}
console.log(string);

