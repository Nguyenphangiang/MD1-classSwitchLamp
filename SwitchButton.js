class ElectricLamp{
    constructor(status) {
        this.status=status;
    };
    turnOn0ff(){
        this.status = !this.status
    }
}
let myLamp= new ElectricLamp(false)
let niLamp= new ElectricLamp(false)