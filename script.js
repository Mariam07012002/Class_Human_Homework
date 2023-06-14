class Human {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.speed = 0;
        this.state = undefined;
    }
    // speed 

    run(speed) {
        this.speed = speed;
       alert(`${this.firstName} is speed to ${this.speed}`);
    }

    stope() {
        this.speed = 0;
        alert(`${this.firstName}is stopped`)
    }

    changeState(state){
        this.state = state;
        alert(`change state to ${this.state}`)
    }
}

//obj 

const obj = new Human('Alex','Grigoryan')
console.log(obj)
obj.run(25)
obj.stope(10)
obj.changeState('run')