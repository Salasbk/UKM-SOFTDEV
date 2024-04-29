const express = require('express')
const app = express()
let users = []


app.use(express.json())

app.get('/',(req,res)=>{
    res.send(users)
})
app.post('/',(req,res)=>{
    const data = req.body
    users = [...users,data]
    res.send('user created')
})
app.delete('/:NAME?',(req,res)=>{
    const params = req.params.NAME
    let deleteUser = users.filter(val => val.NAME!==params)
    users = deleteUser
    res.send(users)
})

app.listen(150,()=>{
    console.log('Server is running on port 1')
})
