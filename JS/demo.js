/*
let num1=123456
let sum=0
for(i=0;i<6;i+=2){
sum=sum+num1%10
num1=parseInt(num1/10)
}
console.log(sum)
*/

const employee={
    empID:'',
    empName:'',
    address:'',
    organisation:'',
    role:{
        withinTeam:'',
        withinOrganisation:'',

    }
}

let display=({empName,empID,withinTeam}) => console.log()