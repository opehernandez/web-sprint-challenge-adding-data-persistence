// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Project = require('./model')
const { errHandler, checkPayload } = require('./middleware')

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', checkPayload, (req, res, next) => {
   Project.create(req.body)
    .then(proj => {
        const result = {...proj[0], project_completed : !!proj[0].project_completed}
        res.status(201).json(result)
    })
    .catch(err => {
        next(err)
    })
})

router.use(errHandler)
module.exports = router
