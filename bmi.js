
class bmi {
    height;
    weight;
    
    //2 arguments constructor 
    constructor(height,weight)
    {
        this.height=height;
        this.weight=weight;
    }
    //the calculation for the users bmi
    calculateBMI()
    {
    
    //this is the formula which is given

        let bmi = this.weight/(this.height**2);
        //and this give the calculation for the formula
        return bmi;
    
    }
    
    }
    let userA = new bmi(177,60);
    console.log(userA.calculateBMI());