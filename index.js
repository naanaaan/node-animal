const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/sound/:name', (req, res) => {
    const { name }= req.params
    
    if (name == "dog"){
        res.send({"sound" : "멍멍"})
    } else if (name == "cat"){
        res.send({"sound" : "냐옹"})
    } else if (name == "pig"){
        res.send({"sound" : "꿀꿀"})
    } else {
        res.send({"sound" : "알수없음"})
    }
    console.log({"sound" : name})
    
  })