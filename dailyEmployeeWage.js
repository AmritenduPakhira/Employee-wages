const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class DailyEmployeeWages {
    constructor(name) {
        this.name = name;
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
        rl.question("Enter work type (Full-Time/Part-Time): ", (workType) => {
            const wagePerHour = 20;
            let hoursWorked;

            if (workType.toLowerCase() === "full-time") {
                hoursWorked = 8;
                console.log(`${this.name} worked Full-Time (8 hours).`);
            } else if (workType.toLowerCase() === "part-time") {
                hoursWorked = 4;
                console.log(`${this.name} worked Part-Time (4 hours).`);
            } else {
                console.log("Invalid work type.");
                rl.close();
                return;
            }

            const totalWage = hoursWorked * wagePerHour;
            console.log(`Total Wage for ${this.name}: $${totalWage}`);

            this.askNextEmployee();
        });
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
    rl.question("Enter employee name (or type 'n' to stop): ", function (employeeName) {
        if (employeeName.toLowerCase() === 'n') {
            rl.close();
        } else {
            const employee = new DailyEmployeeWages(employeeName); // Create an object of DailyEmployeeWages
            employee.checkAttendance();
        }
    });
}

askEmployee();
