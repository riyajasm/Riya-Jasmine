/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 
Shop Name:
Engine
Foods
Garments
Another Word:
Bros
Limited
Hub
*/ 
//let obj={}
let ran=Math.random();
let a,b,c;
if(ran<0.33)
{
  a="crazy";

}
else if(ran<0.66 && ran >=0.33){
     a="Amazing";
}
else{
     a="Fire";
}
 ran=Math.random();
if(ran<0.33)
{
  b="engine";

}
else if(ran<0.66 && ran >=0.33){
     b="food";
}
else{
     b="garment";
}
 ran=Math.random();
if(ran<0.33)
{
  c="bros";

}
else if(ran<0.66 && ran >=0.33){
   c="limited";
}
else{
     c="hub";
}
console.log(`${a} ${b} ${c}`);
