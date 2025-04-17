class Emmployeewages {
    constructor(wageperhour = 20) {
        this.wageperhour = wageperhour;
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

        if (check === 1) {
            console.log("Employee is present");
            const checker = Math.floor(Math.random() * 2) + 1; 

            const hours = this.getworkhours(checker);

            if (hours === 8) {
                console.log("Employee is full time present");
            } else if (hours === 4) {
                console.log("Employee is part time present");
            }

            const empwage = hours * this.wageperhour;
            console.log("Employee wage is: " + empwage);

        } else {
            console.log("Employee is absent");
            console.log("Employee wage is: 0");
        }
    }
}

const result = new Emmployeewages();
result.calculatewage();
