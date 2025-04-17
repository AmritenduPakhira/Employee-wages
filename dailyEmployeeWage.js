function getWorkHours(type) {
    switch (type) {
        case 'full-time':
            return 8;
        case 'part-time':
            return 4;
        default:
            return 0;
    }
}

class EmployeeWageCalculator {
    constructor(wagePerHour = 20) {
        this.wagePerHour = wagePerHour;
        this.totalWorkingHours = 0;
        this.totalWorkingDays = 0;
        this.totalWage = 0;
        this.maxHours = 120;
        this.maxDays = 20;
    }

    simulateMonth() {
        console.log("----- Employee Monthly Work Simulation -----");

        while (this.totalWorkingDays < this.maxDays && this.totalWorkingHours < this.maxHours) {
            this.totalWorkingDays++; 

            const isPresent = Math.floor(Math.random() * 2); // 0 = Absent, 1 = Present

            if (isPresent === 0) {
                console.log(`Day ${this.totalWorkingDays}: Absent - No Wage`);
                continue; 
            }

            const workType = Math.floor(Math.random() * 2 ) ? 'part-time' : 'full-time';
            const hoursWorked = getWorkHours(workType);

            if (this.totalWorkingHours + hoursWorked > this.maxHours) break;

            this.totalWorkingHours += hoursWorked;
            const dailyWage = hoursWorked * this.wagePerHour;
            this.totalWage += dailyWage;

            console.log(`Day ${this.totalWorkingDays}: Present (${workType}) - ${hoursWorked} hrs - ₹${dailyWage}`);
        }

        console.log("----- Final Summary -----");
        console.log(`Total Days Counted: ${this.totalWorkingDays}`);
        console.log(`Total Hours Worked: ${this.totalWorkingHours}`);
        console.log(`Total Wage: ₹${this.totalWage}`);
    }
}


const employee = new EmployeeWageCalculator();
employee.simulateMonth();
