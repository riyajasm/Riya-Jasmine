class Riya {
    constructor(a) {
        this.a=a
        console.log("i am a constructor of riya")
    }
    webdeveloper(a){
        console.log("riya is a web developer")
        this.a=a;

    }
    internship(){
        console.log("i got internship")
    }
}
class Jasmine extends Riya{
    constructor(a){
        
        super(a)
        console.log("jamine constructor")
        console.log("keep on coding u will get internship")

    }
    webdeveloper(a){
        
        super.webdeveloper(a)
        console.log("i will be strong webdeveloper ;;;;")
    }
}
let a = new Riya()
// console.log(a)
let b=new Jasmine()
console.log(b)
b.webdeveloper(1)