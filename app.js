// Importing readline module
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


class EmployeeAttendanceChecker {
    constructor(name) {
        this.name = name;
    }

    checkAttendance() {

        const attendance = Math.floor(Math.random() * 2);

        if (attendance === 1) {
            console.log(`${this.name} is Present`);
        } else {
            console.log(`${this.name} is Absent`);
        }
    }
}

function askEmployee() {
    rl.question("Enter employee name(or type 'n' to stop): ", function (employeeName) {
        if (employeeName.toLowerCase() === 'n') {

            rl.close();

        } else {
            const employee = new EmployeeAttendanceChecker(employeeName);
            employee.checkAttendance();
            askEmployee(); 

        }
    });

}

askEmployee();
