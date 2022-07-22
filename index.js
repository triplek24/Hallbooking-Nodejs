const express = require("express")
const app = express();


let rooms = []
app.use(express.json())

app.get("/rooms", (req,res) =>{
    res.json(rooms)
})

app.post("/create-room", (req,res) =>{
    req.body.id = rooms.length + 1
    rooms.push(req.body)
    console.log(rooms)
    res.json({message : "room created"})
})

let customers = []

app.get("/customers", (req,res) =>{
    res.json(customers)
})

app.post("/create-customers", (req,res) =>{
    req.body.id = customers.length + 1
    customers.push(req.body)
    console.log(customers)
    res.json({message : "room created"})
})

app.get("/allRoomBookedData", (req,res) =>{
    res.json(customers)

})

app.get("/allCustomerBookedData",(req,res) =>{

    const result = customers.map(({bookedStatus, ...rest}) => rest);
    res.json(result)
      
})








app.listen(3000)