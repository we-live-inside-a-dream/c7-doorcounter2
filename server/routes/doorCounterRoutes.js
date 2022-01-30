const express = require('express')
const doorCounter = require('../models/doorCounter')

const router = express.Router()

router.get('/', async (req, res) => {
    let counterList = await doorCounter.list()
    res.send(counterList)
})

router.get('/:name', async (req, res) => {
    let name = req.params.name
    let counter = await doorCounter.getCounterValue(name)
    res.send(counter)
})

router.get('/:name/increment', async (req, res) => {
    let name = req.params.name
    let counter = await doorCounter.incrementCounter(name)
    res.send(counter)
})

router.get('/:name/decrement', async (req, res) => {
    let name = req.params.name
    let counter = await doorCounter.decrementCounter(name)
    res.send(counter)
})

router.get('/:name/reset', async (req, res) => {
    let name = req.params.name
    let counter = await doorCounter.resetCounter(name)
    res.send(counter)
})

module.exports = router