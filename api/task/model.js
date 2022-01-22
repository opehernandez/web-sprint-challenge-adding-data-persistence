// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks')
}

const getById = (task_id) => {
    return db('tasks')
        .where({ task_id })
}

const create = (project) => {
    return db('tasks')
        .insert(project)
            .then(id => {
                return getById(id[0])
            })
}

module.exports = {
    getAll,
    getById,
    create
}