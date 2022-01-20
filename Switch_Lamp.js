class switchButton{
    constructor(status) {
        this.status = status;
    }

    switchOn(object){
        this.status = true;
        object.switchOn();
    }
    switchOff(object){
        this.status = false;
        object.switchOff();
    }
}
class electricLamp{
    constructor(status) {
        this.status = status;
    }
    switchOn(){
        this.status = true;
    }
    switchOff(){
        this.status = false;
    }
}
let sw = new switchButton(true);
let lamp = new electricLamp(true);