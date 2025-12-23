console.log("hello world");
var slugify = require('slugify')

const a=slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b=slugify('some s&6tring', '_') 
console.log(b)
//....................................


const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world this is Riya Jasmine!');
});

app.listen(3000, () => {
  console.log();
});
