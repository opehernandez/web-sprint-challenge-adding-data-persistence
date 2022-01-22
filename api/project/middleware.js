const errHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message})
}

const checkPayload = (req, res, next) => {
    const { project_name } = req.body
    !project_name ? res.status(400).json({message: `missing name for the project`}) : next()
}

module.exports = {
    errHandler,
    checkPayload
}