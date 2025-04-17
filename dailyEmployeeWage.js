const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Crate a function to get work hours based on work type
function getWorkHours(workType) {
  switch (workType.toLowerCase()) {
    case "full-time":
      return 8;
    case "part-time":
      return 4;
    default:
      return 0;
  }
}

class DailyEmployeeWages {
  constructor(name, wagePerHour) {
    this.name = name;
    this.wagePerHour = 20; // Default wage per hour
   
  }

  checkAttendance() {
    const attendance = Math.floor(Math.random() * 2); 

    if (attendance === 1) {
      console.log(`${this.name} is Present`);
      this.askWorkType();
    } else {
      console.log(`${this.name} is Absent`);
      this.askNextEmployee();
    }
  }

  askWorkType() {
    rl.question("Enter work type (Full-Time / Part-Time): ", (workType) => {
      
      const hoursWorked = getWorkHours(workType);

      if (hoursWorked === 0) {
        console.log("Invalid work type.");
        this.askNextEmployee();
        return;
      }

      

      console.log(`${this.name} worked ${hoursWorked} hours.`);
      const totalWage = hoursWorked * this.wagePerHour;
      console.log(`Total Wage for ${this.name} per day: $${totalWage}`);

      this.calculateMonthlyWage(hoursWorked);
    });
  }

  calculateMonthlyWage(dailyHours){
    const workingdays = 20;
    const monthlywage = dailyHours * workingdays * this.wagePerHour;
    console.log(`Monthly Wage for ${this.name}: $${monthlywage}`);
    this.askNextEmployee();
  }

  askNextEmployee() {
    rl.question("Do you want to check another employee? (y/n): ", (answer) => {
      if (answer.toLowerCase() === 'y') {
        askEmployee();
      } else {
        rl.close();
      }
    });
  }
}

function askEmployee() {
  rl.question("Enter employee name (or type 'n' to stop): ", (employeeName) => {
    if (employeeName.toLowerCase() === 'n') {
      rl.close();
    } else {
      const employee = new DailyEmployeeWages(employeeName);
      employee.checkAttendance();
    }
  });
}

askEmployee();
