class Employeewagecalculator{

    constructor(wageperhour = 20){
        this.wageperhour = wageperhour;
        this.fulltimehours = 8;
        this.parttimehours = 4;
    }
}

const ispresent = Math.floor(Math.random() * 2);

if(ispresent == 0){
    console.log("Employee is absent");
    console.log("Daily wage is 0");
}else{ 
    console.log("Employee is present");
    const check = Math.floor(Math.random() * 2)+1;
   
      if(check == 1){
        console.log("Employee is full time");
        const emp = new Employeewagecalculator();
        const dailywage = emp.wageperhour * emp.fulltimehours;
        console.log("Daily wage is " + dailywage);
      }else{
        console.log("Employee is part time");
        const emp = new Employeewagecalculator();
        const dailywage = emp.wageperhour * emp.parttimehours;
        console.log("Daily wage is " + dailywage);
      }

}