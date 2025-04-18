class Employee{

    constructor(wageperhour = 20){
        this.wageperhour = wageperhour;
        this.fulltimehours = 8;
        this.parttimehours = 4;
    }
}

const ispresent = Math.floor(Math.random() * 2);

if(ispresent == 0){
    console.log("Employee is : Absent");
    console.log("Daily wage is : 0");
}else{ 
    console.log("Employee is : Present");
    const check = Math.floor(Math.random() * 2)+1;
   
      if(check == 1){
        console.log("Employee is Present : Full time");
        const emp = new Employeewagecalculator();
        const dailywage = emp.wageperhour * emp.fulltimehours;
        console.log("Daily wage is " + dailywage);
      }else{
        console.log("Employee is Present : Part time");
        const emp = new Employeewagecalculator();
        const dailywage = emp.wageperhour * emp.parttimehours;
        console.log("Daily wage is " + dailywage);
      }

}