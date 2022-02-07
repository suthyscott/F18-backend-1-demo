const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory', (req, res) => {
    console.log(req.query)

    if(req.query.item){
        const filteredItems = inventory.filter((invItem) => invItem.toLowerCase().includes(req.query.item.toLowerCase()))

        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
})


app.get('/api/inventory/:index', (req, res) => {
    console.log(typeof req.params.index)
    // const item = inventory[Number(req.params.index)]
    // res.status(200).send(item)

    res.status(200).send(inventory[+req.params.index])
})

const SERVER_PORT = 5050

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))