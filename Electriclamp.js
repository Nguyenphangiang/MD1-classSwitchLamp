class Switchbutton{
    constructor(status,lamp) {
        this.status=status;
        this.lamp=lamp;
    }
    switchButton(status){
        if (this.status){
            alert("Lighting");
        } else {
            alert("Not Lighting")
        }
    }
    connectToLamp(lamp){
        this.status=lamp.status
    }
    switchOnOff(){
        this.status = ! this.status
    }
}
let congtac= new Switchbutton(false)
congtac.connectToLamp(myLamp)
for (let i = 0; i < 10; i++) {
    congtac.switchOnOff()
    congtac.switchButton()
    console.log(" bật tắt")
}