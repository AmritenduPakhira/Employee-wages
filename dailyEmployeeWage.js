
class Emmployee {
    constructor(wageperhour = 20) {
        this.wageperhour = wageperhour;
        this.workingdays = 20;
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
        const check = Math.floor(Math.random() * 2); 

        while(this.totalwalkingdays  < this.workingdays) {
            this.totalwalkingdays++;

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
                console.log(`Total hours worked : ${hours} hours in a day`);
                
                this.totalworkinghours += hours;
            
                this.totalwage += empwage;
               
            } else {

                console.log("Employee is Absent : " + this.totalwalkingdays + " day");
                console.log("Employee wage is: 0");
                console.log(`Total hours worked : ${this.totalworkinghours} hours in a day`);
                continue;
            }



        }

        console.log(`\nSummary of employee wage:`);

        console.log("Total working hours: " + this.totalworkinghours);
        console.log("Total wage: " + this.totalwage);
        console.log("Total working days: " + this.totalwalkingdays)

        
    }
}

const result = new Emmployee();
result.calculatewage();
