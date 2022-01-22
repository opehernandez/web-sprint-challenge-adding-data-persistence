// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
}

const getById = (project_id) => {
    return db('projects')
        .where({ project_id })
}

const create = (project) => {
    return db('projects')
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