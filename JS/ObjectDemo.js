let student={
    name:'Jane',
    class: 'Science',
    grade: 'B+'
}

student.rollNum='34';

for(const key in student){
    console.log(key+":"+student[key])
}