class Employee {
    constructor(wageperhour = 20) {
        this.wageperhour = wageperhour;
    }

    getWorkHours(empcheck) {
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
        
        if (check === 1) {
            console.log("Employee is : Present");
            const checker = Math.floor(Math.random() * 2) + 1; 
            
            const hours = this.getworkhours(checker);

            if (hours === 8) {
                console.log("Employee is present : Full time");
            } else if (hours === 4) {
                console.log("Employee is present : Part time");
            }

            console.log(`Work hours : ${hours}`);

            const empwage = hours * this.wageperhour;
            console.log(`Employee wage is :  ${empwage}`);

        } else {

           this.getworkhours(0);
           console.log("Employee is : Absent");
           console.log("Employee wage is : 0");
           console.log(`Work hours : 0`);

        }
    }
}

const result = new Emmployeewages();
result.calculatewage();
