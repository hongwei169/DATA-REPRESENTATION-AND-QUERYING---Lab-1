class vehicle{

    make;
    model;
    year;
    
    
    //3 arguments constructor 
    constructor(make,model,year)
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }
    
    //the method called information which writes the info into console
    information()
    {
        console.log(`Car made : ${this.make} Model : ${this.model} Year : ${this.year}`);
    }
    
    }
    //object
    let car1 = new vehicle("Honda","Civic",2000);
    car1.information();
    //create a class called cars
    class cars extends vehicle{
    //constructor with 4 arguments
        constructor(make,model,year,doors)
        {
            super(make,model,year);
            this.doors = doors;
        }
    //The number of doors and show on console
        information()
        {
            super.information();
            console.log(`The car has ${this.doors} doors`);
        }
    }
    //the object for car and doors
    let car2 = new cars("Honda","Civic",2000,4);
    car2.information();
    
    