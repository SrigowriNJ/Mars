function getUser(){
    var empName=document.getElementById("firstName").value;
    var HoursWorked=document.getElementById("hoursWorked").value;
    var Designation=document.getElementById("Designation").value;

    var salary=0;
    switch(Designation){
        case "Manager":salary=HoursWorked*90;
                       break;
        case "Consultant": salary=HoursWorked*70;
                           break;
        case "Trainee": salary=HoursWorked*45;
                        break;

    }
    //alert(salary);
    window.localStorage.setItem('Name',empName);
    window.localStorage.setItem('Salary',salary);
    window.localStorage.setItem('Des',Designation);

}