const express = require('express')
const app = express()
const port = 3001
app.set("view engine","ejs");


app.get('/', (req, res) => {
    let sitename="RR footware"
    let s="search footware"
    let arr=["columbus","crocss","walkkaro","vkc","paragon"]
  res.render("index.ejs", {sitename,s,arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})