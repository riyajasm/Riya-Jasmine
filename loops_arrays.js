let a=[2,4,5,7,8];
let newArray=a.map((e)=>
{
    return e**2;
});
console.log(newArray);
console.log(a.filter(b=(a)=>{
    if (a>5)
    {
        return true;
    }
    return false;
}
));

