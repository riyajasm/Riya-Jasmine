console.log("functions concept");
function riya(name){
    console.log("hey "+name+"u r nice!!..");
    console.log("hey "+name+"u r so beautiful!!..");
    console.log("hey "+name+"u r a good web developer!!..");
}
riya("jasmine");
function sum(a,b,c=1)
{
    console.log(a+b);
    console.log(a,b,c);
    return a+b+c;
}
console.log(sum(3,2));
result1=sum(3,2,5);
result2=sum(3,6,5);
console.log(result1);
console.log(result2);
console.log("1st res "+result1+" and 2nd res "+result2);
const func1=(x)=>{
    console.log("i am a arrow fun",x);
}
func1(34);
func1(334);