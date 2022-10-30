const express = require('express')
//const path = require('path')
//const favicon = require('serve-favicon')
require('dotenv').config()
require('./config/database')

const port = process.env.PORT || 3001

const app = express()
//const bcrypt = require('bcrypt')

//const UserModel = require('./models/User')
const ReviewModel = require('./models/Review')
const OrderModel = require('./models/Order')
//const jwt = require('jsonwebtoken')

const cors = require('cors')

app.use(express.json())
app.use(cors())

//app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
//app.use(express.static(path.join(__dirname, 'build')))

//Routes

app.use('/api/users', require('./routes/api/users'));


//Reviews
app.get('/reviews', (req, res) => {
    ReviewModel.find({}, (err, foundReviews) => {
        if (err) {
            res.json(err)
        } else {
            res.json(foundReviews)
        }
    })
})

app.post('/reviews', async (req, res) => {
    const review = req.body
    const newReview = new ReviewModel(review)
    await newReview.save()

    res.json(review)
})

//Orders

app.get('/orders', (req, res) => {
    OrderModel.find({}, (err, foundOrders) => {
        if (err) {
            res.json(err)
        } else {
            res.json(foundOrders)
        }
    })
})

app.post('/orders', async (req, res) => {
    const order = req.body
    const newOrder = new OrderModel(order)
    await newOrder.save()

    res.json(order)
})



//app.get('/*', (req, res) => {
 //   res.sendFile(path.join(__dirname, 'build', 'index.html'))
//  });
  


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})