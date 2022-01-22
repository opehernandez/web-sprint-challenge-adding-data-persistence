// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const { errHandler } = require('./middleware')
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getAll()
        .then(tasks => {
            res.json(tasks)
        })
})

router.use(errHandler)
module.exports = router