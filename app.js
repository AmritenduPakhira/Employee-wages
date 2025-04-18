class Emmployee {
    constructor(wageperhour = 20, workingdays = 20, maxHours = 160) {
        this.wageperhour = wageperhour;
        this.workingdays = workingdays;
        this.maxHours = maxHours;
        this.totalwage = 0;
        this.totalworkinghours = 0;
        this.totalwalkingdays = 0;
    }

    getworkhours(empcheck) {
        switch (empcheck) {
            case 1:
                return 8;
            case 2:
                return 4;
            default:
                return 0;
        }
    }

    calculatewage() {
        while (this.totalwalkingdays < this.workingdays && this.totalworkinghours < this.maxHours) {
            this.totalwalkingdays++;

            const check = Math.floor(Math.random() * 2); 

            if (check === 1) {
                console.log("Employee is present: " + this.totalwalkingdays + " day");
                const checker = Math.floor(Math.random() * 2) + 1; 
                const hours = this.getworkhours(checker);

                if (hours === 8) {
                    console.log("Employee is Present : Full time");
                } else if (hours === 4) {
                    console.log("Employee is Present : Part time");
                }

                const empwage = hours * this.wageperhour;
                console.log("Employee wage is: " + empwage);
                console.log(`Total hours worked today: ${hours} hours`);

                this.totalworkinghours += hours;
                this.totalwage += empwage;
            } else {
                console.log("Employee is Absent : " + this.totalwalkingdays + " day");
                console.log("Employee wage is: 0");
                console.log(`Total hours worked today: 0 hours`);
            }

            console.log("--------------------------------");
        }

        console.log(`\nFinal Summary:`);
        console.log("Total working hours: " + this.totalworkinghours);
        console.log("Total wage: " + this.totalwage);
        console.log("Total working days: " + this.totalwalkingdays);
    }
}

const result = new Emmployee();
result.calculatewage();
